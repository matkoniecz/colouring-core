import React from 'react';

import './map-button.css';
import { useDisplayPreferences } from '../displayPreferences-context';

export function HistoricalFootprintsSwitcher({showButtonOnlyIfLayerOn}: {showButtonOnlyIfLayerOn: boolean}) {
    const { historicalFootprints, historicalFootprintsSwitch, darkLightTheme } = useDisplayPreferences();
    
    return (
        <form className={`historical-footprints-switcher map-button ${historicalFootprints}-state ${darkLightTheme}`} onSubmit={historicalFootprintsSwitch}>
            <button className="btn btn-outline btn-outline-dark"
                type="submit">
                {(historicalFootprints === 'enabled')? 'OS 1890s Map + 1890s footprints [on]' : 'OS 1890s Map + 1890s footprints [off]'}
            </button>
        </form>
    );
}