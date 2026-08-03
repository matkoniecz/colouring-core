
    import React from 'react';

    import './map-button.css';
    import { useDisplayPreferences } from '../displayPreferences-context';

    export function DemolishedOverlaySwitcher({showButtonOnlyIfLayerOn}: {showButtonOnlyIfLayerOn: boolean}) {
        const { demolishedOverlay, demolishedOverlaySwitch, darkLightTheme } = useDisplayPreferences();
        const enabled = demolishedOverlay === 'enabled';
        if (showButtonOnlyIfLayerOn && enabled === false) {
            return <></>
        }
        return (
            <form className={`map-button ${demolishedOverlay}-state ${darkLightTheme}`} onSubmit={demolishedOverlaySwitch}>
                <button className="btn btn-outline btn-outline-dark"
                    type="submit">
                    {enabled ? 'Demolished 2015-2025 [on]' : 'Demolished 2015-2025 [off]'}
                </button>
            </form>
        );
    }
    