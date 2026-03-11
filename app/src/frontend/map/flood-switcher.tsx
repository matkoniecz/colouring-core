import React from 'react';

import './map-button.css';
import { useDisplayPreferences } from '../displayPreferences-context';

export function FloodSwitcher({enabledOverride}: {enabledOverride: boolean}) {
    const { flood, floodSwitch, darkLightTheme } = useDisplayPreferences();
    return (
        <form className={`map-button ${(flood === 'enabled' || enabledOverride) ? 'enabled' : 'disabled'}-state ${darkLightTheme}`} onSubmit={floodSwitch}>
            <button className="btn btn-outline btn-outline-dark"
                type="submit">
                {(flood === 'enabled' || enabledOverride)? 'Flood Zones [on]' : 'Flood Zones [off]'}
            </button>
        </form>
    );
}
