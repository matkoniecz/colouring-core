import { GeoJsonObject } from 'geojson';
import React, { useEffect, useState } from 'react';
import { GeoJSON } from 'react-leaflet';
import * as L from 'leaflet';
import { useDisplayPreferences } from '../../displayPreferences-context';
import { apiGet } from '../../apiHelpers';
import { useMapEvents } from 'react-leaflet';

export function StreetLightsLayer({initialMapViewport, enabledOverride}: {initialMapViewport: number, enabledOverride: Boolean}) {
    const [streetLightsGeojson, setStreetLightsGeojson] = useState<GeoJsonObject | null>(null);
    const [zoom, setZoom] = useState<number>(initialMapViewport);
    const { streetLights } = useDisplayPreferences();

    useMapEvents({
        zoomend: (e) => setZoom(e.target.getZoom()),
        load: (e) => setZoom(e.target.getZoom()),
    });

    useEffect(() => {
        apiGet('/geometries/lights.geojson')
            .then(data => setStreetLightsGeojson(data as GeoJsonObject));
    }, []);

    const pointToLayer = (isHigh: boolean) => (_feature, latlng) =>
        L.circleMarker(latlng, isHigh
            ? { radius: 4, color: '#ffff90', fillOpacity: 1, weight: 0, opacity: 1, fill: true }
            : { radius: 0.5, color: '#ffff90', fillOpacity: 1, weight: 0, opacity: 1, fill: true }
        );

    if (enabledOverride == false && (streetLights !== "enabled" || !streetLightsGeojson)) return null;

    function isHigh(zoom){
        return zoom > 15
    }

    return (
        <GeoJSON
            key={isHigh(zoom) ? 'high' : 'low'}
            data={streetLightsGeojson}
            pointToLayer={pointToLayer(isHigh(zoom))}
        />
    );
}