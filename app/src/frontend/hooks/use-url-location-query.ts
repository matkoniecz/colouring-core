import { useEffect, useMemo, useState } from 'react';

import { apiGet } from '../apiHelpers';
import { useQuery } from './use-query';

export interface RequestedViewport {
    position: [number, number];
    zoom: number;
}

const defaultRequestedZoom = 17;

function singleValue(value: string | string[] | null | undefined): string | undefined {
    if(Array.isArray(value)) {
        return value[0] ?? undefined;
    }
    return value ?? undefined;
}

/**
 * Reads location-related query parameters:
 * - `lat` + `lon` (and optional `zoom`) - map is centered at this location
 * - `toid` - building with this TOID gets selected (and therefore zoomed to)
 *
 * @param onBuildingFound called with building ID of building matching `toid`
 * @returns requested viewport (if valid `lat`/`lon` were given) and error message (if any)
 */
export function useUrlLocationQuery(onBuildingFound: (buildingId: number) => void): [RequestedViewport, string, () => void] {
    const query = useQuery();
    const lat = singleValue(query.lat);
    const lon = singleValue(query.lon);
    const zoom = singleValue(query.zoom);
    const toid = singleValue(query.toid);

    const [error, setError] = useState<string>();

    const [requestedViewport, viewportError] = useMemo((): [RequestedViewport, string] => {
        if(lat == undefined && lon == undefined) {
            return [undefined, undefined];
        }
        const latNumber = Number(lat);
        const lonNumber = Number(lon);
        const zoomNumber = zoom == undefined ? defaultRequestedZoom : Number(zoom);
        if(
            lat == undefined || lon == undefined ||
            !Number.isFinite(latNumber) || latNumber < -90 || latNumber > 90 ||
            !Number.isFinite(lonNumber) || lonNumber < -180 || lonNumber > 180 ||
            !Number.isFinite(zoomNumber)
        ) {
            return [undefined, `Invalid location in URL: lat=${lat}, lon=${lon}${zoom == undefined ? '' : `, zoom=${zoom}`}`];
        }
        return [{ position: [latNumber, lonNumber], zoom: zoomNumber }, undefined];
    }, [lat, lon, zoom]);

    useEffect(() => setError(viewportError), [viewportError]);

    useEffect(() => {
        if(toid == undefined) {
            return;
        }
        let cancelled = false;
        (async () => {
            try {
                const buildings = await apiGet(`/api/buildings/reference?key=toid&id=${encodeURIComponent(toid)}`);
                if(cancelled) {
                    return;
                }
                if(Array.isArray(buildings) && buildings.length > 0) {
                    setError(undefined);
                    onBuildingFound(buildings[0].building_id);
                } else if(Array.isArray(buildings)) {
                    setError(`No building found with TOID ${toid}`);
                } else {
                    setError(`Failed to look up building with TOID ${toid}`);
                }
            } catch(err) {
                console.error(err);
                if(!cancelled) {
                    setError(`Failed to look up building with TOID ${toid}`);
                }
            }
        })();
        return () => { cancelled = true; };
    // onBuildingFound is intentionally not a dependency - lookup should run only when TOID changes
    }, [toid]);

    return [requestedViewport, error, () => setError(undefined)];
}
