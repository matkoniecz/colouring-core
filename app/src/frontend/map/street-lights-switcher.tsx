
import React from 'react';

import './map-button.css';
import { useDisplayPreferences } from '../displayPreferences-context';

export function StreetLightsSwitcher({showButtonOnlyIfLayerOn, enabledOverride}: {showButtonOnlyIfLayerOn: boolean, enabledOverride: boolean}) {
    const { streetLights, streetLightsSwitch, darkLightTheme } = useDisplayPreferences();
    const enabled = streetLights === 'enabled';
    if (showButtonOnlyIfLayerOn && enabled === false) {
        return <></>
    }
    return (
        <form className={`map-button ${(enabled || enabledOverride) ? 'enabled' : 'disabled'}-state ${darkLightTheme}`} onSubmit={streetLightsSwitch}>
            <button className="btn btn-outline btn-outline-dark"
                type="submit">
                {(enabled || enabledOverride)? 'Streetlights [on] ' : 'Streetlights [off]'}
            </button>
        </form>
    );
}

    