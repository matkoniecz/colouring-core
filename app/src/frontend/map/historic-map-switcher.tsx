import React from 'react';

import './map-button.css';
import { useDisplayPreferences } from '../displayPreferences-context';

export function HistoricMapSwitcher({showButtonOnlyIfLayerOn}: {showButtonOnlyIfLayerOn: boolean}) {
    const { historicMap, historicMapSwitch, darkLightTheme } = useDisplayPreferences();
    const enabled = historicMap === 'enabled';
    if (showButtonOnlyIfLayerOn && enabled === false) {
        return <></>
    }
    return (
        <form className={`historic-map-switcher map-button ${historicMap}-state ${darkLightTheme}`} onSubmit={historicMapSwitch}>
            <button className="btn btn-outline btn-outline-dark"
                type="submit">
                {enabled ? 'OS 1890s Historical Map [on]' : 'OS 1890s Historical Map [off]'}
            </button>
        </form>
    );
}