
    import React from 'react';

    import './map-button.css';
    import { useDisplayPreferences } from '../displayPreferences-context';

export function TreesSwitcher({showButtonOnlyIfLayerOn, enabledOverride}: {showButtonOnlyIfLayerOn: boolean, enabledOverride: boolean}) {
        const { trees, treesSwitch, darkLightTheme } = useDisplayPreferences();
        const enabled = trees === 'enabled';
        if (showButtonOnlyIfLayerOn && enabled === false) {
            return <></>
        }
        return (
            <form className={`map-button ${(enabled || enabledOverride) ? 'enabled' : 'disabled'}-state ${darkLightTheme}`} onSubmit={treesSwitch}>
                <button className="btn btn-outline btn-outline-dark"
                    type="submit">
                    {(enabled || enabledOverride)? 'Trees [on]' : 'Trees [off]'}
                </button>
            </form>
        );
    }
    