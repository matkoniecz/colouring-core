
import React from 'react';

import './map-button.css';
import { useDisplayPreferences } from '../displayPreferences-context';

export function StreetLightsSwitcher({enabledOverride}: {enabledOverride: boolean}) {
    const { streetLights, streetLightsSwitch, darkLightTheme } = useDisplayPreferences();
    return (
        <form className={`map-button ${(streetLights === 'enabled' || enabledOverride) ? 'enabled' : 'disabled'}-state ${darkLightTheme}`} onSubmit={streetLightsSwitch}>
            <button className="btn btn-outline btn-outline-dark"
                type="submit">
                {(streetLights === 'enabled' || enabledOverride)? 'Streetlights [on] ' : 'Streetlights [off]'}
            </button>
        </form>
    );
}

    