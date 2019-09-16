import React, { useState } from 'react';
import './App.css';

import V1 from './V1/V1';
import V2 from './V2/V2';
import V3 from './V3/V3';

function App() {
	const [ version, setVersion ] = useState('3');

	const handleChange = (e) => {
		setVersion(e.target.value);
	};

	return (
		<div className="app">
			<select className="select" value={version} onChange={handleChange}>
				<option value="1">version 1</option>
				<option value="2">version 2</option>
				<option value="3">version 3</option>
			</select>
			{version === '1' && <V1 />}
			{version === '2' && <V2 />}
			{version === '3' && <V3 />}
		</div>
	);
}

export default App;
