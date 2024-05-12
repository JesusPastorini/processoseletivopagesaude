import React from 'react';
import '../styles/Field.css';
import { TbShirt } from "react-icons/tb";

function Field({ teams }) {
    return (
        <div className="field-container">
            <h3>Times e Jogadores</h3>
            <div className="field-wrapper">
                {teams.map((team) => (
                    <div key={team.id} className="field-item">
                        <h3>{team.nameTeam} - Nota: {team.average}</h3>
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
