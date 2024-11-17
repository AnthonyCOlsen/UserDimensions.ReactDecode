//import React from 'react'
import { useState } from 'react'
import './App.css'
import Base64Encoded from './components/Base64Encoded';
import Base64Decoded from './components/Base64Decoded';

function App() {
	const [decodedValue, setDecodedValue] = useState('');

	const handleDecodedValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setDecodedValue(event.target.value);
	}

	const handleEncodedValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setDecodedValue(event.target.value);
	}

	return (
		<div className="App">
			<Base64Decoded decodedValue={decodedValue} onChange={handleDecodedValueChange} />
			<Base64Encoded decodedValue={decodedValue} onChange={handleEncodedValueChange} />
		</div>
	);
}

export default App
