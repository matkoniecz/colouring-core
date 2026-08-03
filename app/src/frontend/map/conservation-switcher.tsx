import React from 'react';

import './map-button.css';
import { useDisplayPreferences } from '../displayPreferences-context';

export function ConservationAreaSwitcher({showButtonOnlyIfLayerOn}: {showButtonOnlyIfLayerOn: boolean}) {
    const { conservation, conservationSwitch, darkLightTheme } = useDisplayPreferences();
    const enabled = conservation === 'enabled';
    if (showButtonOnlyIfLayerOn && enabled === false) {
        return <></>
    }
    return (
        <form className={`map-button ${conservation}-state ${darkLightTheme}`} onSubmit={conservationSwitch}>
            <button className="btn btn-outline btn-outline-dark"
                type="submit">
                {enabled ? 'Conservation Areas [on]' : 'Conservation Areas [off]'}
            </button>
        </form>
    );
}