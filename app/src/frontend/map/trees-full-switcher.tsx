
    import React from 'react';

    import './map-button.css';
    import { useDisplayPreferences } from '../displayPreferences-context';

    export const TreesFullSwitcher: React.FC<{}> = () => {
        const { treesFull, treesFullSwitch, darkLightTheme } = useDisplayPreferences();
        return (
            <form className={`map-button ${treesFull}-state ${darkLightTheme}`} onSubmit={treesFullSwitch}>
                <button className="btn btn-outline btn-outline-dark"
                    type="submit">
                    {(treesFull === 'enabled')? 'treesFull on' : 'treesFull off'}
                </button>
            </form>
        );
    }
    