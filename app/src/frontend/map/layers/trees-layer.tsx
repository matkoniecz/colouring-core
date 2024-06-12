
import { GeoJsonObject } from 'geojson';
import React, { useEffect, useState } from 'react';
import { GeoJSON } from 'react-leaflet';
import { apiGet } from '../../apiHelpers';
import { useDisplayPreferences } from '../../displayPreferences-context';

export function TreesLayer() {
    const [treesGeojson, setTreesGeojson] = useState<GeoJsonObject>(null);
    const { trees } = useDisplayPreferences();

    useEffect(() => {
        apiGet('/geometries/trees.geojson')
            .then(data => setTreesGeojson(data as GeoJsonObject));
    }, []);

    if(trees == "enabled") {
        return treesGeojson &&
        <GeoJSON 
        attribution='TODO attribution'
        data={treesGeojson}
        style={{color: '#0f0', fill: true, weight: 1, opacity: 0.6}}
    />;
    } else if (trees == "disabled") {
        return <div></div>
    }
}
