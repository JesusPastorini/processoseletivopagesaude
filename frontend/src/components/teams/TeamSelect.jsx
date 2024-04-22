import React from 'react';

function TeamSelect({ onChange }) {
    const teams = ['Time A', 'Time B', 'Time C', 'Time D'];

    return (
        <label>
            Time
            <select onChange={(e) => onChange(e.target.value)}>
                <option value="">Selecione um time</option>
                {teams.map((team) => (
                    <option key={team} value={team}>
                        {team}
                    </option>
                ))}
            </select>
        </label>
    );
}

export default TeamSelect;
