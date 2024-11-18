import React from 'react';
import { DisplayMediaInterface, MediaType } from '../types/types'
import '../App.css'

const DisplayMedia: React.FC<DisplayMediaInterface> = ({ decodedValue, mediaType }) => {
    let content;

    switch (mediaType) {
        case MediaType.Nothing:
            content = <label>{decodedValue}</label>
            break;
        case MediaType.Video:
            content = (
                <div style={{ marginTop: '20px' }}>
                    <h3>Video Preview: {decodedValue}</h3>
                    <video width="600" controls autoPlay>
                        <source src={decodedValue} />
                        Your browser does not support the video tag.
                    </video>
                </div>
            )
            break;
        case MediaType.Image:
            content = <label>[Image]]</label>
            break;
        case MediaType.Error:
            content = <label className="red-label">{decodedValue}</label>
            break;
    }

    return <div>{content}</div>;
}

export default DisplayMedia;