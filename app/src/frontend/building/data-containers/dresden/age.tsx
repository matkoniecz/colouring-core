import React, { Fragment } from 'react';

import '../../../map/map-button.css';
import './age.css';
import { dataFields } from '../../../config/data-fields-config';
import { MultiDataEntry } from '../../data-components/multi-data-entry/multi-data-entry';
import { DataEntryGroup } from '../../data-components/data-entry-group';
import { DynamicsBuildingPane, DynamicsDataEntry } from '../dynamics/dynamics-data-entry';
import { FieldRow } from '../../data-components/field-row';
import { Link } from 'react-router-dom';
import { Category } from '../../../config/categories-config';
import NumericDataEntry from '../../data-components/numeric-data-entry';
import SelectDataEntry from '../../data-components/select-data-entry';
import Verification from '../../data-components/verification';
import YearDataEntry from '../../data-components/year-data-entry';
import DataEntry from '../../data-components/data-entry';
import InfoBox from '../../../components/info-box';

import { CategoryViewProps } from '../category-view-props';
import { LogicalDataEntry } from '../../data-components/logical-data-entry/logical-data-entry';
import { useDisplayPreferences } from '../../../displayPreferences-context';

const HistoricalStatusOptions = [
    'The current footprint matches/almost exactly matches the historical map beneath, and/or is known to have been built before the map was made',
    'The building core is the same as the historical map but has had multiple additions/changes',
    'The building no longer exists',
];

function generate_virtual_map_forum_link(lat, lon) {
    return "https://kartenforum.slub-dresden.de/?b=slub-osm&c=" + lon + "," + lat + "&r=0&re=1.0252&v=0&z=17.2203";
    }

type AgeDataSourceField = 'heritage_age_data' | 'expert_age_data' | 'digital_twin_model_age_data';
type AgeDataSourceSlug = AgeDataSourceField | `${AgeDataSourceField}_lower` | `${AgeDataSourceField}_upper`;

/**
 * Read-only age data from an additional source, as year with optional range
 */
const AgeDataSourceGroup: React.FunctionComponent<CategoryViewProps & {name: string, field: AgeDataSourceField}> = (props) => {
    const switchToMapStyle = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
        props.onMapColourScale(props.field);
    };
    const slugs: AgeDataSourceSlug[] = [props.field, `${props.field}_lower`, `${props.field}_upper`];

    return (
        <DataEntryGroup name={props.name} collapsed={true}>
            {(props.mapColourScale != props.field) ?
                <button className={`map-switcher-inline enabled-state btn btn-outline btn-outline-dark key-button`} onClick={switchToMapStyle}>
                    Karte anzeigen: {props.name}
                </button>
                :
                <></>
            }
            {slugs.map(slug =>
                <Fragment key={slug}>
                    <NumericDataEntry
                        title={dataFields[slug].title}
                        slug={slug}
                        value={props.building[slug] as number}
                        mode={props.mode}
                        copy={props.copy}
                        onChange={props.onChange}
                        step={1}
                        tooltip={dataFields[slug].tooltip}
                        disabled={true}
                        />
                    <Verification
                        slug={slug}
                        allow_verify={props.user !== undefined && props.building[slug] !== null && !props.edited}
                        onVerify={props.onVerify}
                        user_verified={props.user_verified.hasOwnProperty(slug)}
                        user_verified_as={props.user_verified[slug]}
                        verified_count={props.building.verified[slug]}
                        />
                </Fragment>
            )}
        </DataEntryGroup>
    );
};

interface AgeRange {
    lower: number | null;
    upper: number | null;
    /** name of the non-crowdsourced source used as fallback, null when crowdsourced data is shown */
    fallbackSourceName: string | null;
}

/** in the same order as COALESCE in age_amalgamated map style */
const amalgamatedAgeFallbackSources: {field: AgeDataSourceField, name: string}[] = [
    {field: 'heritage_age_data', name: 'Baujahr (Denkmalliste)'},
    {field: 'expert_age_data', name: 'Baujahr (Fachkartierung)'},
    {field: 'digital_twin_model_age_data', name: 'Baujahr (maschinelles Lernen)'},
];

