import React from 'react';

function PlayerInput({ options, onChange, value }) {
    return (
        <label>
            Escolha o jogador:
            <select onChange={(e) => onChange(e.target.value)} value={value || ''}>
                <option value="">Selecione...</option>
                {options.map((player) => (
                    <option key={player.id} value={player.id}>
                        {player.namePlayer}
                    </option>
                ))}
            </select>
        </label>
    );
}

export default PlayerInput;

