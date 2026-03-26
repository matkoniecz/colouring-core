
import { GeoJsonObject } from 'geojson';
import React, { useEffect, useState } from 'react';
import { GeoJSON } from 'react-leaflet';
import { apiGet } from '../../apiHelpers';
import { useDisplayPreferences } from '../../displayPreferences-context';

export function NewConstructionOverlayLayer() {
    const [newConstructionOverlayGeojson, setNewConstructionOverlayGeojson] = useState<GeoJsonObject>(null);
    const { newConstructionOverlay } = useDisplayPreferences();

    useEffect(() => {
        apiGet('/geometries/construction_2015_to_2025.geojson')
            .then(data => setNewConstructionOverlayGeojson(data as GeoJsonObject));
    }, []);

    if(newConstructionOverlay == "enabled") {
        return newConstructionOverlayGeojson &&
        <GeoJSON 
        attribution=''
        data={newConstructionOverlayGeojson}
        style={{color: '#80461b', fill: true, weight: 1, opacity: 1, fillOpacity: 0.8}}
    />;
    } else if (newConstructionOverlay == "disabled") {
        return <div></div>
    }
}
