import React from 'react';
import { Base64Props } from '../types/types'

const Base64Decoded: React.FC<Base64Props> = ({ decodedValue, onChange }) => {
    return (
        <div>
            <label>Decoded:</label><br />
            <input
                type="text"
                value={decodedValue}
                onChange={onChange}
                placeholder="Decoded"
            />
        </div>
    );
}

export default Base64Decoded;