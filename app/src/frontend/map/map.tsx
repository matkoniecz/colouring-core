import React, { FC, MutableRefObject, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { AttributionControl, MapContainer, ZoomControl, useMapEvent, Pane, useMap } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';
import './map.css';

import { apiGet } from '../apiHelpers';
import { initialMapViewport, mapBackgroundColor, MapTheme, LayerEnablementState } from '../config/map-config';

import { Building } from '../models/building';

import { CityBaseMapLayer } from './layers/city-base-map-layer';
import { CityBoundaryLayer } from './layers/city-boundary-layer';
import { BoroughBoundaryLayer } from './layers/borough-boundary-layer';
import { BoroughLabelLayer } from './layers/borough-label-layer';
import { ParcelBoundaryLayer } from './layers/parcel-boundary-layer';
import { HistoricDataLayer } from './layers/historic-data-layer';
import { HistoricMapLayer } from './layers/historic-map-layer';
import { FloodBoundaryLayer } from './layers/flood-boundary-layer';
import { ConservationAreaBoundaryLayer } from './layers/conservation-boundary-layer';
import { WorldHeritageSitesLayer } from './layers/world-heritage-sites-layer';
import { VistaBoundaryLayer } from './layers/vista-boundary-layer';
import { HousingBoundaryLayer } from './layers/housing-boundary-layer';
import { CreativeBoundaryLayer } from './layers/creative-boundary-layer';
import { BuildingBaseLayer } from './layers/building-base-layer';
import { BuildingDataLayer } from './layers/building-data-layer';
import { BuildingNumbersLayer } from './layers/building-numbers-layer';
import { BuildingHighlightLayer } from './layers/building-highlight-layer';

import { Historic_1880_DataLayer } from './layers/historic-1880-data-layer';
import { Historic_1911_DataLayer } from './layers/historic-1911-data-layer';
import { Historic_1945_DataLayer } from './layers/historic-1945-data-layer';

import { Legend } from './legend';
import SearchBox from './search-box';
import ThemeSwitcher from './theme-switcher';
import DataLayerSwitcher from './data-switcher';
import { BoroughSwitcher } from './borough-switcher';
import { ParcelSwitcher } from './parcel-switcher';
import { FloodSwitcher } from './flood-switcher';
import { ConservationAreaSwitcher } from './conservation-switcher';
import { WorldHeritageSitesSwitcher } from './world-heritage-sites-switcher';
import { HistoricDataSwitcher } from './historic-data-switcher';
import { HistoricMapSwitcher } from './historic-map-switcher';
import { VistaSwitcher } from './vista-switcher';
import { CreativeSwitcher } from './creative-switcher';
import { HousingSwitcher } from './housing-switcher';
import { EditableBuildingsSwitcher } from './editable-buildings-switcher';
import { BuildingMapTileset } from '../config/tileserver-config';
import { useDisplayPreferences } from '../displayPreferences-context';
import { CategoryMapDefinition } from '../config/category-maps-config';
import { RequestedViewport } from '../hooks/use-url-location-query';

import { Historic_1880_DataSwitcher } from './historic-1880-data-switcher';
import { Historic_1911_DataSwitcher } from './historic-1911-data-switcher';
import { Historic_1945_DataSwitcher } from './historic-1945-data-switcher';

/* import Geolocation_Button from './geolocation'; */

interface ColouringMapProps {
    selectedBuildingId?: number;
    mode: 'basic' | 'view' | 'edit' | 'multi-edit';
    revisionId: string;
    onBuildingAction: (building: Building) => void;
    mapColourScale: BuildingMapTileset;
    onMapColourScale: (x: BuildingMapTileset) => void;
    categoryMapDefinitions: CategoryMapDefinition[];
    requestedViewport?: RequestedViewport;
    locationError?: string;
    onDismissLocationError?: () => void;
}

export const ColouringMap : FC<ColouringMapProps> = ({
    mode,
    revisionId,
    onBuildingAction,
    selectedBuildingId,
    mapColourScale,
    onMapColourScale,
    categoryMapDefinitions,
    requestedViewport,
    locationError,
    onDismissLocationError,
    children
}) => {
    const { darkLightTheme, darkLightThemeSwitch, showLayerSelection } = useDisplayPreferences();
    const [position, setPosition] = useState(requestedViewport?.position ?? initialMapViewport.position);
    const [zoom, setZoom] = useState(requestedViewport?.zoom ?? initialMapViewport.zoom);

    useEffect(() => {
        if(requestedViewport != undefined) {
            setPosition(requestedViewport.position);
            setZoom(requestedViewport.zoom);
        }
    }, [requestedViewport]);

    /**
     * ID of building most recently selected by clicking on the map.
     * Such selection should not move the map - only selection coming
     * from elsewhere (URL, TOID lookup, history navigation) zooms to the building.
     */
    const clickedBuildingId = useRef<number>();


    const handleLocate = useCallback(
        (lat: number, lng: number, zoom: number) => {
            setPosition([lat, lng]);
            setZoom(zoom);
        },
        []
    );

    useEffect(() => {
        const requestedLocation = new URLSearchParams(window.location.search).get('location');
        if (requestedLocation == null) {
            return;
        }
        apiGet(`/api/search?q=${encodeURIComponent(requestedLocation)}`)
        .then((data) => {
            const result = data?.results?.[0];
            if (result) {
                const [lng, lat] = result.geometry.coordinates;
                handleLocate(lat, lng, result.attributes.zoom);
            } else {
                console.info(`URL requested location "${requestedLocation}", search found nothing, using default location`);
            }
        }).catch((err) => {
            console.error(err);
        });
    }, [handleLocate]);

    const handleClick = useCallback(
        async (e) => {
            const {lat, lng} = e.latlng;
            const data = await apiGet(`/api/buildings/locate?lat=${lat}&lng=${lng}`);
            const building = data?.[0];
            clickedBuildingId.current = building?.building_id;
            onBuildingAction(building);
        },
        [onBuildingAction],
    )

    return (
        <div className="map-container">
            <MapContainer
                center={initialMapViewport.position}
                zoom={initialMapViewport.zoom}
                minZoom={9}
                maxZoom={18}
                doubleClickZoom={false}
                zoomControl={false}
                attributionControl={false}
            >
                <ClickHandler onClick={handleClick} />
                <MapBackgroundColor theme={darkLightTheme} />
                <MapViewport position={position} zoom={zoom} />
                <ZoomToSelectedBuilding
                    selectedBuildingId={selectedBuildingId}
                    clickedBuildingId={clickedBuildingId}
                    skip={requestedViewport != undefined}
                />

                <Pane
                    key={darkLightTheme}
                    name={'cc-base-pane'}
                    style={{zIndex: 50}}
                >
                    <CityBaseMapLayer theme={darkLightTheme} />
                    <BuildingBaseLayer theme={darkLightTheme} />
                </Pane>

                <Pane
                    name='cc-overlay-pane-shown-behind-buildings'
                    style={{zIndex: 199}}
                >
                    <ConservationAreaBoundaryLayer/>
                    <WorldHeritageSitesLayer/>
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
                    <CityBoundaryLayer/>
                    <HistoricDataLayer revisionId={revisionId} />
                    <HistoricMapLayer revisionId={revisionId} />
                    <Historic_1880_DataLayer/>
                    <Historic_1911_DataLayer/>
                    <Historic_1945_DataLayer/>
                    <BoroughBoundaryLayer/>
                    <ParcelBoundaryLayer/>
                    <FloodBoundaryLayer/>
                    <VistaBoundaryLayer/>
                    <HousingBoundaryLayer/>
                    <CreativeBoundaryLayer/>
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
                </Pane>

                <ZoomControl position="topright" />
                <AttributionControl prefix=""/>
                {/* <Geolocation_Button title="X"/> */}
                <GeolocationButton/>
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
                    (showLayerSelection == "enabled") ?
                    <>
                        <BoroughSwitcher/>
                        {/* <ParcelSwitcher/> */}
                        {/* <FloodSwitcher/> */}
                        {/* <ConservationAreaSwitcher/> */}
                        {/* <WorldHeritageSitesSwitcher/> */}
                        { /* <HistoricMapSwitcher/> */ }
                        <HistoricDataSwitcher/>
                        {/* <VistaSwitcher /> */}
                        {/* <HousingSwitcher /> */}
                        {/* <CreativeSwitcher /> */}
                        <Historic_1911_DataSwitcher/>
                        <Historic_1945_DataSwitcher/>
                        <Historic_1880_DataSwitcher/>
                        <EditableBuildingsSwitcher />
                    </>
                    : <></>
                }
            </div>
            {/* <SearchBox onLocate={handleLocate} /> */}
            {
                locationError &&
                <div className="map-location-error alert alert-danger alert-dismissible" role="alert">
                    {locationError}
                    <button
                        type="button"
                        className="btn-close"
                        aria-label="Close"
                        onClick={onDismissLocationError}
                    />
                </div>
            }
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

/* move map to current position after onClick button */

function GeolocationButton() {
    const map = useMap();
    const handleClick = () => {
        
        map.locate().on("locationfound", function (e) {
            

            console.log(e.latlng);
            map.flyTo(e.latlng, map.getZoom());
        });
    }

    return (
        <button className="btn-geolocation" onClick={handleClick}>
            <img className="btn-geolocation-icon" src="../images/map-marker-alt-solid.svg" alt="Markersymbol, gehe zu aktueller Position"></img>
        </button>
    );
}




/**
 * Zooms map to the selected building, unless it was selected by clicking on the map
 * (or `skip` is set, for example because URL explicitly requested a different location)
 */
function ZoomToSelectedBuilding({
    selectedBuildingId,
    clickedBuildingId,
    skip
}: {
    selectedBuildingId: number;
    clickedBuildingId: MutableRefObject<number>;
    skip: boolean;
}) {
    const map = useMap();

    useEffect(() => {
        if(selectedBuildingId == undefined) {
            return;
        }
        if(selectedBuildingId === clickedBuildingId.current) {
            // consume, so that later navigation back to this building zooms to it
            clickedBuildingId.current = undefined;
            return;
        }
        if(skip) {
            return;
        }

        let cancelled = false;
        (async () => {
            try {
                const { bounds, error } = await apiGet(`/api/buildings/${selectedBuildingId}/bounds.json`);
                if(cancelled) {
                    return;
                }
                if(bounds == undefined) {
                    console.error(error);
                    return;
                }
                map.fitBounds(
                    [[bounds.min_lat, bounds.min_lng], [bounds.max_lat, bounds.max_lng]],
                    { maxZoom: 18, padding: [50, 50] }
                );
            } catch(error) {
                console.error(error);
            }
        })();

        return () => { cancelled = true; };
    }, [selectedBuildingId]);

    return null;
}
