import React from 'react';
import { Base64Props } from '../types/types'

const Base64Encoded: React.FC<Base64Props> = ({ decodedValue, onChange }) => {
    return (
        <div>
            <label>Base64 Decoded (still under development...):</label><br />
            <input
                type="text"
                value={decodedValue}
                onChange={onChange}
                placeholder="Encoded"
            />
        </div>
    );
}

export default Base64Encoded;