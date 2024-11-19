import React from 'react';
import { Base64Props } from '../types/types'

const Base64Decoded: React.FC<Base64Props> = ({ decodedValue, onChange }) => {
    return (
        <div>
            <label>Decoded:</label><br />
            <textarea
                value={decodedValue}
                rows="10"
                cols="30"
                onChange={onChange}
                placeholder="Decoded"
            />
        </div>
    );
}

export default Base64Decoded;