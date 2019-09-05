import React, { useState } from 'react';
import './App.css';

import V1 from './V1/V1';

function App() {
	const [ version, setVersion ] = useState('1');

	const handleChange = (e) => {
		setVersion(e.target.value);
	};

	return (
		<div className="app">
			<select className="select" value={version} onChange={handleChange}>
				<option value="1">version 1</option>
				<option value="2">version 2</option>
			</select>
			{version === '1' && <V1 />}
			{version === '2' && <div className="v2">V2 will go here...</div>}
		</div>
	);
}

export default App;
