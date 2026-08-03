import React from 'react';

import './map-button.css';
import { useDisplayPreferences } from '../displayPreferences-context';

export function ParcelSwitcher({showButtonOnlyIfLayerOn}: {showButtonOnlyIfLayerOn: boolean}) {
    const { parcel, parcelSwitch, darkLightTheme } = useDisplayPreferences();
    const enabled = parcel === 'enabled';
    if (showButtonOnlyIfLayerOn && enabled === false) {
        return <></>
    }
    return (
        <form className={`map-button ${parcel}-state ${darkLightTheme}`} onSubmit={parcelSwitch}>
            <button className="btn btn-outline btn-outline-dark"
                type="submit">
                {enabled ? 'Parcel overlay (sample) [on]' : 'Parcel overlay (sample) [off]'}
            </button>
        </form>
    );
}