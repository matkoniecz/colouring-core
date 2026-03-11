
    import React from 'react';

    import './map-button.css';
    import { useDisplayPreferences } from '../displayPreferences-context';

    export const TreesSwitcher: React.FC<{}> = () => {
        const { trees, treesSwitch, darkLightTheme } = useDisplayPreferences();
        return (
            <form className={`map-button ${trees}-state ${darkLightTheme}`} onSubmit={treesSwitch}>
                <button className="btn btn-outline btn-outline-dark"
                    type="submit">
                    {(trees === 'enabled')? 'trees on' : 'trees off'}
                </button>
            </form>
        );
    }
    