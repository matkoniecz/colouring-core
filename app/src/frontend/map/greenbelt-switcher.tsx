
import React from 'react';

import './map-button.css';
import { useDisplayPreferences } from '../displayPreferences-context';

export function GreenbeltSwitcher({showButtonOnlyIfLayerOn}: {showButtonOnlyIfLayerOn: boolean}) {
    const { greenbelt, greenbeltSwitch, darkLightTheme } = useDisplayPreferences();
    const enabled = greenbelt === 'enabled';
    if (showButtonOnlyIfLayerOn && enabled === false) {
        return <></>
    }
    return (
        <form className={`map-button ${greenbelt}-state ${darkLightTheme}`} onSubmit={greenbeltSwitch}>
            <button className="btn btn-outline btn-outline-dark"
                type="submit">
                {enabled ? 'Greenbelt [on]' : 'Greenbelt [off]'}
            </button>
        </form>
    );
}
