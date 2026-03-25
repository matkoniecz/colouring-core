
    import React from 'react';

    import './map-button.css';
    import { useDisplayPreferences } from '../displayPreferences-context';

    export function TreesSwitcher({enabledOverride}: {enabledOverride: boolean}) {
        const { trees, treesSwitch, darkLightTheme } = useDisplayPreferences();
        return (
            <form className={`map-button ${(trees === 'enabled' || enabledOverride) ? 'enabled' : 'disabled'}-state ${darkLightTheme}`} onSubmit={treesSwitch}>
                <button className="btn btn-outline btn-outline-dark"
                    type="submit">
                    {(trees === 'enabled' || enabledOverride)? 'Trees [on]' : 'Trees [off]'}
                </button>
            </form>
        );
    }
    