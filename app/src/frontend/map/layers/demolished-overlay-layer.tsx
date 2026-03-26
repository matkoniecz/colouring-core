
import { GeoJsonObject } from 'geojson';
import React, { useEffect, useState } from 'react';
import { GeoJSON } from 'react-leaflet';
import { apiGet } from '../../apiHelpers';
import { useDisplayPreferences } from '../../displayPreferences-context';

export function DemolishedOverlayLayer() {
    const [demolishedOverlayGeojson, setDemolishedOverlayGeojson] = useState<GeoJsonObject>(null);
    const { demolishedOverlay } = useDisplayPreferences();

    useEffect(() => {
        apiGet('/geometries/demolition_2015_to_2025.geojson')
            .then(data => setDemolishedOverlayGeojson(data as GeoJsonObject));
    }, []);

    if(demolishedOverlay == "enabled") {
        return demolishedOverlayGeojson &&
        <GeoJSON 
        attribution=''
        data={demolishedOverlayGeojson}
        style={{color: '#ff0000', fill: true, weight: 1, opacity: 1, fillOpacity: 0.8}}
    />;
    } else if (demolishedOverlay == "disabled") {
        return <div></div>
    }
}
