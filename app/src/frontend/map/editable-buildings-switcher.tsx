import React from 'react';

import './map-button.css';
import { useDisplayPreferences } from '../displayPreferences-context';

export function EditableBuildingsSwitcher({showButtonOnlyIfLayerOn}: {showButtonOnlyIfLayerOn: boolean}) {
    const { editableBuildings, editableBuildingsSwitch, darkLightTheme } = useDisplayPreferences();
    const enabled = editableBuildings === 'enabled';
    if (showButtonOnlyIfLayerOn && enabled === false) {
        return <></>
    }
    return (
        <form className={`map-button ${editableBuildings}-state ${darkLightTheme}`} onSubmit={editableBuildingsSwitch}>
            <button className="btn btn-outline btn-outline-dark"
                type="submit">
                {enabled ? 'Editable Buildings [on]' : 'Editable Buildings [off]'}
            </button>
        </form>
    );
}
