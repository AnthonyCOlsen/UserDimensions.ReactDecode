import React from 'react';
import { Base64Props } from '../types/types'

const Base64Encoded: React.FC<Base64Props> = ({ encodedValue, onChange }) => {
    return (
        <div>
            <label>Base64 Encoded:</label><br />
            <input
                type="text"
                value={encodedValue}
                onChange={onChange}
                placeholder="Encoded"
            />
        </div>
    );
}

export default Base64Encoded;