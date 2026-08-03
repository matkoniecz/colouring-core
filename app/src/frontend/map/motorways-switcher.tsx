
import React from 'react';

import './map-button.css';
import { useDisplayPreferences } from '../displayPreferences-context';

export function MotorwaysSwitcher({showButtonOnlyIfLayerOn}: {showButtonOnlyIfLayerOn: boolean}) {
    const { motorways, motorwaysSwitch, darkLightTheme } = useDisplayPreferences();
    const enabled = motorways === 'enabled';
    if (showButtonOnlyIfLayerOn && enabled === false) {
        return <></>
    }
    return (
        <form className={`map-button ${motorways}-state ${darkLightTheme}`} onSubmit={motorwaysSwitch}>
            <button className="btn btn-outline btn-outline-dark"
                type="submit">
                {enabled ? 'Motorways [on]' : 'Motorways [off]'}
            </button>
        </form>
    );
}