function isPresent(value: number | null | undefined): boolean {
    return value !== null && value !== undefined;
}

/**
 * Construction year range to display: crowdsourced if any crowdsourced value is present,
 * otherwise the first other source which would be used by the amalgamated map
 */
function getDisplayedAgeRange(building): AgeRange {
    if (isPresent(building.date_year) || isPresent(building.date_lower) || isPresent(building.date_upper)) {
        return {
            lower: isPresent(building.date_lower) ? building.date_lower : (building.date_year ?? null),
            upper: isPresent(building.date_upper) ? building.date_upper : (building.date_year ?? null),
            fallbackSourceName: null,
        };
    }
    for (const source of amalgamatedAgeFallbackSources) {
        const value = building[source.field];
        const lower = building[`${source.field}_lower`];
        const upper = building[`${source.field}_upper`];
        if (isPresent(value)) {
            return {
                lower: isPresent(lower) ? lower : value,
                upper: isPresent(upper) ? upper : value,
                fallbackSourceName: source.name,
            };
        }
        if (isPresent(lower) && isPresent(upper)) {
            return {lower: lower, upper: upper, fallbackSourceName: source.name};
        }
    }
    return {lower: null, upper: null, fallbackSourceName: null};
}

/** single year used for visualisation, average of the range */
function averageYear(lower: number | null, upper: number | null): number | null {
    if (isPresent(lower) && isPresent(upper)) {
        return Math.round((lower + upper) / 2);
    }
    if (isPresent(lower)) {
        return lower;
    }
    if (isPresent(upper)) {
        return upper;
    }
    return null;
}

