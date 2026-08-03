
import React from 'react';

import './map-button.css';
import { useDisplayPreferences } from '../displayPreferences-context';

export function RegionsSwitcher({showButtonOnlyIfLayerOn}: {showButtonOnlyIfLayerOn: boolean}) {
    const { regions, regionsSwitch, darkLightTheme } = useDisplayPreferences();
    const enabled = regions === 'enabled';
    if (showButtonOnlyIfLayerOn && enabled === false) {
        return <></>
    }
    return (
        <form className={`map-button ${regions}-state ${darkLightTheme}`} onSubmit={regionsSwitch}>
            <button className="btn btn-outline btn-outline-dark"
                type="submit">
                {enabled ? 'Regions [on]' : 'Regions [off]'}
            </button>
        </form>
    );
}
