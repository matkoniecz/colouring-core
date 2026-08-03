import React from 'react';

import './map-button.css';
import { useDisplayPreferences } from '../displayPreferences-context';

export function AerialPhotosMapSwitcher({showButtonOnlyIfLayerOn}: {showButtonOnlyIfLayerOn: boolean}) {
    const { aerialPhotosMap, aerialPhotosMapSwitch, darkLightTheme } = useDisplayPreferences();
    const enabled = aerialPhotosMap === 'enabled';
    if (showButtonOnlyIfLayerOn && enabled === false) {
        return <></>
    }
    return (
        <form className={`map-button ${aerialPhotosMap}-state ${darkLightTheme}`} onSubmit={aerialPhotosMapSwitch}>
            <button className="btn btn-outline btn-outline-dark"
                type="submit">
                {enabled ? '1940s Aerial Photos [on]' : '1940s Aerial Photos [off]'}
            </button>
        </form>
    );
}