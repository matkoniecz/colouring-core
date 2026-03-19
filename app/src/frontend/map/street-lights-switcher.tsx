
    import React from 'react';

    import './map-button.css';
    import { useDisplayPreferences } from '../displayPreferences-context';

    export const StreetLightsSwitcher: React.FC<{}> = () => {
        const { streetLights, streetLightsSwitch, darkLightTheme } = useDisplayPreferences();
        return (
            <form className={`map-button ${streetLights}-state ${darkLightTheme}`} onSubmit={streetLightsSwitch}>
                <button className="btn btn-outline btn-outline-dark"
                    type="submit">
                    {(streetLights === 'enabled')? 'Streetlights [on]' : 'Streetlights [off]'}
                </button>
            </form>
        );
    }
    