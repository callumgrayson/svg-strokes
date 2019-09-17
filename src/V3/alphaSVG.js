import React from 'react';
import styled from 'styled-components';

import paths from './paths.json';
const uuid = require('uuid/v4');

const SvgBox = styled.div`
	display: flex;
	max-width: 80vw;
	flex-wrap: wrap;
	cursor: pointer;
`;

const SvgChar = styled.div`
	animation: line-anim 3s ease forwards;

	stroke-dasharray: ${(props) => props.length};
	stroke-dashoffset: ${(props) => props.length};

	@keyframes line-anim {
		to {
			stroke-dashoffset: 0;
		}
	}
`;

const Svg = styled.svg`
	animation: fill .8s ease ${(props) => props.delay + 2.7}s forwards;

	@keyframes fill {
		from {
			fill: transparent;
		}
		to {
			fill: white;
		}
	}
`;

export default (props) => {
	const {
		height,
		stroke,
		strokeWidth,
		letters,
		lengths,
		refreshAnimation
	} = props;

	const buildDisplay = (inStr, inPaths, inLengths) => {
		if (!inStr) {
			inStr = '';
		}

		return inStr.split('').map((el, i) => {
			return { ...inPaths[el.toUpperCase()], length: inLengths[i] };
		});
	};

	return (
		<SvgBox className="v3_svgBox" onClick={refreshAnimation}>
			{letters &&
				buildDisplay(letters, paths, lengths).map((el, i) => {
					const { viewBox, path, char, length } = el;
					return (
						<SvgChar
							key={uuid()}
							className="v3_svgChar"
							key={i}
							length={length}
							delay={0.3 * i}
						>
							<Svg
								char={char}
								height={height}
								viewBox={viewBox}
								length={length}
								delay={0.1 * i}
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									className="v3_svg"
									d={path}
									stroke={stroke}
									strokeWidth={strokeWidth}
									strokeLinejoin="miter"
									strokeMiterlimit="10"
								/>
							</Svg>
						</SvgChar>
					);
				})}
		</SvgBox>
	);
};
