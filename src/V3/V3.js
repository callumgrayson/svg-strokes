import React, { useState, useLayoutEffect } from 'react';
import styled, { css } from 'styled-components';
import './V3.css';

import AlphaSVG from './alphaSVG';

const V3 = () => {
	const [ refresh, setRefresh ] = useState(1);

	useLayoutEffect(() => {
		const svgEl = document.querySelectorAll('svg');
		// console.log('svgEl', svgEl);
		let paths = {};

		for (let i = 0; i < svgEl.length; i++) {
			// console.log(
			// 	'svgEl[i].getAttribute("class")',
			// 	svgEl[i].getAttribute('class')[3]
			// );
			const vb = svgEl[i].getAttribute('viewBox');
			const letter = svgEl[i].getAttribute('class')[3];
			const path = svgEl[i].childNodes[0].getAttribute('d');
			// console.log(`Letter ${i} is ${svgEl[i].getTotalLength()}`);
			paths[letter] = {
				viewBox: vb,
				path: path
			};
		}

		console.log('paths', JSON.stringify(paths));
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

export default V3;
