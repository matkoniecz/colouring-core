import React from 'react';

import './map-button.css';
import { useDisplayPreferences } from '../displayPreferences-context';

export function BoroughSwitcher({showButtonOnlyIfLayerOn}: {showButtonOnlyIfLayerOn: boolean}) {
    const { borough, boroughSwitch, darkLightTheme } = useDisplayPreferences();
    const enabled = borough === 'enabled';
    if (showButtonOnlyIfLayerOn && enabled === false) {
        return <></>
    }
    return (
        <form className={`borough-switcher map-button ${borough}-state ${darkLightTheme}`} onSubmit={boroughSwitch}>
            <button className="btn btn-outline btn-outline-dark"
                type="submit">
                {enabled ? 'Local Authorities [on]' : 'Local Authorities [off]'}
            </button>
        </form>
    );
}