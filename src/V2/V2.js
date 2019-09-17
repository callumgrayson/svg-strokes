import React, { useState } from 'react';
import './V2.css';

import AlphaSVG2 from './alphaSVG2';

const V2 = () => {
	const [ refresh, setRefresh ] = useState(1);

	const refreshAnimation = () => {
		setRefresh((prev) => (prev === 0 ? 1 : 0));
	};

	function renderSvg() {
		return (
			<AlphaSVG2
				refresh={Boolean(refresh)}
				height="100"
				stroke="white"
				strokeWidth="10"
			/>
		);
	}

	return (
		<div>
			<button className="animate2" onClick={refreshAnimation}>
				Animate
			</button>
			{refresh === 0 && renderSvg()}
			{refresh === 1 && renderSvg()}
		</div>
	);
};

export default V2;
