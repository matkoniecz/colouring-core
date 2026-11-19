import { useEffect, useMemo, useState } from 'react';

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
 *
 * @returns requested viewport (if valid `lat`/`lon` were given) and error message (if any)
 */
export function useUrlLocationQuery(): [RequestedViewport, string, () => void] {
    const query = useQuery();
    const lat = singleValue(query.lat);
    const lon = singleValue(query.lon);
    const zoom = singleValue(query.zoom);

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

    return [requestedViewport, error, () => setError(undefined)];
}
