import React from 'react';

function PositionSelect({ onChange, value }) {
    const positions = [
        'Goleiro',
        'Zagueiro-Direito',
        'Zagueiro-central-esquerda',
        'Zagueiro-central-direita',
        'Zagueiro-esquerdo',
        'Meia-direito',
        'Meia-central-direito',
        'Meia-central-esquerdo',
        'Meia-esquerdo',
        'Atacante-direito',
        'Atacante-esquerdo',
    ];

    return (
        <label>
            Posição
            <select onChange={(e) => onChange(e.target.value)} value={value}>
                <option value="">Selecione uma Posição</option>
                {positions.map((position) => (
                    <option key={position} value={position}>
                        {position}
                    </option>
                ))}
            </select>
        </label>
    );
}

export default PositionSelect;
