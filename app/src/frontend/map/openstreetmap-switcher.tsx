import React from 'react';

import './map-button.css';
import { useDisplayPreferences } from '../displayPreferences-context';

export function OpenStreetMapSwitcher({showButtonOnlyIfLayerOn}: {showButtonOnlyIfLayerOn: boolean}) {
    const { openStreetMap, openStreetMapSwitch, darkLightTheme } = useDisplayPreferences();
    const enabled = openStreetMap === 'enabled';
    if (showButtonOnlyIfLayerOn && enabled === false) {
        return <></>
    }
    return (
        <form className={`map-button ${openStreetMap}-state ${darkLightTheme}`} onSubmit={openStreetMapSwitch}>
            <button className="btn btn-outline btn-outline-dark"
                type="submit">
                {enabled ? 'OpenStreetMap [on]' : 'OpenStreetMap [off]'}
            </button>
        </form>
    );
}
