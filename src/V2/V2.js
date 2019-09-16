import React, { useState, useLayoutEffect } from 'react';
import styled, { css } from 'styled-components';
import './V2.css';

import AlphaSVG2 from './alphaSVG2';

const V2 = () => {
	const [ refresh, setRefresh ] = useState(1);

	useLayoutEffect(() => {
		const logo2 = document.querySelectorAll('path');
		// console.log('logo2', logo2);

		for (let i = 0; i < logo2.length; i++) {
			console.log(`Letter ${i} is ${logo2[i].getTotalLength()}`);
		}
	});

	const refreshAnimation = () => {
		setRefresh((prev) => (prev === 0 ? 1 : 0));
	};

	function renderSvg() {
		return (
			<AlphaSVG2
				refresh={Boolean(refresh)}
				height="100"
				stroke="white"
				strokeWidth="9"
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
