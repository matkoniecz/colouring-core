
    import React from 'react';

    import './map-button.css';
    import { useDisplayPreferences } from '../displayPreferences-context';

    export const NewConstructionOverlaySwitcher: React.FC<{}> = () => {
        const { newConstructionOverlay, newConstructionOverlaySwitch, darkLightTheme } = useDisplayPreferences();
        return (
            <form className={`map-button ${newConstructionOverlay}-state ${darkLightTheme}`} onSubmit={newConstructionOverlaySwitch}>
                <button className="btn btn-outline btn-outline-dark"
                    type="submit">
                    {(newConstructionOverlay === 'enabled')? 'New construction 2015-2025 [on]' : 'New construction 2015-2025 [off]'}
                </button>
            </form>
        );
    }
    