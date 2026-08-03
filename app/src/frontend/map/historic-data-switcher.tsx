import React from 'react';

import './map-button.css';
import { useDisplayPreferences } from '../displayPreferences-context';

export function HistoricDataSwitcher({showButtonOnlyIfLayerOn}: {showButtonOnlyIfLayerOn: boolean}) {
    const { historicData, historicDataSwitch, darkLightTheme } = useDisplayPreferences();
    const enabled = historicData === 'enabled';
    if (showButtonOnlyIfLayerOn && enabled === false) {
        return <></>
    }
    return (
        <form className={`map-button ${historicData}-state ${darkLightTheme}`} onSubmit={historicDataSwitch}>
            <button className="btn btn-outline btn-outline-dark"
                type="submit">
                {enabled ? 'OS 1890s Map + Modern Footprints [on]' : 'OS 1890s Map + Modern Footprints [off]'}
            </button>
        </form>
    );
}