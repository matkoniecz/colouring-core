import React, { FC, useCallback, useEffect, useMemo, useState } from 'react';
import { AttributionControl, MapContainer, ZoomControl, useMapEvent, Pane, useMap } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';
import './map.css';

import { apiGet } from '../apiHelpers';
import { initialMapViewport, mapBackgroundColor, MapTheme, LayerEnablementState } from '../config/map-config';

import { Building } from '../models/building';

import { CityBaseMapLayer } from './layers/city-base-map-layer';
import { BoroughBoundaryLayer } from './layers/borough-boundary-layer';
import { BoroughLabelLayer } from './layers/borough-label-layer';
import { RegionLabelLayer } from './layers/region-label-layer';
import { StreetLightsLayer } from './layers/street-lights-layer';
import { ParcelBoundaryLayer } from './layers/parcel-boundary-layer';
import { HistoricDataLayer } from './layers/historic-data-layer';
import { HistoricMapLayer } from './layers/historic-map-layer';
import { HistoricMapLayerWithoutFill } from './layers/historic-map-without-fill-layer';
import { HistoricMapLayerLeicestershire } from './layers/historic-map-leicestershire-layer';
import { AerialPhotosMapLayer } from './layers/aerial-photos-map-layer';
import { OpenStreetMapLayer } from './layers/openstreetmap-layer';
import { DemolishedOverlayLayer } from './layers/demolished-overlay-layer';
import { NewConstructionOverlayLayer } from './layers/new-construction-overlay-layer';
import { FloodBoundaryLayer } from './layers/flood-boundary-layer';
import { ConservationAreaBoundaryLayer } from './layers/conservation-boundary-layer';
import { WorldHeritageSitesLayer } from './layers/world-heritage-sites-layer';
import { VistaBoundaryLayer } from './layers/vista-boundary-layer';
import { CeremonialCountiesLayer } from './layers/ceremonial-counties-layer';
import { RegionsLayer } from './layers/regions-layer';
import { MotorwaysLayer } from './layers/motorways-layer';
import { HousingBoundaryLayer } from './layers/housing-boundary-layer';
import { CreativeBoundaryLayer } from './layers/creative-boundary-layer';
import { BuildingBaseLayer } from './layers/building-base-layer';
import { BuildingDataLayer } from './layers/building-data-layer';
import { BuildingNumbersLayer } from './layers/building-numbers-layer';
import { BuildingHighlightLayer } from './layers/building-highlight-layer';
import { HistoricalFootprintsLayer } from './layers/historical-footprints-layer';
import { GreenbeltLayer } from './layers/greenbelt-layer';
import { TreesLayer } from './layers/trees-layer';

import { Legend } from './legend';
import SearchBox from './search-box';
import ThemeSwitcher from './theme-switcher';
import DataLayerSwitcher from './data-switcher';
import { BoroughSwitcher } from './borough-switcher';
import { StreetLightsSwitcher } from './street-lights-switcher';
import { ParcelSwitcher } from './parcel-switcher';
import { DemolishedOverlaySwitcher } from './demolished-overlay-switcher';
import { NewConstructionOverlaySwitcher } from './new-construction-overlay-switcher';
import { FloodSwitcher } from './flood-switcher';
import { ConservationAreaSwitcher } from './conservation-switcher';
import { WorldHeritageSitesSwitcher } from './world-heritage-sites-switcher';
import { HistoricDataSwitcher } from './historic-data-switcher';
import { HistoricMapSwitcher } from './historic-map-switcher';
import { HistoricMapLeicestershireSwitcher } from './historic-map-leicestershire-switcher';
import { AerialPhotosMapSwitcher } from './aerial-photos-map-switcher';
import { HistoricalFootprintsSwitcher } from './historical-footprints-switcher';
import { OpenStreetMapSwitcher } from './openstreetmap-switcher';
import { VistaSwitcher } from './vista-switcher';
import { MotorwaysSwitcher } from './motorways-switcher';
import { RegionsSwitcher } from './regions-switcher';
import { CeremonialCountiesSwitcher } from './ceremonial-counties-switcher';
import { CreativeSwitcher } from './creative-switcher';
import { HousingSwitcher } from './housing-switcher';
import { GreenbeltSwitcher } from './greenbelt-switcher';
import { EditableBuildingsSwitcher } from './editable-buildings-switcher';
import { TreesSwitcher } from './trees-switcher';
import { BuildingMapTileset } from '../config/tileserver-config';
import { useDisplayPreferences } from '../displayPreferences-context';
import { CategoryMapDefinition } from '../config/category-maps-config';
import { Category } from '../config/categories-config';
import { CustomZoomControl} from './layers/custom-zoom-control'

