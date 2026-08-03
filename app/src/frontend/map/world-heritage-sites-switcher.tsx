import React from 'react';

import './map-button.css';
import { useDisplayPreferences } from '../displayPreferences-context';

export function WorldHeritageSitesSwitcher({showButtonOnlyIfLayerOn}: {showButtonOnlyIfLayerOn: boolean}) {
    const { worldHeritageSites, worldHeritageSitesSwitch, darkLightTheme } = useDisplayPreferences();
    const enabled = worldHeritageSites === 'enabled';
    if (showButtonOnlyIfLayerOn && enabled === false) {
        return <></>
    }
    return (
        <form className={`map-button ${worldHeritageSites}-state ${darkLightTheme}`} onSubmit={worldHeritageSitesSwitch}>
            <button className="btn btn-outline btn-outline-dark"
                type="submit">
                {enabled ? 'World Heritage Sites [on]' : 'World Heritage Sites [off]'}
            </button>
        </form>
    );
}
