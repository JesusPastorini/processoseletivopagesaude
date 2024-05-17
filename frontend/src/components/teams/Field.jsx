import React from 'react';
import '../styles/Field.css';
import { TbShirt } from "react-icons/tb";
import { GiTrophy } from "react-icons/gi";
import { GoAlertFill } from "react-icons/go";

function Field({ teams }) {
    const checkTeamAverages = () => {
        for (let i = 0; i < teams.length; i++) {
            for (let j = i + 1; j < teams.length; j++) {
                if (Math.abs(teams[i].average - teams[j].average) > 1) {
                    return true;
                }
            }
        }
        return false;
    };

    const displayWarning = checkTeamAverages();
    return (
        <div className="field-container">
            <h3 className="campeonato">
                <GiTrophy className="foot" />
                Campeonato
                <GiTrophy className="foot" /></h3>
            {displayWarning && (
                <div className="warning-message">
                    <GoAlertFill className="icone-alert" />
                    A média dos times deve ser igual ou semelhante.
                    <GoAlertFill className="icone-alert" />
                </div>
            )}
            <div className="field-wrapper">
                {teams.map((team) => (
                    <div key={team.id} className="field-item">
                        <h3>{team.nameTeam} - Media: {team.average}</h3>
                        <div
                            className="field"
                            style={{ backgroundImage: `url('/campo.jpg')` }}
                        >
                            <ul>
                                {team.players.map((player) => (

                                    <li
                                        key={player.id}
                                        id={`position-${player.position}`}
                                        className={`player-position ${player.position}`}
                                    >
                                        <TbShirt className="shirt" />
                                        <div className="name-player">
                                            {player.namePlayer.replace(/^\./, '')}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Field;
