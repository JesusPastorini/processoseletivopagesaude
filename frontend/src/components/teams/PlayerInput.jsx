import React from 'react';

function PlayerInput({ options, onChange }) {
    return (
        <label>
            Escolha o jogador:
            <select onChange={(e) => onChange(e.target.value)}>
                <option value="">Selecione...</option>
                {/* Mapeando a lista de jogadores para criar as opções */}
                {options.map((player) => (
                    <option key={player.id} value={player.id}>
                        {player.name}
                    </option>
                ))}
            </select>
        </label>
    );
}

export default PlayerInput;

