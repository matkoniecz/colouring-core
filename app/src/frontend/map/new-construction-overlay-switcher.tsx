
import React from 'react';

import './map-button.css';
import { useDisplayPreferences } from '../displayPreferences-context';

export function NewConstructionOverlaySwitcher({showButtonOnlyIfLayerOn}: {showButtonOnlyIfLayerOn: boolean}) {
    const { newConstructionOverlay, newConstructionOverlaySwitch, darkLightTheme } = useDisplayPreferences();
    const enabled = newConstructionOverlay === 'enabled';
    if (showButtonOnlyIfLayerOn && enabled === false) {
        return <></>
    }
    return (
        <form className={`map-button ${newConstructionOverlay}-state ${darkLightTheme}`} onSubmit={newConstructionOverlaySwitch}>
            <button className="btn btn-outline btn-outline-dark"
                type="submit">
                {enabled ? 'New construction 2015-2025 [on]' : 'New construction 2015-2025 [off]'}
            </button>
        </form>
    );
}
