import React from 'react';

import './map-button.css';
import { useDisplayPreferences } from '../displayPreferences-context';

export function FloodSwitcher({showButtonOnlyIfLayerOn, enabledOverride}: {showButtonOnlyIfLayerOn: boolean, enabledOverride: boolean}) {
    const { flood, floodSwitch, darkLightTheme } = useDisplayPreferences();
    const enabled = flood === 'enabled';
    if (showButtonOnlyIfLayerOn && enabled === false) {
        return <></>
    }
    return (
        <form className={`map-button ${(enabled || enabledOverride) ? 'enabled' : 'disabled'}-state ${darkLightTheme}`} onSubmit={floodSwitch}>
            <button className="btn btn-outline btn-outline-dark"
                type="submit">
                {(enabled || enabledOverride)? 'Flood Zones [on]' : 'Flood Zones [off]'}
            </button>
        </form>
    );
}
