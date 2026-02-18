import React, { Fragment } from 'react';
import { commonSourceTypes, dataFields } from '../../config/data-fields-config';
import DataEntry from '../data-components/data-entry';
import { MultiDataEntry } from '../data-components/multi-data-entry/multi-data-entry';
import SelectDataEntry from '../data-components/select-data-entry';
import withCopyEdit from '../data-container';
import { CategoryViewProps } from './category-view-props';
import Verification from '../data-components/verification';
import { useDisplayPreferences } from '../../displayPreferences-context';
import { DataEntryGroup } from '../data-components/data-entry-group';
import InfoBox from '../../components/info-box';
import Tooltip from '../../components/tooltip';
import { DataTitleCopyable } from '../data-components/data-title';
import landuseCodesData from '../data-components/landuse-data';

interface ClasssificationSystemEntryProps {
    classificationSystem: string;
    code: string;
    classDescription: string;
    tooltipText: string;
}

const ClasssificationSystemEntry: React.FunctionComponent<ClasssificationSystemEntryProps> = (props) => {
    return (<Fragment>
                <div className={`alert alert-dark`} role="alert" style={{ fontSize: 13, backgroundColor: "#f6f8f9" }}>
                    <Tooltip text={props.tooltipText } />
                    <div className="label"><b>Classification system:</b> {props.classificationSystem}</div>
                    <div className="info-details">
                    <div className="code"><b>Code:</b> {props.code}</div>
                    <div className="description"><b>Class description</b>: {props.classDescription}</div>
                    </div>
                    {props.children}
                </div>
    </Fragment>)
}

/**
 * Use view/edit section
 */
