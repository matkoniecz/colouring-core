
    import React from 'react';

    import './map-button.css';
    import { useDisplayPreferences } from '../displayPreferences-context';

    export const DemolishedOverlaySwitcher: React.FC<{}> = () => {
        const { demolishedOverlay, demolishedOverlaySwitch, darkLightTheme } = useDisplayPreferences();
        return (
            <form className={`map-button ${demolishedOverlay}-state ${darkLightTheme}`} onSubmit={demolishedOverlaySwitch}>
                <button className="btn btn-outline btn-outline-dark"
                    type="submit">
                    {(demolishedOverlay === 'enabled')? 'Demolished 2015-2025 [on]' : 'Demolished 2015-2025 [off]'}
                </button>
            </form>
        );
    }
    