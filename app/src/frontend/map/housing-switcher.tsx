import React from 'react';

import './map-button.css';
import { useDisplayPreferences } from '../displayPreferences-context';

export function HousingSwitcher({showButtonOnlyIfLayerOn}: {showButtonOnlyIfLayerOn: boolean}) {
    const { housing, housingSwitch, darkLightTheme } = useDisplayPreferences();
    const enabled = housing === 'enabled';
    if (showButtonOnlyIfLayerOn && enabled === false) {
        return <></>
    }
    return (
    <form className={`map-button ${housing}-state ${darkLightTheme}`} onSubmit={housingSwitch}>
        <button className="btn btn-outline btn-outline-dark"
            type="submit">
            {enabled ? 'Housing Zones [on]' : 'Housing Zones [off]'}
        </button>
    </form>
    );
}