const LandUseView: React.FunctionComponent<CategoryViewProps> = (props) => {
    const switchToIsDomesticMapStyle = (e) => {
        e.preventDefault();
        props.onMapColourScale('is_domestic')
    }
    const switchToLandUseMapStyle = (e) => {
        e.preventDefault();
        props.onMapColourScale('landuse_scat')
    }
    const switchToOldLandUseMapStyle = (e) => {
        e.preventDefault();
        props.onMapColourScale('landuse')
    }
    const switchToIsicLevelOneMapStyle = (e) => {
        e.preventDefault();
        props.onMapColourScale('isic_level_one_display')
    }
    const switchToPlanningUseClassesMapStyle = (e) => {
        e.preventDefault();
        props.onMapColourScale('planning_classes_display')
    }

    const queryParameters = new URLSearchParams(window.location.search);
    const subcat = queryParameters.get("sc");

    const { parcel, parcelSwitchOnClick, darkLightTheme } = useDisplayPreferences();
    
    const ScatInfoBox = ({ item, landuseCodesData }) => {
        const codeLines = landuseCodesData[item].SCAT.code.split("\n");
        const descriptionLines = landuseCodesData[item].SCAT.description.split("\n");
      
        return (
          <div className="info-box-container">
            <div
              className={`alert alert-dark`}
              role="alert"
              style={{ fontSize: 13, backgroundColor: "#f6f8f9" }}
            >
              <Tooltip text={"tooltip"} />
              <div className="label"><b>Classification system:</b> UK National Non-Domestic Rates (VOA SCat)</div>
              <div className="info-details">
                {codeLines.map((line, index) => (
                  <React.Fragment key={index}>
                    <div className="code"><b>Code: </b>{line}</div>
                    <div className="description"><b>Class description</b>: {descriptionLines[index] || ""}
                    </div>
                  </React.Fragment>
                ))}
              </div>
                {(props.mapColourScale != "landuse_scat") ? 
                    <button className={`map-switcher-inline btn btn-outline btn-outline-dark key-button`} onClick={switchToLandUseMapStyle}>
                            {"Click to see VOA SCat landuse classes on map."}
                    </button>
                    :
                    <button className={`map-switcher-inline btn btn-outline btn-outline-dark key-button active-button`} onClick={switchToLandUseMapStyle}>
                            {"Now showing VOA SCat landuse classes on map."}
                    </button>
                }
            </div>
          </div>
        );
      };

    return (
        <Fragment>
            <DataEntryGroup name="Current Land Use" collapsed={subcat==null || subcat!="1"}>
                <div className={`alert alert-dark`} role="alert" style={{ fontSize: 13, backgroundColor: "#f6f8f9" }}>
                    <i>
                        In the UK over 90% of properties are residential. Please note that reference codes for residential buildings, and places of worship, are not included in land use classification systems shown below, except within UK Planning Use Classes.
                    </i>
                </div>
                <MultiDataEntry
                    title={dataFields.current_landuse_group_scat.title}
                    slug="current_landuse_group_scat"
                    value={props.building.current_landuse_group_scat}
                    mode={props.mode}
                    copy={props.copy}
                    onChange={props.onChange}
                    confirmOnEnter={true}
                    tooltip={dataFields.current_landuse_group_scat.tooltip}
                    placeholder="Enter any additional land use here"
                    copyable={true}
                    autofill={true}
                    showAllOptionsOnEmpty={true}
                />
                <DataEntry
                    title={dataFields.current_landuse_order_scat.title}
                    tooltip={dataFields.current_landuse_order_scat.tooltip}
                    slug="current_landuse_order_scat"
                    value={props.building.current_landuse_order_scat}
                    mode={props.mode}
                    disabled={true}
                    copy={props.copy}
                    onChange={props.onChange}
                />
                <DataTitleCopyable
                    slug={"props.slug"}
                    slugModifier={"props.slugModifier"}
                    title={"Landuse classification system used"}
                    tooltip={null}
                    disabled={false}
                />
                {props.building.current_landuse_group_scat != null ? <> {
                  props.building.current_landuse_group_scat.map((item, index) => (
                    item in landuseCodesData ?                  
                    <ScatInfoBox item={item} landuseCodesData={landuseCodesData} />
                   : ""
                ))
               }</>: ""}
                {props.building.current_landuse_group_scat != null ? <> {
                  props.building.current_landuse_group_scat.map((item, index) => (
                    item in landuseCodesData ?                  
                    <>
                <SelectDataEntry
                    title={dataFields.current_landuse_scat_source.title}
                    slug="current_landuse_scat_source"
                    value={props.building.current_landuse_scat_source}
                    mode={props.mode}
                    copy={props.copy}
                    onChange={props.onChange}
                    tooltip={dataFields.current_landuse_scat_source.tooltip}
                    placeholder={dataFields.current_landuse_scat_source.example}
                    options={dataFields.current_landuse_scat_source.items}
                    />
                {(props.building.current_landuse_scat_source == commonSourceTypes[0] ||
                    props.building.current_landuse_scat_source == commonSourceTypes[1] ||
                    props.building.current_landuse_scat_source == null) ? <></> :
                    <><MultiDataEntry
                        title={dataFields.current_landuse_scat_link.title}
                        slug="current_landuse_scat_link"
                        value={props.building.current_landuse_scat_link}
                        mode={props.mode}
                        copy={props.copy}
                        onChange={props.onChange}
                        tooltip={dataFields.current_landuse_scat_link.tooltip}
                        placeholder="https://..."
                        editableEntries={true}
                        isUrl={true}
                        />
                    </>
                }
                <Verification
                    slug="current_landuse_group_scat"
                    allow_verify={props.user !== undefined && props.building.current_landuse_group_scat !== null && !props.edited}
                    onVerify={props.onVerify}
                    user_verified={props.user_verified.hasOwnProperty("current_landuse_group_scat")}
                    user_verified_as={props.user_verified.current_landuse_group_scat && props.user_verified.current_landuse_group_scat.join(", ")}
                    verified_count={props.building.verified.current_landuse_group_scat}
                    />
                <hr/>
                <div className="info-box-container">
                <DataTitleCopyable
                    slug={"props.slug"}
                    slugModifier={"props.slugModifier"}
                    title={"Related classification codes and descriptions"}
                    tooltip={null}
                    disabled={false}
                />
                <ClasssificationSystemEntry
                    classificationSystem="UK Planning Use Classes"
                    code={landuseCodesData[item].planning_classes.code}
                    classDescription={landuseCodesData[item].planning_classes.description}
                    tooltipText = { "[Use classes](https://www.planningportal.co.uk/permission/common-projects/change-of-use/use-classes)"
                    }>
                {(props.mapColourScale != "planning_classes_display") ?
                        <button className={`map-switcher-inline btn btn-outline btn-outline-dark key-button`} onClick={switchToPlanningUseClassesMapStyle}>
                            {"Click to see Planning Use Classes on map."}
                        </button>
                        : <button className={`map-switcher-inline btn btn-outline btn-outline-dark key-button active-button`} >
                            {"Now showing Planning Use Classes on map."}
                    </button>
                    }
                </ClasssificationSystemEntry>
                <ClasssificationSystemEntry
                    classificationSystem="UK Standard Industrial Classification"
                    code={landuseCodesData[item].UK_SIC.code}
                    classDescription={landuseCodesData[item].UK_SIC.description}
                    tooltipText = { "[UK SIC: The UK Standard Industrial Classification of economic activities](https://www.ons.gov.uk/methodology/classificationsandstandards/ukstandardindustrialclassificationofeconomicactivities)"
                    }>
                    {(props.mapColourScale != "xxxxxxxxxxxxxxxxxxxxxx") ?
                        <button className={`map-switcher-inline button-not-implemented btn btn-outline btn-outline-dark key-button-disabled`} /* onClick={switchToUKStandardIndustrialClassificationMapStyle} */ >
                            {"Map not yet available."/* "Click to see UK Standard Industrial Classification codes on map." */}
                        </button>
                        : <button className={`map-switcher-inline btn btn-outline btn-outline-dark key-button active-button`} >
                        {"Now showing UK Standard Industrial Classification codes on map."}
                    </button>
                    }
                </ClasssificationSystemEntry>
                <ClasssificationSystemEntry
                    classificationSystem="ISIC level 1"
                    code={landuseCodesData[item].ISIC_level_1.code}
                    classDescription={landuseCodesData[item].ISIC_level_1.description}
                    tooltipText = { "[ISIC: The International Standard Industrial Classification of All Economic Activities]( https://unstats.un.org/unsd/classifications/Econ/isic)"}>
                    {(props.mapColourScale != "isic_level_one_display") ?
                        <button className={`map-switcher-inline btn btn-outline btn-outline-dark key-button`} onClick={switchToIsicLevelOneMapStyle}>
                            {"Click to see ISIC codes on map."}
                        </button>
                        : <button className={`map-switcher-inline btn btn-outline btn-outline-dark key-button active-button`} >
                        {"Now showing ISIC land use codes on map."}
                    </button>
                    }
                </ClasssificationSystemEntry> 
                <ClasssificationSystemEntry
                    classificationSystem="ISIC level 4"
                    code={landuseCodesData[item].ISIC_level_4.code}
                    classDescription={landuseCodesData[item].ISIC_level_4.description}
                    tooltipText = { "[ISIC: The International Standard Industrial Classification of All Economic Activities]( https://unstats.un.org/unsd/classifications/Econ/isic)"}>
                </ClasssificationSystemEntry>
                {landuseCodesData[item].NACE_level_1.description != "missing entry in classification" ?
                    <ClasssificationSystemEntry
                    classificationSystem="NACE level 1"
                    code={landuseCodesData[item].NACE_level_1.code}
                    classDescription={landuseCodesData[item].NACE_level_1.description}
                    tooltipText = { "[NACE: The Statistical Classification of Economic Activities in the European Community]( https://ec.europa.eu/eurostat/web/nace)"}>
                    {(props.mapColourScale != "xxxxxxxxxxxxxxxxxxxxxx") ?
                        <button className={`map-switcher-inline button-not-implemented btn btn-outline btn-outline-dark key-button-disabled`} /* onClick={switchToNaceMapStyle} */ >
                            {"Map not yet available."/* "Click to see NACE codes on map." */}
                        </button>
                        : <button className={`map-switcher-inline btn btn-outline btn-outline-dark key-button active-button`} >
                        {"Now showing NACE codes on map."}
                    </button>
                    }
                    </ClasssificationSystemEntry>
                : <></>
                }
                {landuseCodesData[item].NACE_level_4.description != "missing entry in classification" ?
                    <ClasssificationSystemEntry
                    classificationSystem="NACE level 4"
                    code={landuseCodesData[item].NACE_level_4.code}
                    classDescription={landuseCodesData[item].NACE_level_4.description}
                    tooltipText = { "[NACE: The Statistical Classification of Economic Activities in the European Community]( https://ec.europa.eu/eurostat/web/nace)"}
                    >
                    </ClasssificationSystemEntry>
                : <ClasssificationSystemEntry
                classificationSystem="NACE level 4"
                code="no NACE level 4 code available"
                classDescription="no NACE level 4 description available"
                tooltipText = { "[NACE: The Statistical Classification of Economic Activities in the European Community]( https://ec.europa.eu/eurostat/web/nace)"}
                ></ClasssificationSystemEntry>
                }
                <ClasssificationSystemEntry
                    classificationSystem="CPA"
                    code={landuseCodesData[item].CPA.code}
                    classDescription={landuseCodesData[item].CPA.description}
                    tooltipText = { "[CPA: The Statistical Classification of Products by Activity](https://ec.europa.eu/eurostat/web/cpa)"}>
                    {(props.mapColourScale != "xxxxxxxxxxxxxxxxxxxxxx") ?
                        <button className={`map-switcher-inline button-not-implemented btn btn-outline btn-outline-dark key-button-disabled`} /* onClick={switchToCpaMapStyle} */ >
                            {"Map not yet available."/* "Click to see CPA codes on map." */}
                        </button>
                        : <button className={`map-switcher-inline btn btn-outline btn-outline-dark key-button active-button`} >
                        {"Now showing CPA codes on map."}
                    </button>
                    }
                </ClasssificationSystemEntry>

            </div>
            </>
                   : ""
                 ))
                }</>: ""}

            </DataEntryGroup>
            {/*
            <DataEntryGroup name="Specific Land Use/s (old classification)" collapsed={subcat==null || subcat!="1"}>
                <div className={`alert alert-dark`} role="alert" style={{ fontSize: 13, backgroundColor: "#f6f8f9" }}>
                    <i>
                        The vast majority of properties are residential (93% in the UK), so we have set 'residential' as the default value. Can you help us identify non-residential and mixed use buildings (and verify residential buildings too)?
                    </i>
                </div>
                {(props.mapColourScale != "landuse") ? 
                    <button className={`map-switcher-inline disabled-state btn btn-outline btn-outline-dark key-button`} onClick={switchToOldLandUseMapStyle}>
                        {"Click to see specific land use."}
                    </button>
                    :
                    <></>
                }
                <MultiDataEntry
                    title={dataFields.current_landuse_group.title}
                    slug="current_landuse_group"
                    value={props.building.current_landuse_group}
                    mode={props.mode}
                    copy={props.copy}
                    onChange={props.onChange}
                    confirmOnEnter={true}
                    tooltip={dataFields.current_landuse_group.tooltip}
                    placeholder="Enter new land use group here"
                    copyable={true}
                    autofill={true}
                    showAllOptionsOnEmpty={true}
                />
                <Verification
                    slug="current_landuse_group"
                    allow_verify={props.user !== undefined && props.building.current_landuse_group !== null && !props.edited}
                    onVerify={props.onVerify}
                    user_verified={props.user_verified.hasOwnProperty("current_landuse_group")}
                    user_verified_as={props.user_verified.current_landuse_group && props.user_verified.current_landuse_group.join(", ")}
                    verified_count={props.building.verified.current_landuse_group}
                    />
                <SelectDataEntry
                    title={dataFields.current_landuse_source.title}
                    slug="current_landuse_source"
                    value={props.building.current_landuse_source}
                    mode={props.mode}
                    copy={props.copy}
                    onChange={props.onChange}
                    tooltip={dataFields.current_landuse_source.tooltip}
                    placeholder={dataFields.current_landuse_source.example}
                    options={dataFields.current_landuse_source.items}
                    />
                {(props.building.current_landuse_source == commonSourceTypes[0] ||
                    props.building.current_landuse_source == commonSourceTypes[1] ||
                    props.building.current_landuse_source == null) ? <></> :
                    <><MultiDataEntry
                        title={dataFields.current_landuse_link.title}
                        slug="current_landuse_link"
                        value={props.building.current_landuse_link}
                        mode={props.mode}
                        copy={props.copy}
                        onChange={props.onChange}
                        tooltip={dataFields.current_landuse_link.tooltip}
                        placeholder="https://..."
                        editableEntries={true}
                        isUrl={true}
                        />
                    </>
                }
                <DataEntry
                    title={dataFields.current_landuse_order.title}
                    tooltip={dataFields.current_landuse_order.tooltip}
                    slug="current_landuse_order"
                    value={props.building.current_landuse_order}
                    mode={props.mode}
                    disabled={true}
                    copy={props.copy}
                    onChange={props.onChange}
                />
            </DataEntryGroup>
            */}
            { /* <DataEntryGroup name="General Land Use" collapsed={subcat==null || subcat!="2"}>
                {(props.mapColourScale != "is_domestic") ? 
                    <button className={`map-switcher-inline disabled-state btn btn-outline btn-outline-dark key-button`} onClick={switchToIsDomesticMapStyle}>
                        {"Click to see residential, non-residential and mixed-use buildings."}
                    </button>
                    :
                    <></>
                }
                <SelectDataEntry
                    title={dataFields.is_domestic.title}
                    slug="is_domestic"
                    value={props.building.is_domestic}
                    options={dataFields.is_domestic.items}
                    mode={props.mode}
                    copy={props.copy}
                    onChange={props.onChange}
                    tooltip={dataFields.is_domestic.tooltip}
                />
                {/*
                <Verification
                    slug="is_domestic"
                    allow_verify={props.user !== undefined && props.building.is_domestic !== null && !props.edited}
                    onVerify={props.onVerify}
                    user_verified={props.user_verified.hasOwnProperty("is_domestic")}
                    user_verified_as={props.user_verified.is_domestic}
                    verified_count={props.building.verified.is_domestic}
                />
                <SelectDataEntry
                    title={dataFields.is_domestic_source.title}
                    slug="is_domestic_source"
                    value={props.building.is_domestic_source}
                    options={dataFields.is_domestic_source.items}
                    mode={props.mode}
                    copy={props.copy}
                    onChange={props.onChange}
                    tooltip={dataFields.is_domestic_source.tooltip}
                />
                {(props.building.is_domestic_source == commonSourceTypes[0] ||
                    props.building.is_domestic_source == commonSourceTypes[1] ||
                    props.building.is_domestic_source == null) ? <></> :
                    <><MultiDataEntry
                        title={dataFields.is_domestic_links.title}
                        slug="is_domestic_links"
                        value={props.building.is_domestic_links}
                        mode={props.mode}
                        copy={props.copy}
                        onChange={props.onChange}
                        tooltip={dataFields.is_domestic_links.tooltip}
                        placeholder="https://..."
                        editableEntries={true}
                        isUrl={true}
                        />
                    </>
                }
            </DataEntryGroup> */}
            <DataEntryGroup name="Land Ownership Type" collapsed={subcat==null || subcat!="3"}>
                    <InfoBox>
                        This section is designed to provide information on land parcels and their ownership type. Can you help us collect this information?
                    </InfoBox>
                    <SelectDataEntry
                        slug='community_public_ownership'
                        title={dataFields.community_public_ownership.title}
                        value={props.building.community_public_ownership}
                        options={dataFields.community_public_ownership.items}
                        tooltip={dataFields.community_public_ownership.tooltip}
                        onChange={props.onChange}
                        mode={props.mode}
                        copy={props.copy}
                    />
                    <Verification
                        slug="community_public_ownership"
                        allow_verify={props.user !== undefined && props.building.community_public_ownership !== null && !props.edited}
                        onVerify={props.onVerify}
                        user_verified={props.user_verified.hasOwnProperty("community_public_ownership")}
                        user_verified_as={props.user_verified.community_public_ownership}
                        verified_count={props.building.verified.community_public_ownership}
                    />
                    <SelectDataEntry
                        title={dataFields.community_public_ownership_source_type.title}
                        slug="community_public_ownership_source_type"
                        value={props.building.community_public_ownership_source_type}
                        mode={props.mode}
                        copy={props.copy}
                        onChange={props.onChange}
                        tooltip={dataFields.community_public_ownership_source_type.tooltip}
                        options={dataFields.community_public_ownership_source_type.items}
                        placeholder={dataFields.community_public_ownership_source_type.example}
                    />
                    {(props.building.community_public_ownership_source_type == dataFields.community_public_ownership_source_type.items[0] ||
                        props.building.community_public_ownership_source_type == dataFields.community_public_ownership_source_type.items[1] ||
                        props.building.community_public_ownership_source_type == null) ? <></> :
                        <>
                            <MultiDataEntry
                                slug='community_public_ownership_sources'
                                title={dataFields.community_public_ownership_sources.title}
                                tooltip={dataFields.community_public_ownership_sources.tooltip}
                                isUrl={true}
                                placeholder={'https://...'}
                                editableEntries={true}
                                value={props.building.community_public_ownership_sources}
                                onChange={props.onChange}
                                mode={props.mode}
                                copy={props.copy}
                            />
                        </>
                    }
                    <hr/>
                    <DataEntry
                        title={dataFields.size_parcel_geometry.title}
                        slug="size_parcel_geometry"
                        value={props.building.size_parcel_geometry}
                        mode={props.mode}
                        onChange={props.onChange}
                        tooltip={dataFields.size_parcel_geometry.tooltip}
                        placeholder="https://..."
                        isUrl={true}
                    />
                    <button className={`map-switcher-inline ${parcel}-state btn btn-outline btn-outline-dark ${darkLightTheme}`} onClick={parcelSwitchOnClick}>
                        {(parcel === 'enabled')? 'Click to hide sample land parcel data' : 'Click to show sample land parcel data'}
                    </button>
            </DataEntryGroup>
            <DataEntryGroup name="Original (Historical) Use" collapsed={subcat==null || subcat!="4"}>
                {(props.mapColourScale != "original_landuse") ? 
                    <button className={`map-switcher-inline btn btn-outline btn-outline-dark key-button`} onClick={switchToOldLandUseMapStyle}>
                        {"Click here to see original land use."}
                    </button>
                :
                    <></>
                }
                <MultiDataEntry
                    title={dataFields.typology_original_use.title}
                    slug="typology_original_use"
                    value={props.building.typology_original_use}
                    mode={props.mode}
                    copy={props.copy}
                    onChange={props.onChange}
                    confirmOnEnter={true}
                    tooltip={dataFields.typology_original_use.tooltip}
                    placeholder="Type new land use group here"
                    copyable={true}
                    autofill={true}
                    showAllOptionsOnEmpty={true}
                />
                <Verification
                    slug="typology_original_use"
                    allow_verify={props.user !== undefined && props.building.typology_original_use !== null && !props.edited}
                    onVerify={props.onVerify}
                    user_verified={props.user_verified.hasOwnProperty("typology_original_use")}
                    user_verified_as={props.user_verified.typology_original_use}
                    verified_count={props.building.verified.typology_original_use}
                />
                <SelectDataEntry
                    title={dataFields.typology_original_use_source_type.title}
                    slug="typology_original_use_source_type"
                    value={props.building.typology_original_use_source_type}
                    mode={props.mode}
                    copy={props.copy}
                    onChange={props.onChange}
                    tooltip={dataFields.typology_original_use_source_type.tooltip}
                    placeholder={dataFields.typology_original_use_source_type.example}
                    options={dataFields.typology_original_use_source_type.items}
                    />
                {(props.building.typology_original_use_source_type == commonSourceTypes[0] ||
                    props.building.typology_original_use_source_type == commonSourceTypes[1] ||
                    props.building.typology_original_use_source_type == null) ? <></> :
                    <>
                        <MultiDataEntry
                            title={dataFields.typology_original_use_source_links.title}
                            slug="typology_original_use_source_links"
                            value={props.building.typology_original_use_source_links}
                            mode={props.mode}
                            copy={props.copy}
                            onChange={props.onChange}
                            tooltip={dataFields.typology_original_use_source_links.tooltip}
                            placeholder="https://..."
                            editableEntries={true}
                            isUrl={true}
                        />
                    </>
                }
                <hr/>
                {
                    props.mode != 'view' &&
                    <div>
                        <div className={`alert alert-dark`} role="alert" style={{ fontSize: 13, backgroundColor: "#f6f8f9" }}>
                            <i>
                                Below is a more general classification for the original land use of this building, automatically derived from the information above.
                            </i>
                        </div>
                    </div>
                }
                <DataEntry
                    title={dataFields.typology_original_use_order.title}
                    tooltip={dataFields.typology_original_use_order.tooltip}
                    slug="typology_original_use_order"
                    value={props.building.typology_original_use_order}
                    mode={props.mode}
                    disabled={true}
                    copy={props.copy}
                    onChange={props.onChange}
                />
            </DataEntryGroup>
        </Fragment>
    );
};
const LandUseContainer = withCopyEdit(LandUseView);

export default LandUseContainer;
