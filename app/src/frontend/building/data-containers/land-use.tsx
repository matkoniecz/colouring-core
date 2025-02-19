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
        props.onMapColourScale('landuse')
    }

    const queryParameters = new URLSearchParams(window.location.search);
    const subcat = queryParameters.get("sc");
    const LandcoverOptions = [
        'Continuous urban fabric',
        'Discontinuous urban fabric',
        'Industrial or commercial units',
        'Road and rail networks and associated land',
        'Port areas',
        'Airports',
        'Mineral extraction sites',
        'Dump sites',
        'Construction sites',
        'Green urban areas',
        'Sport and leisure facilities',
        'Non-irrigated arable land',
        'Fruit trees and berry plantations',
        'Pastures',
        'Complex cultivation patterns',
        /*'Land principally occupied by agriculture with significant areas of natural vegetation',*/
        'Agro-forestry areas',
        'Broad-leaved forest',

        'Permanently irrigated land',
        'Rice fields',
        'Vineyards',
        'Olive groves',
        'Annual crops associated with permanent crops',
        'Coniferous forest',
        'Mixed forest',
        'Natural grasslands',
        'Moors and heathland', /* ??? */
        'Sclerophyllous vegetation',
        'Transitional woodland-shrub',
        'Beaches - dunes - sands',
        'Bare rocks',
        'Sparsely vegetated areas',
        'Burnt areas',
        'Glaciers and perpetual snow',
        'Inland marshes',
        'Peat bogs', /* ??? */
        'Salt marshes',
        'Salines',
        'Intertidal flats',
        'Water courses',
        'Water bodies',
        'Coastal lagoons',
        'Estuaries',
        'Sea and ocean',
    ];

    const LandcoverNameToCode = {
        "Continuous urban fabric": 111,
        "Discontinuous urban fabric": 112,
        "Industrial or commercial units": 121,
        "Road and rail networks and associated land": 122,
        "Port areas": 123,
        "Airports": 124,
        "Mineral extraction sites": 131,
        "Dump sites": 132,
        "Construction sites": 133,
        "Green urban areas": 141,
        "Sport and leisure facilities": 142,
        "Non-irrigated arable land": 211,
        "Fruit trees and berry plantations": 222,
        "Pastures": 231,
        "Complex cultivation patterns": 242,
        "Land principally occupied by agriculture with significant areas of natural vegetation": 243,
        "Agro-forestry areas": 244,
        "Broad-leaved forest": 311,
        "Permanently irrigated land": 212,
        "Rice fields": 213,
        "Vineyards": 221,
        "Olive groves": 223,
        "Annual crops associated with permanent crops": 241,
        "Coniferous forest": 312,
        "Mixed forest": 313,
        "Natural grasslands": 321,
        "Moors and heathland": 322,
        "Sclerophyllous vegetation": 323,
        "Transitional woodland-shrub": 324,
        "Beaches - dunes - sands": 331,
        "Bare rocks": 332,
        "Sparsely vegetated areas": 333,
        "Burnt areas": 334,
        "Glaciers and perpetual snow": 335,
        "Inland marshes": 411,
        "Peat bogs": 412,
        "Salt marshes": 421,
        "Salines": 422,
        "Intertidal flats": 423,
        "Water courses": 511,
        "Water bodies": 512,
        "Coastal lagoons": 521,
        "Estuaries": 522,
        "Sea and ocean": 523,
    }

    return (
        <Fragment>
            <DataEntryGroup name="Specific Land Use/s" collapsed={subcat==null || subcat!="1"}>
                <div className={`alert alert-dark`} role="alert" style={{ fontSize: 13, backgroundColor: "#f6f8f9" }}>
                    <i>
                        The vast majority of properties are residential (93% in the UK), so we have set 'residential' as the default value. Can you help us identify non-residential and mixed use buildings (and verify residential buildings too)?
                    </i>
                </div>
                {(props.mapColourScale != "landuse") ? 
                    <button className={`map-switcher-inline disabled-state btn btn-outline btn-outline-dark key-button`} onClick={switchToLandUseMapStyle}>
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
            <DataEntryGroup name="General Land Use" collapsed={subcat==null || subcat!="2"}>
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
                */}
            </DataEntryGroup>
            <DataEntryGroup name="Land Cover" collapsed={subcat==null || subcat!="2"}>
                    <SelectDataEntry
                        title={dataFields.landcover.title}
                        slug="landcover"
                        value={props.building.landcover}
                        tooltip={dataFields.landcover.tooltip}
                        options={LandcoverOptions}
                        mode={props.mode}
                        copy={props.copy}
                        onChange={props.onChange}
                    />
                    <Verification
                        slug="landcover"
                        allow_verify={props.user !== undefined && props.building.landcover !== null && !props.edited}
                        onVerify={props.onVerify}
                        user_verified={props.user_verified.hasOwnProperty("landcover")}
                        user_verified_as={props.user_verified.landcover}
                        verified_count={props.building.verified.landcover}
                    />
                {props.building.landcover !== null ? 
                <div className={`alert alert-dark`} role="alert" style={{ fontSize: 13, backgroundColor: "#f6f8f9" }}>
                    <Tooltip text={ "[CORINE](https://collections.sentinel-hub.com/corine-land-cover/readme.html)" } />
                    <div className="label">CORINE code:</div>
                    <div className="info-details">
                    <div className="code">{LandcoverNameToCode[props.building.landcover]}</div>
                    {/*<div className="description">{description}</div>*/}
                    </div>
                </div>
                : <></>}
            </DataEntryGroup>
        </Fragment>
    );
};
const LandUseContainer = withCopyEdit(LandUseView);

export default LandUseContainer;
