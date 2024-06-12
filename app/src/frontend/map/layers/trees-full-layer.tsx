
import { GeoJsonObject } from 'geojson';
import React, { useEffect, useState } from 'react';
import { GeoJSON } from 'react-leaflet';
import { apiGet } from '../../apiHelpers';
import { useDisplayPreferences } from '../../displayPreferences-context';

export function TreesFullLayer() {
    const [treesFullGeojson, setTreesFullGeojson] = useState<GeoJsonObject>(null);
    const { treesFull } = useDisplayPreferences();

    useEffect(() => {
        apiGet('/geometries/trees_full.geojson')
            .then(data => setTreesFullGeojson(data as GeoJsonObject));
    }, []);

    if(treesFull == "enabled") {
        return treesFullGeojson &&
        <GeoJSON 
        attribution='TODO attribution'
        data={treesFullGeojson}
        style={{color: '#0f0', fill: true, weight: 1, opacity: 0.6}}
    />;
    } else if (treesFull == "disabled") {
        return <div></div>
    }
}
