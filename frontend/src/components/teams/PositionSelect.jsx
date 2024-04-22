import React from 'react';

function PositionSelect({ onChange }) {
    const positions = [
        'Todas',
        'Goleiro',
        'Zagueiro',
        'Meia',
        'Atacante',
        'Lateral-direito',
        'Lateral-esquerdo',
        'Volante',
        // ... outras posições
    ];

    return (
        <label>
            Posição
            <select onChange={(e) => onChange(e.target.value)}>
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
