import React, { useState, useLayoutEffect } from 'react';
import './V3.css';

import AlphaSVG from './alphaSVG';

const V3 = () => {
	const [ refresh, setRefresh ] = useState(1);
	const [ inputText, setInputText ] = useState('excellent');
	const [ lengths, setLengths ] = useState({});

	useLayoutEffect(
		() => {
			const svgEl = document.querySelectorAll('svg');

			let lengths = [];
			for (let i = 0; i < svgEl.length; i++) {
				const length = svgEl[i].childNodes[0].getTotalLength();
				lengths.push(length);
			}

			setLengths(lengths);
		},
		[ inputText ]
	);

	const changeText = (e) => {
		let val = e.target.value;
		setInputText(val);
	};

	const refreshAnimation = () => {
		setRefresh((prev) => (prev === 0 ? 1 : 0));
	};

	function renderSvg() {
		return (
			<AlphaSVG
				refresh={Boolean(refresh)}
				height="100"
				stroke="white"
				strokeWidth="10"
				letters={inputText}
				lengths={lengths}
				refreshAnimation={refreshAnimation}
			/>
		);
	}

	return (
		<div>
			<input
				className="v3_input"
				type="text"
				value={inputText}
				onChange={changeText}
				placeholder="enter text"
			/>
			<button className="v3_animate" onClick={refreshAnimation}>
				Animate
			</button>
			{refresh === 0 && renderSvg()}
			{refresh === 1 && renderSvg()}
		</div>
	);
};

export default V3;
