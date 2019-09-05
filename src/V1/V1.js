import React, { useState, useLayoutEffect } from 'react';
import './V1.css';

import DesignerSVG from './designerSVG';

const V1 = () => {
	const [ refresh, setRefresh ] = useState(1);

	useLayoutEffect(() => {
		const logo = document.querySelectorAll('.logo path');
		console.log('logo', logo);

		for (let i = 0; i < logo.length; i++) {
			console.log(`Letter ${i} is ${logo[i].getTotalLength()}`);
		}
	});

	const refreshAnimation = () => {
		setRefresh((prev) => (prev === 2 ? 1 : 2));
	};

	return (
		<div>
			<button className="animate" onClick={refreshAnimation}>
				Animate
			</button>
			{refresh === 1 && <DesignerSVG />}
			{refresh === 2 && <DesignerSVG />}
		</div>
	);
};

export default V1;