/**
* Age view/edit section
*/
const AgeView: React.FunctionComponent<CategoryViewProps> = (props) => {
    const currentYear = new Date().getFullYear();

    const building = props.building;
    const thisYear = (new Date()).getFullYear();
    const currentBuildingConstructionYear = building.date_year || undefined;

    const ageLinkUrl = `/${props.mode}/${Category.AgeHistory}/${props.building.building_id}`;

    const { historicData, historicDataSwitchOnClick, darkLightTheme } = useDisplayPreferences();

    const displayedAgeRange = getDisplayedAgeRange(props.building);

    /**
     * Crowdsourced age is entered as range. Editing one end stores both ends
     * (the other one taken from what is currently displayed, possibly from fallback source)
     * and date_year as their average, used for map rendering.
     */
    const handleAgeRangeChange = (key: string, value: any) => {
        let lower = displayedAgeRange.lower;
        let upper = displayedAgeRange.upper;
        if (key === 'date_lower') {
            lower = value;
        } else if (key === 'date_upper') {
            upper = value;
        } else {
            props.onChange(key, value);
            return;
        }
        props.onChange('date_lower', lower);
        props.onChange('date_upper', upper);
        props.onChange('date_year', averageYear(lower, upper));
    };

/*     if (props.building.date_source == "Expert knowledge of building" ||
        props.building.date_source == "Expert estimate from image" ||
        props.building.date_source == null
       ){ */
      return (
          <Fragment>
            {/* crowdsourced age range repeated at the top for visibility, also present in "Gebäudealter" below */}
            {/* falls back to the data shown by amalgamated map when there is no crowdsourced data */}
            <div className="construction-year-group">
                <h3 className="construction-year-group-heading">Baujahr (kombiniert)</h3>
                <p className="construction-year-group-subheading">Die beste verfügbare Angabe aus verschiedenen Datenquellen.</p>
                <NumericDataEntry
                    title={dataFields.date_lower.title}
                    slug="date_lower"
                    value={displayedAgeRange.lower}
                    mode={props.mode}
                    copy={props.copy}
                    onChange={handleAgeRangeChange}
                    step={1}
                    min={1}
                    max={currentYear}
                    tooltip={dataFields.date_lower.tooltip}
                    />
                <Verification
                    slug="date_lower"
                    allow_verify={props.user !== undefined && props.building.date_lower !== null && !props.edited}
                    onVerify={props.onVerify}
                    user_verified={props.user_verified.hasOwnProperty("date_lower")}
                    user_verified_as={props.user_verified.date_lower}
                    verified_count={props.building.verified.date_lower}
                    />
                <NumericDataEntry
                    title={dataFields.date_upper.title}
                    slug="date_upper"
                    value={displayedAgeRange.upper}
                    mode={props.mode}
                    copy={props.copy}
                    onChange={handleAgeRangeChange}
                    step={1}
                    min={1}
                    max={currentYear}
                    tooltip={dataFields.date_upper.tooltip}
                    />
                <Verification
                    slug="date_upper"
                    allow_verify={props.user !== undefined && props.building.date_upper !== null && !props.edited}
                    onVerify={props.onVerify}
                    user_verified={props.user_verified.hasOwnProperty("date_upper")}
                    user_verified_as={props.user_verified.date_upper}
                    verified_count={props.building.verified.date_upper}
                    />
            </div>
            {(displayedAgeRange.fallbackSourceName !== null) ?
                <p>
                    Noch keine Angabe der Nutzer:innen, angezeigt wird: {displayedAgeRange.fallbackSourceName}
                </p>
                :
                <></>
            }
    
            <SelectDataEntry
                title={dataFields.architectural_style.title}
                slug="architectural_style"
                value={props.building.architectural_style}
                mode={props.mode}
                copy={props.copy}
                onChange={props.onChange}
                tooltip={dataFields.architectural_style.tooltip}
                placeholder={dataFields.architectural_style.example}
                options={dataFields.architectural_style.items}
            />
            <Verification
                slug="architectural_style"
                allow_verify={props.user !== undefined && props.building.architectural_style !== null && !props.edited}
                onVerify={props.onVerify}
                user_verified={props.user_verified.hasOwnProperty("architectural_style")}
                user_verified_as={props.user_verified.architectural_style}
                verified_count={props.building.verified.architectural_style}
            />


            <SelectDataEntry
                title={dataFields.architectural_style_source.title}
                slug="architectural_style_source"
                value={props.building.architectural_style_source}
                mode={props.mode}
                copy={props.copy}
                onChange={props.onChange}
                tooltip={dataFields.architectural_style_source.tooltip}
                placeholder={dataFields.architectural_style_source.example}
                options={dataFields.architectural_style_source.items}
            />



            <Verification
                slug="architectural_style_source"
                allow_verify={props.user !== undefined && props.building.architectural_style_source !== null && !props.edited}
                onVerify={props.onVerify}
                user_verified={props.user_verified.hasOwnProperty("architectural_style_source")}
                user_verified_as={props.user_verified.architectural_style_source}
                verified_count={props.building.verified.architectural_style_source}
            />






            <DataEntryGroup name="Gebäudealter" collapsed={false} >
                <YearDataEntry
                    year={props.building.date_year}
                    upper={props.building.date_upper}
                    lower={props.building.date_lower}
                    mode={props.mode}
                    copy={props.copy}
                    onChange={handleAgeRangeChange}
                    yearDisabled={true}

                    allow_verify={props.user !== undefined && props.building.date_year !== null && !props.edited}
                    onVerify={props.onVerify}
                    user_verified={props.user_verified.hasOwnProperty("date_year")}
                    user_verified_as={props.user_verified.date_year}
                    verified_count={props.building.verified.date_year}
                    
                    allow_verify_upper={props.user !== undefined && props.building.date_upper !== null && !props.edited}
                    onVerify_upper={props.onVerify}
                    user_verified_upper={props.user_verified.hasOwnProperty("date_upper")}
                    user_verified_as_upper={props.user_verified.date_upper}
                    verified_count_upper={props.building.verified.date_upper}
                    
                    allow_verify_lower={props.user !== undefined && props.building.date_lower !== null && !props.edited}
                    onVerify_lower={props.onVerify}
                    user_verified_lower={props.user_verified.hasOwnProperty("date_lower")}
                    user_verified_as_lower={props.user_verified.date_lower}
                    verified_count_lower={props.building.verified.date_lower}
                    />
                <NumericDataEntry
                    title={dataFields.facade_year.title}
                    slug="facade_year"
                    value={props.building.facade_year}
                    mode={props.mode}
                    copy={props.copy}
                    onChange={props.onChange}
                    step={1}
                    min={1}
                    max={currentYear}
                    tooltip={dataFields.facade_year.tooltip}
                    />
                <Verification
                    slug="facade_year"
                    allow_verify={props.user !== undefined && props.building.facade_year !== null && !props.edited}
                    onVerify={props.onVerify}
                    user_verified={props.user_verified.hasOwnProperty("facade_year")}
                    user_verified_as={props.user_verified.facade_year}
                    verified_count={props.building.verified.facade_year}
                    />

                <SelectDataEntry
                    title={dataFields.date_source.title}
                    slug="date_source"
                    value={props.building.date_source}
                    mode={props.mode}
                    copy={props.copy}
                    onChange={props.onChange}
                    tooltip={dataFields.date_source.tooltip}
                    placeholder={dataFields.date_source.example}
                    options={dataFields.date_source.items}
                    />
                <Verification
                    slug="date_source"
                    allow_verify={props.user !== undefined && props.building.date_source !== null && !props.edited}
                    onVerify={props.onVerify}
                    user_verified={props.user_verified.hasOwnProperty("date_source")}
                    user_verified_as={props.user_verified.date_source}
                    verified_count={props.building.verified.date_source}
                    />
{/*                 <InfoBox>
                    This section is under development.
                </InfoBox>
                <DataEntry
                    title="Cladding Date"
                    slug=""
                    value=""
                    mode='view'
                />
                <DataEntry
                    title="Date of Significant Extensions"
                    slug=""
                    value=""
                    mode='view'
                />
                <DataEntry
                    title="Date of Significant Retrofits"
                    slug=""
                    value=""
                    mode='view'
                /> */}
            </DataEntryGroup>

            
            <AgeDataSourceGroup
                {...props}
                name='Baujahr (Denkmalliste)'
                field='heritage_age_data'
            />
            <AgeDataSourceGroup
                {...props}
                name='Baujahr (Fachkartierung)'
                field='expert_age_data'
            />
            <AgeDataSourceGroup
                {...props}
                name='Baujahr (maschinelles Lernen)'
                field='digital_twin_model_age_data'
            />
{/*             <DataEntryGroup name="Lebenszyklus und Standortgeschichte" collapsed={true} >
                <button className={`map-switcher-inline ${historicData}-state btn btn-outline btn-outline-dark ${darkLightTheme}`} onClick={historicDataSwitchOnClick}> 
                    {(historicData === 'enabled')?'Click here to hide historical maps':'Click here to show historical maps'}
                </button>
                <DataEntryGroup collapsed={false} name="Neubau und Abriss an diesem Standort" showCount={false}>
                    <DynamicsBuildingPane>
                        <label>Aktuelles Gebäude (Baualter <Link to={ageLinkUrl}>bitte hier bearbeiten</Link>)</label>
                        <FieldRow>
                            <div>
                                <NumericDataEntry
                                    slug=''
                                    title={dataFields.demolished_buildings.items.year_constructed.title}
                                    value={currentBuildingConstructionYear}
                                    disabled={true}
                                    mode='view'
                                />
                            </div>
                            <div>
                                <NumericDataEntry
                                    slug=''
                                    title={dataFields.demolished_buildings.items.year_demolished.title}
                                    value={undefined}
                                    placeholder='---'
                                    disabled={true}
                                    mode='view'
                                />
                            </div>
                            <div style={{flex: '0 1 27%'}}>
                                <DataEntry
                                    slug=''
                                    title='Lebensspanne bis Datum'
                                    value={ (thisYear - currentBuildingConstructionYear) + ''}
                                    disabled={true}
                                    mode='view'
                                />
                            </div>
                        </FieldRow>
                    </DynamicsBuildingPane>
                    {
                        currentBuildingConstructionYear == undefined ?
                            <InfoBox>Um historische Baustände einzutragen, bitte zuerst <Link to={ageLinkUrl}>das Gebäudealter</Link> erfassen.</InfoBox> :
                            
                            <>
                                <LogicalDataEntry
                                    slug='dynamics_has_demolished_buildings'
                                    title={dataFields.dynamics_has_demolished_buildings.title}
                                    value={building.dynamics_has_demolished_buildings}
                                    disallowFalse={(building.demolished_buildings?.length ?? 0) > 0}
                                    disallowNull={(building.demolished_buildings?.length ?? 0) > 0}

                                    onChange={props.onSaveChange}
                                    mode={props.mode}
                                    copy={props.copy}
                                /> */}
{/*                                 {
                                    building.dynamics_has_demolished_buildings &&
                                    <>
                                        <DynamicsDataEntry */}
                                            
{/*                                              
                                                Will clear the edits and new record data upon navigating to another building.
                                                Should get a better way to do this, plus a way to actually keep unsaved edits.
                                            */ }
{/*                                             key={building.building_id} 
                                            
                                            value={building.demolished_buildings}
                                            editableEntries={true}
                                            slug='demolished_buildings'
                                            title={dataFields.demolished_buildings.title}
                                            mode={props.mode}
                                            onChange={props.onChange}
                                            onSaveAdd={props.onSaveAdd}
                                            hasEdits={props.edited}
                                            maxYear={currentBuildingConstructionYear}
                                            minYear={50}
                                        />
                                        {
                                            props.mode === 'view' &&
                                                <InfoBox>Switch to edit mode to add/edit past building records</InfoBox>
                                        }
                                    </>
                                }
                            </>
                    }
                </DataEntryGroup> */}
{/*                 <InfoBox>
                    This section is under development in collaboration with the historic environment sector.
                    Please let us know your suggestions on the <a href="https://discuss.colouring.london/t/dynamics-category-discussion/107">discussion forum</a>! (external link - save your edits first)
                </InfoBox> */}
{/*             </DataEntryGroup>
            <DataEntryGroup name="Überdauern und Verlust nachzeichnen mit historischen Karten" collapsed={true} >
                <InfoBox>
                    Dieser Abschnitt ist noch in der Entwicklung.
                </InfoBox>
                <button className={`map-switcher-inline ${historicData}-state btn btn-outline btn-outline-dark ${darkLightTheme}`} onClick={historicDataSwitchOnClick}> 
                    {(historicData === 'enabled')?'Click here to hide historical maps':'Click here to show historical maps'}
                </button>
                <SelectDataEntry
                    title={dataFields.historical_status.title}
                    slug="historical_status"
                    value={""}
                    tooltip={dataFields.historical_status.tooltip}
                    options={HistoricalStatusOptions}
                    mode={props.mode}
                    copy={props.copy}
                    onChange={props.onChange}
                /> */}
{/*                 <DataEntry
                    title="Historical land use change"
                    slug=""
                    value=""
                    mode='view'
                /> */}
{/*             </DataEntryGroup> */}
          </Fragment>
        );
/*       }; */
/*     return (
        <Fragment>
            <DataEntryGroup name="Gebäudealter" collapsed={true} >
                <YearDataEntry
                    year={props.building.date_year}
                    upper={props.building.date_upper}
                    lower={props.building.date_lower}
                    mode={props.mode}
                    copy={props.copy}
                    onChange={handleAgeRangeChange}
                    yearDisabled={true}

                    allow_verify={props.user !== undefined && props.building.date_year !== null && !props.edited}
                    onVerify={props.onVerify}
                    user_verified={props.user_verified.hasOwnProperty("date_year")}
                    user_verified_as={props.user_verified.date_year}
                    verified_count={props.building.verified.date_year}
                    
                    allow_verify_upper={props.user !== undefined && props.building.date_upper !== null && !props.edited}
                    onVerify_upper={props.onVerify}
                    user_verified_upper={props.user_verified.hasOwnProperty("date_upper")}
                    user_verified_as_upper={props.user_verified.date_upper}
                    verified_count_upper={props.building.verified.date_upper}
                    
                    allow_verify_lower={props.user !== undefined && props.building.date_lower !== null && !props.edited}
                    onVerify_lower={props.onVerify}
                    user_verified_lower={props.user_verified.hasOwnProperty("date_lower")}
                    user_verified_as_lower={props.user_verified.date_lower}
                    verified_count_lower={props.building.verified.date_lower}
                    />
                <NumericDataEntry
                    title={dataFields.facade_year.title}
                    slug="facade_year"
                    value={props.building.facade_year}
                    mode={props.mode}
                    copy={props.copy}
                    onChange={props.onChange}
                    step={1}
                    min={1}
                    max={currentYear}
                    tooltip={dataFields.facade_year.tooltip}
                    />
                <Verification
                    slug="facade_year"
                    allow_verify={props.user !== undefined && props.building.facade_year !== null && !props.edited}
                    onVerify={props.onVerify}
                    user_verified={props.user_verified.hasOwnProperty("facade_year")}
                    user_verified_as={props.user_verified.facade_year}
                    verified_count={props.building.verified.facade_year}
                    />
                <SelectDataEntry
                    title={dataFields.date_source.title}
                    slug="date_source"
                    value={props.building.date_source}
                    mode={props.mode}
                    copy={props.copy}
                    onChange={props.onChange}
                    tooltip={dataFields.date_source.tooltip}
                    options={dataFields.date_source.items}
                    placeholder={dataFields.date_source.example}
                    />
                <Verification
                    slug="date_source"
                    allow_verify={props.user !== undefined && props.building.date_source !== null && !props.edited}
                    onVerify={props.onVerify}
                    user_verified={props.user_verified.hasOwnProperty("date_source")}
                    user_verified_as={props.user_verified.date_source}
                    verified_count={props.building.verified.date_source}
                    />
                <MultiDataEntry
                    title={dataFields.date_link.title}
                    slug="date_link"
                    value={props.building.date_link}
                    mode={props.mode}
                    copy={props.copy}
                    onChange={props.onChange}
                    tooltip={dataFields.date_link.tooltip}
                    placeholder="https://..."
                    editableEntries={true}
                    isUrl={true}
                    />
                <Verification
                    slug="date_link"
                    allow_verify={props.user !== undefined && props.building.date_link !== null && !props.edited}
                    onVerify={props.onVerify}
                    user_verified={props.user_verified.hasOwnProperty("date_link")}
                    user_verified_as={props.user_verified.date_link}
                    verified_count={props.building.verified.date_link}
                    />
                <InfoBox>
                    This section is under development.
                </InfoBox>
                <DataEntry
                    title="Cladding Date"
                    slug=""
                    value=""
                    mode='view'
                />
                <Verification
                    slug="date_link"
                    allow_verify={props.user !== undefined && props.building.date_link !== null && !props.edited}
                    onVerify={props.onVerify}
                    user_verified={props.user_verified.hasOwnProperty("date_link")}
                    user_verified_as={props.user_verified.date_link}
                    verified_count={props.building.verified.date_link}
                    />
                <DataEntry
                    title="Source"
                    slug=""
                    value=""
                    mode='view'
                />
                <DataEntry
                    title="Date of Significant Extensions"
                    slug=""
                    value=""
                    mode='view'
                />
                <Verification
                    slug="date_link"
                    allow_verify={props.user !== undefined && props.building.date_link !== null && !props.edited}
                    onVerify={props.onVerify}
                    user_verified={props.user_verified.hasOwnProperty("date_link")}
                    user_verified_as={props.user_verified.date_link}
                    verified_count={props.building.verified.date_link}
                    />
                <DataEntry
                    title="Source"
                    slug=""
                    value=""
                    mode='view'
                />
                <DataEntry
                    title="Date of Significant Retrofits"
                    slug=""
                    value=""
                    mode='view'
                />
                <Verification
                    slug="date_link"
                    allow_verify={props.user !== undefined && props.building.date_link !== null && !props.edited}
                    onVerify={props.onVerify}
                    user_verified={props.user_verified.hasOwnProperty("date_link")}
                    user_verified_as={props.user_verified.date_link}
                    verified_count={props.building.verified.date_link}
                    />
                <DataEntry
                    title="Source"
                    slug=""
                    value=""
                    mode='view'
                />
            </DataEntryGroup>
            <DataEntryGroup name="Lifespan and Site History" collapsed={true} >
                <button className={`map-switcher-inline ${historicData} btn btn-outline btn-outline-dark ${darkLightTheme}`} onClick={historicDataSwitchOnClick}> 
                    {(historicData === 'enabled')?'Click here to hide historical maps':'Click here to show historical maps'}
                </button>
                <DataEntryGroup collapsed={false} name="Constructions and demolitions on this site" showCount={false}>
                    <DynamicsBuildingPane>
                        <label>Current building (age data <Link to={ageLinkUrl}>editable here</Link>)</label>
                        <FieldRow>
                            <div>
                                <NumericDataEntry
                                    slug=''
                                    title={dataFields.demolished_buildings.items.year_constructed.title}
                                    value={currentBuildingConstructionYear}
                                    disabled={true}
                                    mode='view'
                                />
                            </div>
                            <div>
                                <NumericDataEntry
                                    slug=''
                                    title={dataFields.demolished_buildings.items.year_demolished.title}
                                    value={undefined}
                                    placeholder='---'
                                    disabled={true}
                                    mode='view'
                                />
                            </div>
                            <div style={{flex: '0 1 27%'}}>
                                <DataEntry
                                    slug=''
                                    title='Lifespan to date'
                                    value={ (thisYear - currentBuildingConstructionYear) + ''}
                                    disabled={true}
                                    mode='view'
                                />
                            </div>
                        </FieldRow>
                    </DynamicsBuildingPane>
                    {
                        currentBuildingConstructionYear == undefined ?
                            <InfoBox>To add historical records, fill in the <Link to={ageLinkUrl}>Age</Link> data first.</InfoBox> :
                            
                            <>
                                <LogicalDataEntry
                                    slug='dynamics_has_demolished_buildings'
                                    title={dataFields.dynamics_has_demolished_buildings.title}
                                    value={building.dynamics_has_demolished_buildings}
                                    disallowFalse={(building.demolished_buildings?.length ?? 0) > 0}
                                    disallowNull={(building.demolished_buildings?.length ?? 0) > 0}

                                    onChange={props.onSaveChange}
                                    mode={props.mode}
                                    copy={props.copy}
                                />
                                {
                                    building.dynamics_has_demolished_buildings &&
                                    <>
                                        <DynamicsDataEntry */
                                            
                                            /* 
                                                Will clear the edits and new record data upon navigating to another building.
                                                Should get a better way to do this, plus a way to actually keep unsaved edits.
                                            */
/*                                             key={building.building_id} 
                                            
                                            value={building.demolished_buildings}
                                            editableEntries={true}
                                            slug='demolished_buildings'
                                            title={dataFields.demolished_buildings.title}
                                            mode={props.mode}
                                            onChange={props.onChange}
                                            onSaveAdd={props.onSaveAdd}
                                            hasEdits={props.edited}
                                            maxYear={currentBuildingConstructionYear}
                                            minYear={50}
                                        />
                                        {
                                            props.mode === 'view' &&
                                                <InfoBox>Switch to edit mode to add/edit past building records</InfoBox>
                                        }
                                    </>
                                }
                            </>
                    }
                </DataEntryGroup>
                <InfoBox>
                    This section is under development in collaboration with the historic environment sector.
                    Please let us know your suggestions on the <a href="https://discuss.colouring.london/t/dynamics-category-discussion/107">discussion forum</a>! (external link - save your edits first)
                </InfoBox>
            </DataEntryGroup>
            <DataEntryGroup name="Survival and Loss tracked using Historical Maps" collapsed={true} >
                <InfoBox>
                    This section is under development.
                </InfoBox>
                <button className={`map-switcher-inline ${historicData} btn btn-outline btn-outline-dark ${darkLightTheme}`} onClick={historicDataSwitchOnClick}> 
                    {(historicData === 'enabled')?'Click here to hide historical maps':'Click here to show historical maps'}
                </button>
                <SelectDataEntry
                    title={dataFields.historical_status.title}
                    slug="historical_status"
                    value={""}
                    tooltip={dataFields.historical_status.tooltip}
                    options={HistoricalStatusOptions}
                    mode={props.mode}
                    copy={props.copy}
                    onChange={props.onChange}
                />
                <DataEntry
                    title="Historical land use change"
                    slug=""
                    value=""
                    mode='view'
                />
            </DataEntryGroup>
        </Fragment>
    ); */
};

/** Colouring Dresden view, embedded in the corresponding Colouring Cities core category container */
export default AgeView;
