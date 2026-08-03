
import React from 'react';

import './map-button.css';
import { useDisplayPreferences } from '../displayPreferences-context';

export function CeremonialCountiesSwitcher({showButtonOnlyIfLayerOn}: {showButtonOnlyIfLayerOn: boolean}) {
    const { ceremonialCounties, ceremonialCountiesSwitch, darkLightTheme } = useDisplayPreferences();
    const enabled = ceremonialCounties === 'enabled';
    if (showButtonOnlyIfLayerOn && enabled === false) {
        return <></>
    }
    return (
        <form className={`map-button ${ceremonialCounties}-state ${darkLightTheme}`} onSubmit={ceremonialCountiesSwitch}>
            <button className="btn btn-outline btn-outline-dark"
                type="submit">
                {enabled ? 'Counties [on]' : 'Counties [off]'}
            </button>
        </form>
    );
}
