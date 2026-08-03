import React from 'react';

import './map-button.css';
import { useDisplayPreferences } from '../displayPreferences-context';

export function VistaSwitcher({showButtonOnlyIfLayerOn}: {showButtonOnlyIfLayerOn: boolean}) {
    const { vista, vistaSwitch, darkLightTheme } = useDisplayPreferences();
    const enabled = vista === 'enabled';
    if (showButtonOnlyIfLayerOn && enabled === false) {
        return <></>
    }
    return (
    <form className={`map-button ${vista}-state ${darkLightTheme}`} onSubmit={vistaSwitch}>
        <button className="btn btn-outline btn-outline-dark"
            type="submit">
            {enabled ? 'Protected Vistas [on]' : 'Protected Vistas [off]'}
        </button>
    </form>
    );
}