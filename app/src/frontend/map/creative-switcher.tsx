import React from 'react';

import './map-button.css';
import { useDisplayPreferences } from '../displayPreferences-context';

export function CreativeSwitcher({showButtonOnlyIfLayerOn}: {showButtonOnlyIfLayerOn: boolean}) {
    const { creative, creativeSwitch, darkLightTheme } = useDisplayPreferences();
    const enabled = creative === 'enabled';
    if (showButtonOnlyIfLayerOn && enabled === false) {
        return <></>
    }
    return (
        <form className={`map-button ${creative}-state ${darkLightTheme}`} onSubmit={creativeSwitch}>
            <button className="btn btn-outline btn-outline-dark"
                type="submit">
                {enabled ? 'Creative Enterprise Zones [on]' : 'Creative Enterprise Zones [off]'}
            </button>
        </form>
    );
}