interface ColouringMapProps {
    selectedBuildingId: number;
    mode: 'basic' | 'view' | 'edit' | 'multi-edit';
    revisionId: string;
    onBuildingAction: (building: Building) => void;
    mapColourScale: BuildingMapTileset;
    onMapColourScale: (x: BuildingMapTileset) => void;
    categoryMapDefinitions: CategoryMapDefinition[];
    currentCategory: Category;
}


export const ColouringMap : FC<ColouringMapProps> = ({
    mode,
    revisionId,
    onBuildingAction,
    selectedBuildingId,
    mapColourScale,
    onMapColourScale,
    categoryMapDefinitions,
    currentCategory,
    children
}) => {
    const { darkLightTheme, darkLightThemeSwitch, showLayerSelection } = useDisplayPreferences();
    const [position, setPosition] = useState(initialMapViewport.position);
    const [zoom, setZoom] = useState(initialMapViewport.zoom);
    const showButtonOnlyIfLayerOn = !(
        showLayerSelection == "enabled" ||
        mapColourScale === "disaster_severity" ||
        mapColourScale === "dynamics_demolished_count" ||
        currentCategory == Category.UrbanInfrastructure ||
        mapColourScale === "context_back_garden" ||
        mapColourScale === "energy_green_roof"
    );

    const handleLocate = useCallback(
        (lat: number, lng: number, zoom: number) => {
            setPosition([lat, lng]);
            setZoom(zoom);
        },
        []
    );

    const handleClick = useCallback(
        async (e) => {
            const {lat, lng} = e.latlng;
            const data = await apiGet(`/api/buildings/locate?lat=${lat}&lng=${lng}`);
            const building = data?.[0];
            onBuildingAction(building);
        },
        [onBuildingAction],
    )

    return (
        <div className="map-container">
            <MapContainer
                center={initialMapViewport.position}
                zoom={initialMapViewport.zoom}
                minZoom={7}
                maxZoom={18}
                doubleClickZoom={false}
                zoomControl={false}
                attributionControl={false}
            >
                <ClickHandler onClick={handleClick} />
                <MapBackgroundColor theme={darkLightTheme} />
                <MapViewport position={position} zoom={zoom} />

                <Pane
                    key={darkLightTheme}
                    name={'cc-base-pane'}
                    style={{zIndex: 50}}
                >
                    <CityBaseMapLayer theme={darkLightTheme} />
                    <OpenStreetMapLayer/>
                </Pane>

                <Pane
                    name='cc-overlay-pane-shown-behind-buildings'
                    style={{zIndex: 190}}
                >
                </Pane>

                <Pane
                    name={'cc-base-building-pane'}
                    style={{zIndex: 195}}
                >
                    {/* <BuildingBaseLayer theme={darkLightTheme} /> */}
                </Pane>

                {
                    mapColourScale &&
                        <BuildingDataLayer
                            tileset={mapColourScale}
                            revisionId={revisionId}
                        />
                }

                <Pane
                    name='cc-overlay-pane'
                    style={{zIndex: 300}}
                >
                    <WorldHeritageSitesLayer/>
                    <DemolishedOverlayLayer/>
                    <NewConstructionOverlayLayer/>
                    <ConservationAreaBoundaryLayer/>
                    <HistoricDataLayer revisionId={revisionId} />
                    <HistoricMapLayer />
                    <HistoricMapLayerWithoutFill mapColourScale={mapColourScale}/>
                    <HistoricMapLayerLeicestershire />
                    <AerialPhotosMapLayer revisionId={revisionId} />
                    <BoroughBoundaryLayer/>
                    <ParcelBoundaryLayer/>
                    <FloodBoundaryLayer enabledOverride={mapColourScale === "disaster_severity" || mapColourScale === "dynamics_demolished_count" } />
                    <TreesLayer enabledOverride={mapColourScale === "context_back_garden" || mapColourScale === "energy_green_roof"}/>
                    <VistaBoundaryLayer/>
                    <StreetLightsLayer initialMapViewport={initialMapViewport.zoom} enabledOverride={ currentCategory == Category.UrbanInfrastructure }/>
                    <CeremonialCountiesLayer/>
                    <RegionsLayer/>
                    <GreenbeltLayer/>
                    <MotorwaysLayer/>
                    <HousingBoundaryLayer/>
                    <CreativeBoundaryLayer/>
                    <HistoricalFootprintsLayer/>
                    <BuildingNumbersLayer revisionId={revisionId} />
                    {
                        selectedBuildingId &&
                            <BuildingHighlightLayer
                                selectedBuildingId={selectedBuildingId}
                                baseTileset={mapColourScale} 
                            />
                    }
                </Pane>
                <Pane
                    name='cc-label-overlay-pane'
                    style={{zIndex: 1000}}
                >
                    <BoroughLabelLayer/>
                    <RegionLabelLayer/>
                </Pane>

                {/* <ZoomControl position="topright" /> */}
                 <CustomZoomControl/>
                <AttributionControl prefix=""/>
            </MapContainer>
            {
                mode !== 'basic' &&
                <>
                    <Legend mapColourScaleDefinitions={categoryMapDefinitions} mapColourScale={mapColourScale} onMapColourScale={onMapColourScale}/>
                </>
            }
            <div className="switchers-of-layers-map-menu">
                <ThemeSwitcher onSubmit={darkLightThemeSwitch} currentTheme={darkLightTheme} />
                <DataLayerSwitcher />
                {
                    <>
                        <DemolishedOverlaySwitcher showButtonOnlyIfLayerOn={showButtonOnlyIfLayerOn}/>
                        <NewConstructionOverlaySwitcher showButtonOnlyIfLayerOn={showButtonOnlyIfLayerOn}/>
                        <ParcelSwitcher showButtonOnlyIfLayerOn={showButtonOnlyIfLayerOn}/>
                        <FloodSwitcher  showButtonOnlyIfLayerOn={showButtonOnlyIfLayerOn} enabledOverride={mapColourScale === "disaster_severity" || mapColourScale === "dynamics_demolished_count"}/>
                        <ConservationAreaSwitcher  showButtonOnlyIfLayerOn={showButtonOnlyIfLayerOn}/>
                        <WorldHeritageSitesSwitcher  showButtonOnlyIfLayerOn={showButtonOnlyIfLayerOn}/>
                        { /* <HistoricMapSwitcher/> */ }
                        { /* <HistoricDataSwitcher/> */ }
                        { /* <HistoricMapLeicestershireSwitcher/> */ }
                        <VistaSwitcher  showButtonOnlyIfLayerOn={showButtonOnlyIfLayerOn}/>
                        <StreetLightsSwitcher  showButtonOnlyIfLayerOn={showButtonOnlyIfLayerOn} enabledOverride={ currentCategory == Category.UrbanInfrastructure } />
                        <HousingSwitcher showButtonOnlyIfLayerOn={showButtonOnlyIfLayerOn}/>
                        <CreativeSwitcher showButtonOnlyIfLayerOn={showButtonOnlyIfLayerOn}/>
                        <RegionsSwitcher showButtonOnlyIfLayerOn={showButtonOnlyIfLayerOn}/>
                        <CeremonialCountiesSwitcher showButtonOnlyIfLayerOn={showButtonOnlyIfLayerOn}/>
                        <BoroughSwitcher showButtonOnlyIfLayerOn={showButtonOnlyIfLayerOn}/>
                        <GreenbeltSwitcher showButtonOnlyIfLayerOn={showButtonOnlyIfLayerOn}/>
                        <MotorwaysSwitcher showButtonOnlyIfLayerOn={showButtonOnlyIfLayerOn}/>
                        <AerialPhotosMapSwitcher showButtonOnlyIfLayerOn={showButtonOnlyIfLayerOn}/>
                        <EditableBuildingsSwitcher showButtonOnlyIfLayerOn={showButtonOnlyIfLayerOn}/>
                        <OpenStreetMapSwitcher showButtonOnlyIfLayerOn={showButtonOnlyIfLayerOn}/>
                        <TreesSwitcher  showButtonOnlyIfLayerOn={showButtonOnlyIfLayerOn} enabledOverride={mapColourScale === "context_back_garden" || mapColourScale === "energy_green_roof"} />
                    </>
                }
            </div>
            <SearchBox onLocate={handleLocate} />
        </div>
    );
}

function ClickHandler({ onClick }: {onClick: (e) => void}) {
    useMapEvent('click', (e) => onClick(e));
    
    return null;
}

function MapBackgroundColor({ theme}: {theme: MapTheme}) {
    const map = useMap();
    useEffect(() => {
        map.getContainer().style.backgroundColor = mapBackgroundColor[theme];
    });

    return null;
}

function MapViewport({
    position,
    zoom
}: {
    position: [number, number];
    zoom: number;
}) {
    const map = useMap();

    useEffect(() => {
        map.setView(position, zoom)
    }, [position, zoom]);

    return null;
}