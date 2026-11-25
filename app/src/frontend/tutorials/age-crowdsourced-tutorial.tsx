import React from 'react';
import { Link } from 'react-router-dom';

import { Category } from '../config/categories-config';

import './age-crowdsourced-tutorial.css';

interface AgeCrowdsourcedTutorialProps {
    /** building selected via external link, may be undefined while it is still being looked up */
    buildingId?: number;
    /** building from `objekt_id` is still being looked up - edit/login/signup should wait for it */
    isLookingUpBuilding: boolean;
    isLoggedIn: boolean;
    onClose: () => void;
}

/**
 * Introduction shown to users arriving via external link with `show_tutorial=age_crowdsourced`,
 * explaining what Colouring Dresden is and how to review and correct building age.
 */
export const AgeCrowdsourcedTutorial: React.FC<AgeCrowdsourcedTutorialProps> = ({ buildingId, isLookingUpBuilding, isLoggedIn, onClose }) => {
    const editPath = buildingId == undefined
        ? `/edit/${Category.AgeHistory}`
        : `/edit/${Category.AgeHistory}/${buildingId}`;
    const returnState = { from: editPath };

    return (
        <div className="tutorial-overlay" role="dialog" aria-modal="true" aria-labelledby="age-tutorial-title">
            <div className="tutorial-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="age-tutorial-title"><strong>Willkommen bei Colouring Dresden!</strong></h5>
                        <button type="button" className="btn-close" aria-label="Schließen" onClick={onClose}></button>
                    </div>
                    <div className="modal-body">
                        <p>
                            <strong>Colouring Dresden</strong> ist eine offene Wissensplattform, auf der Gebäudedaten
                            gemeinsam mit Bürgerinnen und Bürgern gesammelt, dargestellt und verbessert werden.
                        </p>
                        <p>
                            Sie wurden vom Digitalen Zwilling zu einem Gebäude weitergeleitet, dessen Baujahr
                            möglicherweise ungenau oder fehlerhaft ist.
                        </p>
                        <p><strong>Helfen Sie uns, das Baujahr zu verbessern!</strong></p>
                        <ol>
                            <li><strong>Prüfen</strong>: Schauen Sie sich den angegebenen Bauzeitraum in der linken Seitenleiste an.</li>
                            <li><strong>Bestätigen</strong>: Ist die Angabe richtig, bestätigen Sie diese.</li>
                            <li><strong>Verbessern</strong>: Grenzen Sie den Zeitraum weiter ein oder korrigieren Sie ihn und speichern Sie Ihre Angabe.</li>
                        </ol>
                        <p>
                            Auch wenn Sie das genaue Baujahr nicht kennen, hilft uns ein genauerer Zeitraum.
                        </p>
                        <p>
                            <strong>Zum Mitmachen ist eine Registrierung bzw. Anmeldung erforderlich.</strong> Ohne
                            Anmeldung können Sie die Daten nur ansehen.
                        </p>
                    </div>
                    <div className="modal-footer">
                        {
                            isLookingUpBuilding
                                // links cannot be disabled, so show disabled buttons until target building is known
                                ? (isLoggedIn
                                    ? <button type="button" className="btn btn-primary" disabled>Baujahr bearbeiten</button>
                                    : <>
                                        <button type="button" className="btn btn-primary" disabled>Registrieren</button>
                                        <button type="button" className="btn btn-outline-primary" disabled>Anmelden</button>
                                    </>)
                            : isLoggedIn
                                ? <Link to={editPath} className="btn btn-primary" onClick={onClose}>Baujahr bearbeiten</Link>
                                : <>
                                    <Link to={{ pathname: '/sign-up.html', state: returnState }} className="btn btn-primary" onClick={onClose}>Registrieren</Link>
                                    <Link to={{ pathname: '/login.html', state: returnState }} className="btn btn-outline-primary" onClick={onClose}>Anmelden</Link>
                                </>
                        }
                        <button type="button" className="btn btn-outline-secondary" onClick={onClose}>Daten ansehen</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
