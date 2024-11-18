//import React from 'react'
import { useState } from 'react'
import './App.css'
import Base64Encoded from './components/Base64Encoded';
import Base64Decoded from './components/Base64Decoded';
import DisplayMedia from './components/DisplayMedia';
import { MediaType } from './types/types'

function App() {
	const [decodedValue, setDecodedValue] = useState('');
	const [encodedValue, setEncodedValue] = useState('');
	const [mediaType, setMediaType] = useState(MediaType);

	const handleDecodedValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		try {
			setDecodedValue(event.target.value);
			const encodedValue = btoa(event.target.value);
			setEncodedValue(encodedValue);
		} catch (error) {
			if (error instanceof Error) {
				setDecodedValue('Unable to Base64 encode supplied value: ' + error.message);
			} else {
				setDecodedValue('Unable to Base64 encode supplied value: Unknown object thrown: ' + error);
			}
		}
		event.stopPropagation();
	}

	const videoExtensions = /\.(mp4|webm|ogg|mov|avi|wmv|flv|mkv)$/i;

	const imageExtensions = /\.(bmp|jpg|jpeg|gif|png|tiff|webp|heic|raw|ico)$/i;

	const handleEncodedValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		try {
			setEncodedValue(event.target.value);
			const decodedValue = atob(event.target.value);
			setDecodedValue(decodedValue);
			if (videoExtensions.test(decodedValue.toLowerCase())) {
				setMediaType(MediaType.Video);
			}
			else if (imageExtensions.test(decodedValue.toLowerCase())) {
				setMediaType(MediaType.Image);
			}
			else {
				setMediaType(MediaType.Nothing);
			}
		} catch (error) {
			if (error instanceof Error) {
				setDecodedValue('Base64 encoded value is incorrect: ' + error.message);
			} else {
				setDecodedValue('Base64 encoded value is incorrect: Unknown object thrown: ' + error);
			}
			setMediaType(MediaType.Error);
		}
		event.stopPropagation();
	}

	return (
		<div className="App">
			<Base64Decoded decodedValue={decodedValue} onChange={handleDecodedValueChange} />
			<DisplayMedia decodedValue={decodedValue} mediaType={mediaType} />
			<Base64Encoded encodedValue={encodedValue} onChange={handleEncodedValueChange} />
		</div>
	);
}

export default App
