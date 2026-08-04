
import { GeoJsonObject } from 'geojson';
import React, { useEffect, useState } from 'react';
import { GeoJSON } from 'react-leaflet';
import { apiGet } from '../../apiHelpers';
import { useDisplayPreferences } from '../../displayPreferences-context';

export function TreesLayer({enabledOverride}: {enabledOverride: boolean}) {
    const [treesGeojson, setTreesGeojson] = useState<GeoJsonObject>(null);
    const { trees } = useDisplayPreferences();

    useEffect(() => {
        apiGet('/geometries/trees.geojson')
            .then(data => setTreesGeojson(data as GeoJsonObject));
    }, []);

    if(trees == "enabled" || enabledOverride) {
        return treesGeojson &&
        <GeoJSON 
        attribution='Tree data courtesy of <a href="https://arxiv.org/abs/2510.13861">Andrés Camilo Zúñiga-González, Anil Madhavapeddy, Ronita Bardhan</a>'
        data={treesGeojson}
        style={{color: '#0f0', fill: true, weight: 1, opacity: 0.6}}
    />;
    } else if (trees == "disabled") {
        return <div></div>
    }
}
