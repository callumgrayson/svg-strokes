import React from 'react';

const paths = {
	A: {
		viewBox: '-20 -20 250 300',
		path:
			'M42.7812 220H46.2936L47.4849 216.696L65.5593 166.562H144.333L162.679 216.718L163.88 220H167.375H195.078H202.344L199.748 213.213L121.42 8.46349L120.191 5.25H116.75H93.125H89.6822L88.454 8.46629L10.2665 213.216L7.676 220H14.9375H42.7812ZM97.3354 134.344L77.3354 134.344L104.947 58.2161L132.67 134.344H77.3354Z'
	},
	B: {
		viewBox: '-20 -20 200 300',
		path:
			'M5.76562 215V220H10.7656H81.7812C104.296 220 122.463 214.562 135.573 203C148.729 191.397 155.125 175.498 155.125 155.938C155.125 142.995 151.619 131.608 144.44 122.025C139.577 115.381 133.482 110.227 126.234 106.558C131.839 102.907 136.61 98.4763 140.497 93.2491L140.506 93.2369L140.515 93.2247C146.609 84.9238 149.641 75.393 149.641 64.8125C149.641 45.7086 143.617 30.5255 130.936 20.1649C118.514 9.93978 100.483 5.25 77.7031 5.25H10.7656H5.76562V10.25V215ZM103.622 84.8694L103.609 84.8797L103.597 84.8902C97.6982 89.8448 89.5266 92.5781 78.5469 92.5781H42.7656V37.4688H77.7031C90.6205 37.4688 99.2788 39.9796 104.567 44.1347L104.585 44.1485L104.602 44.162C109.534 47.9662 112.5 54.378 112.5 64.6719C112.5 73.4674 109.484 80.01 103.622 84.8694ZM82.3438 187.922H42.7656V124.234H82.7656C95.5002 124.234 104.119 127.171 109.545 132.161C114.892 137.078 117.984 144.774 117.984 156.219C117.984 166.491 114.756 174.04 108.679 179.495C102.622 184.922 94.049 187.922 82.3438 187.922Z'
	},
	C: {
		viewBox: '-20 -20 220 300',
		path:
			'M136.285 156.421L136.993 148.031H173.993L173.341 153.612C170.699 176.221 162.245 194.201 147.621 206.997L147.619 206.999C133.088 219.701 113.956 225.812 90.75 225.812C65.1999 225.812 44.3533 216.573 28.7088 198.02L28.7037 198.014L28.6986 198.008C13.2201 179.534 5.73438 155.084 5.73438 125.188V105.5C5.73438 85.8771 9.21568 68.3959 16.33 53.1792L16.3356 53.1672L16.3413 53.1552C23.5577 37.9316 33.8326 26.1005 47.1924 17.8605C60.5426 9.53231 75.9154 5.4375 93.1406 5.4375C115.864 5.4375 134.61 11.8303 148.848 25.0483C163.048 38.1361 171.099 56.1472 173.35 78.5628L173.902 84.0625H136.901L136.285 79.7736C134.022 64.019 129.196 53.5034 122.504 47.289L122.493 47.2788L122.482 47.2686C115.892 41.075 106.345 37.6562 93.1406 37.6562C77.317 37.6562 65.2861 43.4072 56.4648 54.8277C47.6334 66.3821 42.875 83.284 42.875 106.203V126.031C42.875 147.601 47.3843 164.147 55.8793 176.16C64.1818 187.901 75.6123 193.734 90.75 193.734C105.07 193.734 115.225 190.507 121.967 184.797C133.747 168.636 128.698 179.084 135.968 155.797Z\r '
	},
	D: {
		viewBox: '-20 -20 210 300',
		path:
			'M5.76562 215V220H10.7656H67.4375H67.463L67.4885 220C86.5673 219.805 103.497 215.661 118.122 207.405C132.876 199.13 144.201 187.24 152.043 171.859C159.966 156.504 163.844 138.774 163.844 118.812V105.734V105.722L163.844 105.71C163.747 86.202 159.812 68.7203 151.902 53.3904C144.072 38.0311 132.859 26.1013 118.306 17.7286C103.767 9.36356 87.1359 5.25 68.5625 5.25H10.7656H5.76562V10.25V215ZM110.968 170.174L110.962 170.181L110.955 170.189C100.562 181.849 85.8709 187.922 66.1719 187.922H42.7656V37.4688H69.2418C88.1336 37.6502 102.091 43.7699 111.844 55.3735L111.857 55.3885L111.87 55.4033C121.817 67.0515 127.125 83.7899 127.125 106.297V118.25C127.125 141.387 121.503 158.449 110.968 170.174Z'
	},
	E: {
		viewBox: '-20 -20 190 300',
		path:
			'M126.5 125.359H131.5V120.359V98.2812V93.2812H126.5H42.7656V37.4688H139.438H144.438V32.4688V10.25V5.25H139.438H10.7656H5.76562V10.25V215V220H10.7656H140.844H145.844V215V192.922V187.922H140.844H42.7656V125.359H126.5Z'
	},
	F: {
		viewBox: '-20 -20 190 300',
		path:
			'M123.688 129.578H128.688V124.578V102.5V97.5H123.688H42.7656V37.4688H137.609H142.609V32.4688V10.25V5.25H137.609H10.7656H5.76562V10.25V215V220H10.7656H37.7656H42.7656V215V129.578H123.688Z'
	},
	G: {
		viewBox: '-20 -20 220 300',
		path:
			'M172.037 194.003L172.938 192.713V191.141V116.047V111.047H167.938H93.6875H88.6875V116.047V137.984V142.984H93.6875H136.078V181.926C131.99 185.859 126.939 188.751 120.814 190.565C113.789 192.647 105.427 193.734 95.6562 193.734C79.2113 193.734 66.4999 187.634 56.9982 175.421C47.3745 162.957 42.2969 145.87 42.2969 123.641V106.916C42.3898 83.3555 46.9894 66.1974 55.389 54.7413C63.6772 43.4706 75.7991 37.6562 92.5625 37.6562C105.328 37.6562 114.904 40.8256 121.831 46.6447C128.765 52.4707 133.637 61.4507 136.023 74.2152L136.785 78.2969H140.938H167.938H173.714L172.886 72.5801C169.84 51.5513 161.393 34.871 147.243 23.0582C133.1 11.1579 114.662 5.4375 92.4219 5.4375C65.1692 5.4375 43.4165 14.371 27.8637 32.6506L27.8585 32.6567L27.8533 32.6628C12.4966 50.8299 5.15625 76.0397 5.15625 107.609V125.469V125.493L5.15649 125.518C5.34996 145.155 9.0783 162.644 16.4891 177.861L16.4949 177.873L16.5007 177.885C24.0179 193.117 34.6785 205.012 48.4784 213.412L48.4897 213.419L48.5011 213.425C62.297 221.723 78.0186 225.812 95.5156 225.812C112.497 225.812 127.58 223.305 140.661 218.152L140.67 218.148L140.679 218.145C153.954 212.855 164.481 204.826 172.037 194.003Z'
	},
	H: {
		viewBox: '-20 -20 220 300',
		path:
			'M168.125 220H173.125V215V10.25V5.25H168.125H140.984H135.984V10.25V93.2812H42.7656V10.25V5.25H37.7656H10.7656H5.76562V10.25V215V220H10.7656H37.7656H42.7656V215V125.359H135.984V215V220H140.984H168.125Z'
	},
	I: {
		viewBox: '-20 -20 90 300',
		path:
			'M37.7344 220H42.7344V215V10.25V5.25H37.7344H10.7344H5.73438V10.25V215V220H10.7344H37.7344Z'
	},
	J: {
		viewBox: '-20 -20 190 300',
		path:
			'M112.547 5.25H107.547V10.25V155.637C107.457 167.365 104.224 175.814 98.4408 181.676L98.4289 181.688L98.417 181.7C92.6467 187.628 85.0088 190.734 75 190.734C63.7117 190.734 55.8443 187.717 50.5892 182.393C45.3635 177.006 42.4531 169.259 42.4531 158.469V153.469H37.4531H10.4531H5.45312V158.469C5.45312 178.29 11.4924 194.332 24.0887 205.888C36.6189 217.382 53.8164 222.812 75 222.812C95.576 222.812 112.557 216.976 125.395 204.86C138.42 192.657 144.688 175.892 144.688 155.234V10.25V5.25H139.688H112.547Z'
	},
	K: {
		viewBox: '-20 -20 225 300',
		path:
			'M42.7656 58.4552V10.25V5.25H37.7656H10.7656H5.76562V10.25V215V220H10.7656H37.7656H42.7656V215V147.827L62.3559 127.467L131.383 218.031L132.884 220H135.359H167.703H177.784L171.684 211.974L87.2693 100.924L165.108 13.5765L172.528 5.25H161.375H128.75H126.521L125.031 6.90803L42.7656 98.4552Z'
	},
	L: {
		viewBox: '-20 -20 185 300',
		path:
			'M139.938 192.922V187.922H134.938H42.9062V10.25V5.25H37.9062H10.7656H5.76562V10.25V215V220H10.7656H134.938H139.938V215V192.922Z'
	},
	M: {
		viewBox: '-20 -20 265 300',
		path:
			'M50.2819 8.39035L49.0237 5.25H5.76562V220H42.7656V77.3966L98.8043 220H126.212L127.477 216.879L182.247 76.8547L182.531 135.192V220H219.531V5.25H176.133L174.874 8.39035L112.578 163.869L50.2819 8.39035Z'
	},
	N: {
		viewBox: '-20 -20 220 300',
		path:
			'M168.125 220H173.125V215V10.25V5.25H168.125H141.266H136.266V10.25V151.915L42.0943 7.51866L40.6147 5.25H37.9062H10.7656H5.76562V10.25V215V220H10.7656H37.9062H42.9062V215V74.0142L136.798 217.735L138.278 220H140.984H168.125Z'
	},
	O: {
		viewBox: '-20 -20 225 300',
		path:
			'M169.695 176.891L169.7 176.88C176.797 161.109 180.266 142.852 180.266 122.234V109.297C180.266 88.7736 176.797 70.5679 169.705 54.8025C162.602 38.9195 152.334 26.6264 138.846 18.1658C125.492 9.63619 110.105 5.4375 92.8594 5.4375C75.8587 5.4375 60.5637 9.7012 47.1314 18.3208C33.754 26.8714 23.4986 39.1963 16.3056 55.0602C9.11773 70.913 5.59375 89.0292 5.59375 109.297V124.062V124.087L5.59399 124.111C5.7871 144.002 9.41135 161.742 16.6068 177.217L16.6149 177.235L16.6231 177.252C23.9236 192.642 34.2247 204.692 47.5574 213.213L47.5687 213.22L47.58 213.227C60.9219 221.654 76.1621 225.812 93.1406 225.812C110.469 225.812 125.863 221.666 139.137 213.218C152.425 204.763 162.593 192.576 169.695 176.891ZM129.778 56.1829L129.783 56.1898L129.788 56.1968C138.631 67.9302 143.406 85.3049 143.406 109.016V124.173C143.128 147.304 138.321 164.328 129.645 175.9C121.131 187.164 109.186 192.891 93.1406 192.891C77.3144 192.891 65.1979 186.885 56.2474 174.82C47.2434 162.462 42.4531 145.117 42.4531 122.234V107.218C42.7307 84.8004 47.608 67.9877 56.4916 56.1987C65.3418 44.4841 77.2837 38.6406 92.8594 38.6406C108.956 38.6406 121.053 44.5224 129.778 56.1829Z'
	},
	P: {
		viewBox: '-20 -20 205 300',
		path:
			'M37.7656 220H42.7656V215V139.844H86C109.862 139.844 128.967 134.34 142.565 122.597L142.567 122.595C156.36 110.669 163 93.8282 163 72.8281C163 52.7257 156.136 36.1757 142.219 23.6891C128.387 11.1936 109.524 5.25 86.2812 5.25H10.7656H5.76562V10.25V215V220H10.7656H37.7656ZM86.2812 107.766H42.7656V37.4688H87.7748C100.25 37.7396 109.468 41.2468 116.023 47.4822C122.567 53.7076 126 62.0687 126 73.1094C126 84.8995 122.516 93.227 116.157 98.895C109.695 104.561 99.9911 107.766 86.2812 107.766Z'
	},
	Q: {
		viewBox: '-20 -20 235 300',
		path:
			'M170.294 175.439L170.299 175.428C176.92 160.308 180.141 142.531 180.141 122.234V109.156C180.141 88.6318 176.672 70.466 169.573 54.7865C162.467 38.9979 152.202 26.7191 138.732 18.1729C125.371 9.63559 109.931 5.4375 92.5938 5.4375C75.593 5.4375 60.298 9.7012 46.8658 18.3208C33.4884 26.8714 23.233 39.1963 16.04 55.0602C8.85211 70.913 5.32812 89.0292 5.32812 109.297V124.062V124.087L5.32836 124.111C5.52148 144.002 9.14573 161.742 16.3411 177.217L16.3492 177.235L16.3575 177.252C23.6579 192.642 33.959 204.692 47.2918 213.213L47.3031 213.22L47.3144 213.227C60.6563 221.654 75.8965 225.812 92.875 225.812C99.8684 225.812 106.592 225.114 113.034 223.702L154.311 256.508L157.666 259.175L160.814 256.267L179.236 239.251L183.549 235.268L178.93 231.644L147.402 206.907C157.054 198.723 164.672 188.193 170.294 175.439ZM129.615 56.2724L129.627 56.2887L129.639 56.305C138.414 68.1473 143.141 85.498 143.141 109.016V124.173C142.862 147.304 138.056 164.328 129.38 175.9C120.866 187.164 108.921 192.891 92.875 192.891C76.9569 192.891 64.8545 186.842 56 174.704C47.0748 162.341 42.3281 145.03 42.3281 122.234V107.218C42.6057 84.8004 47.483 67.9877 56.3666 56.1987C65.2228 44.4762 77.1222 38.6406 92.5938 38.6406C108.988 38.6406 121.095 44.5779 129.615 56.2724Z'
	},
	R: {
		viewBox: '-20 -20 215 300',
		path:
			'M163.64 210.891L118.238 128.849C128.851 123.921 137.457 117.026 143.902 108.114C151.516 97.7159 155.266 85.554 155.266 71.8438C155.266 50.6815 148.639 33.8468 134.79 22.1811C121.197 10.6516 102.158 5.25 78.4062 5.25H10.625H5.625V10.25V215V220H10.625H37.7656H42.7656V215V137.172H82.8677L125.891 217.364L127.305 220H130.297H159.266H164.266V215V213.312V212.021L163.64 210.891ZM107.889 95.9164L107.878 95.926L107.867 95.9357C101.136 101.866 91.7867 105.094 79.25 105.094H42.7656V37.4688H79.0928C92.6119 37.5602 102.116 40.8046 108.39 46.4508L108.401 46.4612L108.413 46.4714C114.685 52.0474 118.125 60.2375 118.125 71.8438C118.125 82.1856 114.65 90.0305 107.889 95.9164Z'
	},
	S: {
		viewBox: '-20 -20 210 300',
		path:
			'M29.0834 105.945L29.0665 105.93C17.5541 95.2395 11.7188 81.9147 11.7188 66.2656C11.7188 48.5916 18.8526 33.8761 32.8182 22.4583M29.0834 105.945L29.1005 105.961M29.0834 105.945L29.1005 105.961M29.1005 105.961C40.5233 116.373 58.254 124.796 81.7071 131.538C100.103 136.861 112.037 142.087 118.252 146.977L118.269 146.989L118.285 147.002C123.923 151.362 126.891 157.54 126.891 166.25C126.891 174.814 123.75 181.232 117.461 186.045C111.075 190.933 101.4 193.734 87.7344 193.734C73.2268 193.734 62.1858 190.36 54.1181 184.113C46.3215 177.915 42.3906 169.611 42.3906 158.656V153.656H37.3906H10.25H5.25V158.656C5.25 171.544 8.82201 183.195 15.9976 193.445L16.0072 193.459L16.0168 193.473C23.2695 203.688 33.4505 211.62 46.3222 217.363L46.3369 217.37L46.3516 217.376C59.2076 223.013 73.0206 225.812 87.7344 225.812C110.132 225.812 128.612 220.67 142.671 209.872L142.68 209.865M143.609 77.4531H131.469H126.469V72.4531C126.469 61.2331 122.953 52.9903 116.326 47.0734L116.314 47.0625L116.302 47.0514C109.627 41.0127 99.8726 37.6562 86.3281 37.6562C73.7026 37.6562 64.5313 40.4602 58.2028 45.4438L58.1963 45.4489C52.1361 50.205 49 56.788 49 65.8438C49 72.5352 51.7201 78.2434 57.7049 83.2015C64.0234 88.261 75.2571 93.2856 92.043 98.0154M143.609 77.4531L163.609 77.4531C163.609 60.164 160.294 48.7838 153.695 38.4223C147.159 28.0105 137.896 19.9155 126.088 14.1102C114.335 8.28548 101.043 5.4375 86.3281 5.4375C64.8277 5.4375 46.844 10.9748 32.8197 22.4571M142.68 209.865L142.689 209.858M142.68 209.865L142.689 209.858M142.689 209.858C156.867 198.864 164.031 184.083 164.031 165.969C164.031 154.798 161.509 144.827 156.281 136.245C151.169 127.698 143.373 120.462 133.197 114.431M142.689 209.858M133.197 114.431C123.091 108.293 109.304 102.853 92.0435 98.0155L133.197 114.431Z\n                        '
	},
	T: {
		viewBox: '-20 -20 220 300',
		path:
			'M169.234 37.4688H174.234V32.4688V10.25V5.25H169.234H10.8906H5.89062V10.25V32.4688V37.4688H10.8906H71.5625V215V220H76.5625H103.422H108.422V215V37.4688H169.234Z'
	},
	U: {
		viewBox: '-20 -20 210 300',
		path:
			'M163.906 10.25V5.25H158.906H131.766H126.766V10.25V149.047C126.766 162.928 122.968 172.992 115.996 179.964L115.985 179.975L115.975 179.985C109.132 186.907 98.9206 190.734 84.5156 190.734C70.3292 190.734 60.1411 186.923 53.186 179.974C46.1991 172.901 42.4062 162.777 42.4062 148.906V10.25V5.25H37.4062H10.6875H5.6875V10.25V149.75V149.772L5.6877 149.794C5.88514 172.105 13.0466 190.174 27.5754 203.373C42.0194 216.494 61.1846 222.812 84.5156 222.812H84.6136L84.7116 222.809L91.8834 222.527L91.9669 222.524L92.0502 222.518C113.628 220.949 131.176 213.681 144.195 200.36C157.312 187.035 163.807 169.935 163.906 149.493L163.906 149.481V149.469V10.25Z'
	},
	V: {
		viewBox: '-20 -20 250 300',
		path:
			'M156.322 8.6135L102.558 163.831L49.0552 8.62053L47.8933 5.25H44.3281H14.9375H7.75493L10.2485 11.9858L86.0454 216.736L87.2537 220H90.7344H114.641H118.119L119.329 216.739L195.266 11.9887L197.765 5.25H190.578H161.047H157.487L156.322 8.6135Z'
	},
	W: {
		viewBox: '-20 -20 305 300',
		path:
			'M45.4502 9.12606L44.556 5.25H40.5781H13.5781H7.22529L8.71813 11.4249L58.2181 216.175L59.1429 220H63.0781H87.6875H91.4323L92.4856 216.406L134.628 72.6346L175.267 216.36L176.296 220H180.078H204.688H208.62L209.547 216.178L259.187 11.4281L260.685 5.25H254.328H227.188H223.195L222.311 9.14359L190.468 147.531L150.725 8.91716L149.711 5.25H145.906H123.125H119.345L118.315 8.8864L77.84 147.529Z'
	},
	X: {
		viewBox: '-20 -20 245 300',
		path:
			'M157.676 220H193.118L188.177 212.3L123.669 111.772L186.639 12.9366L191.536 5.25H182.422H150.641H147.87L146.401 7.59864L101.55 79.309L56.4354 7.58774L54.9649 5.25H52.2031H20.5625H11.4377L16.3483 12.9408L79.4522 111.772L14.8101 212.296L9.8558 220H19.0156H50.9375H53.6882L55.1607 217.677L101.551 144.484L147.676 220H157.676Z'
	},
	Y: {
		viewBox: '-20 -20 240 300',
		path:
			'M52.3788 7.70338L50.9809 5H47.9375H17H8.54486L12.6186 12.409L82.5938 139.675V214.75V219.75H87.5938H114.594H119.594V214.75V139.675L189.569 12.409L193.643 5H185.188H154.531H151.495L150.095 7.69381L101.105 101.934L101.105 101.934Z'
	},
	Z: {
		viewBox: '-20 -20 210 300',
		path:
			'M164.156 192.922V187.922H159.156H51.5538L158.768 32.9225L159.656 31.6389V30.0781V10.25V5.25H154.656H11.9219H6.92188V10.25V32.4688V37.4688H11.9219H112.776L5.98125 191.906L5.09375 193.19V194.75V215V220H10.0938H159.156H164.156V215V192.922Z'
	}
};

export default (props) => {
	const { height, stroke, strokeWidth } = props;

	return (
		<div className="svgBox">
			{/* {Object.keys(paths).map((el) => {
				const { viewBox, path } = paths[el];
				return (
					<div className={`svg${el}Box`}>
						<svg
							className={`svg${el}`}
							height={height}
							viewBox={viewBox}
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d={path}
								stroke={stroke}
								strokeWidth={strokeWidth}
							/>
						</svg>
					</div>
				);
			})} */}

			<div className="svgABox">
				<svg
					className="svgA"
					// width="256"
					height={height}
					viewBox={paths.A.viewBox}
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d={paths.A.path}
						stroke={stroke}
						strokeWidth={strokeWidth}
					/>
				</svg>
			</div>
			<div className="svgBBox">
				<svg
					className="svgB"
					// width="221"
					height={height}
					viewBox={paths.B.viewBox}
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d={paths.B.path}
						stroke={stroke}
						strokeWidth={strokeWidth}
					/>
				</svg>
			</div>
			<div className="svgCBox">
				<svg
					className="svgC"
					// width="169"
					height={height}
					viewBox="-20 -20 220 300"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M136.285 156.421L136.993 148.031H173.993L173.341 153.612C170.699 176.221 162.245 194.201 147.621 206.997L147.619 206.999C133.088 219.701 113.956 225.812 90.75 225.812C65.1999 225.812 44.3533 216.573 28.7088 198.02L28.7037 198.014L28.6986 198.008C13.2201 179.534 5.73438 155.084 5.73438 125.188V105.5C5.73438 85.8771 9.21568 68.3959 16.33 53.1792L16.3356 53.1672L16.3413 53.1552C23.5577 37.9316 33.8326 26.1005 47.1924 17.8605C60.5426 9.53231 75.9154 5.4375 93.1406 5.4375C115.864 5.4375 134.61 11.8303 148.848 25.0483C163.048 38.1361 171.099 56.1472 173.35 78.5628L173.902 84.0625H136.901L136.285 79.7736C134.022 64.019 129.196 53.5034 122.504 47.289L122.493 47.2788L122.482 47.2686C115.892 41.075 106.345 37.6562 93.1406 37.6562C77.317 37.6562 65.2861 43.4072 56.4648 54.8277C47.6334 66.3821 42.875 83.284 42.875 106.203V126.031C42.875 147.601 47.3843 164.147 55.8793 176.16C64.1818 187.901 75.6123 193.734 90.75 193.734C105.07 193.734 115.225 190.507 121.967 184.797C133.747 168.636 128.698 179.084 135.968 155.797Z
						"
						stroke={stroke}
						strokeWidth={strokeWidth}
					/>
				</svg>
			</div>
			<div className="svgDBox">
				<svg
					className="svgD"
					// width="169"
					height={height}
					viewBox="-20 -20 210 300"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M5.76562 215V220H10.7656H67.4375H67.463L67.4885 220C86.5673 219.805 103.497 215.661 118.122 207.405C132.876 199.13 144.201 187.24 152.043 171.859C159.966 156.504 163.844 138.774 163.844 118.812V105.734V105.722L163.844 105.71C163.747 86.202 159.812 68.7203 151.902 53.3904C144.072 38.0311 132.859 26.1013 118.306 17.7286C103.767 9.36356 87.1359 5.25 68.5625 5.25H10.7656H5.76562V10.25V215ZM110.968 170.174L110.962 170.181L110.955 170.189C100.562 181.849 85.8709 187.922 66.1719 187.922H42.7656V37.4688H69.2418C88.1336 37.6502 102.091 43.7699 111.844 55.3735L111.857 55.3885L111.87 55.4033C121.817 67.0515 127.125 83.7899 127.125 106.297V118.25C127.125 141.387 121.503 158.449 110.968 170.174Z"
						stroke={stroke}
						strokeWidth={strokeWidth}
					/>
				</svg>
			</div>
			<div className="svgEBox">
				<svg
					className="svgE"
					// width="169"
					height={height}
					viewBox="-20 -20 190 300"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M126.5 125.359H131.5V120.359V98.2812V93.2812H126.5H42.7656V37.4688H139.438H144.438V32.4688V10.25V5.25H139.438H10.7656H5.76562V10.25V215V220H10.7656H140.844H145.844V215V192.922V187.922H140.844H42.7656V125.359H126.5Z"
						stroke={stroke}
						strokeWidth={strokeWidth}
					/>
				</svg>
			</div>
			<div className="svgFBox">
				<svg
					className="svgF"
					// width="169"
					height={height}
					viewBox="-20 -20 190 300"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M123.688 129.578H128.688V124.578V102.5V97.5H123.688H42.7656V37.4688H137.609H142.609V32.4688V10.25V5.25H137.609H10.7656H5.76562V10.25V215V220H10.7656H37.7656H42.7656V215V129.578H123.688Z"
						stroke={stroke}
						strokeWidth={strokeWidth}
					/>
				</svg>
			</div>
			<div className="svgGBox">
				<svg
					className="svgG"
					// width="169"
					height={height}
					viewBox="-20 -20 220 300"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M172.037 194.003L172.938 192.713V191.141V116.047V111.047H167.938H93.6875H88.6875V116.047V137.984V142.984H93.6875H136.078V181.926C131.99 185.859 126.939 188.751 120.814 190.565C113.789 192.647 105.427 193.734 95.6562 193.734C79.2113 193.734 66.4999 187.634 56.9982 175.421C47.3745 162.957 42.2969 145.87 42.2969 123.641V106.916C42.3898 83.3555 46.9894 66.1974 55.389 54.7413C63.6772 43.4706 75.7991 37.6562 92.5625 37.6562C105.328 37.6562 114.904 40.8256 121.831 46.6447C128.765 52.4707 133.637 61.4507 136.023 74.2152L136.785 78.2969H140.938H167.938H173.714L172.886 72.5801C169.84 51.5513 161.393 34.871 147.243 23.0582C133.1 11.1579 114.662 5.4375 92.4219 5.4375C65.1692 5.4375 43.4165 14.371 27.8637 32.6506L27.8585 32.6567L27.8533 32.6628C12.4966 50.8299 5.15625 76.0397 5.15625 107.609V125.469V125.493L5.15649 125.518C5.34996 145.155 9.0783 162.644 16.4891 177.861L16.4949 177.873L16.5007 177.885C24.0179 193.117 34.6785 205.012 48.4784 213.412L48.4897 213.419L48.5011 213.425C62.297 221.723 78.0186 225.812 95.5156 225.812C112.497 225.812 127.58 223.305 140.661 218.152L140.67 218.148L140.679 218.145C153.954 212.855 164.481 204.826 172.037 194.003Z"
						stroke={stroke}
						strokeWidth={strokeWidth}
					/>
				</svg>
			</div>
			<div className="svgHBox">
				<svg
					className="svgH"
					// width="169"
					height={height}
					viewBox="-20 -20 220 300"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M168.125 220H173.125V215V10.25V5.25H168.125H140.984H135.984V10.25V93.2812H42.7656V10.25V5.25H37.7656H10.7656H5.76562V10.25V215V220H10.7656H37.7656H42.7656V215V125.359H135.984V215V220H140.984H168.125Z"
						stroke={stroke}
						strokeWidth={strokeWidth}
					/>
				</svg>
			</div>
			<div className="svgIBox">
				<svg
					className="svgI"
					// width="169"
					height={height}
					viewBox="-20 -20 90 300"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M37.7344 220H42.7344V215V10.25V5.25H37.7344H10.7344H5.73438V10.25V215V220H10.7344H37.7344Z"
						stroke={stroke}
						strokeWidth={strokeWidth}
					/>
				</svg>
			</div>
			<div className="svgJBox">
				<svg
					className="svgJ"
					// width="169"
					height={height}
					viewBox="-20 -20 190 300"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M112.547 5.25H107.547V10.25V155.637C107.457 167.365 104.224 175.814 98.4408 181.676L98.4289 181.688L98.417 181.7C92.6467 187.628 85.0088 190.734 75 190.734C63.7117 190.734 55.8443 187.717 50.5892 182.393C45.3635 177.006 42.4531 169.259 42.4531 158.469V153.469H37.4531H10.4531H5.45312V158.469C5.45312 178.29 11.4924 194.332 24.0887 205.888C36.6189 217.382 53.8164 222.812 75 222.812C95.576 222.812 112.557 216.976 125.395 204.86C138.42 192.657 144.688 175.892 144.688 155.234V10.25V5.25H139.688H112.547Z"
						stroke={stroke}
						strokeWidth={strokeWidth}
					/>
				</svg>
			</div>
			<div className="svgKBox">
				<svg
					className="svgK"
					// width="169"
					height={height}
					viewBox="-20 -20 225 300"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M42.7656 58.4552V10.25V5.25H37.7656H10.7656H5.76562V10.25V215V220H10.7656H37.7656H42.7656V215V147.827L62.3559 127.467L131.383 218.031L132.884 220H135.359H167.703H177.784L171.684 211.974L87.2693 100.924L165.108 13.5765L172.528 5.25H161.375H128.75H126.521L125.031 6.90803L42.7656 98.4552Z"
						stroke={stroke}
						strokeWidth={strokeWidth}
					/>
				</svg>
			</div>
			<div className="svgLBox">
				<svg
					className="svgL"
					// width="169"
					height={height}
					viewBox="-20 -20 185 300"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M139.938 192.922V187.922H134.938H42.9062V10.25V5.25H37.9062H10.7656H5.76562V10.25V215V220H10.7656H134.938H139.938V215V192.922Z"
						stroke={stroke}
						strokeWidth={strokeWidth}
					/>
				</svg>
			</div>
			<div className="svgMBox">
				<svg
					className="svgM"
					// width="169"
					height={height}
					viewBox="-20 -20 265 300"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M50.2819 8.39035L49.0237 5.25H5.76562V220H42.7656V77.3966L98.8043 220H126.212L127.477 216.879L182.247 76.8547L182.531 135.192V220H219.531V5.25H176.133L174.874 8.39035L112.578 163.869L50.2819 8.39035Z"
						stroke={stroke}
						strokeWidth={strokeWidth}
					/>
				</svg>
			</div>
			<div className="svgNBox">
				<svg
					className="svgN"
					// width="169"
					height={height}
					viewBox="-20 -20 220 300"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M168.125 220H173.125V215V10.25V5.25H168.125H141.266H136.266V10.25V151.915L42.0943 7.51866L40.6147 5.25H37.9062H10.7656H5.76562V10.25V215V220H10.7656H37.9062H42.9062V215V74.0142L136.798 217.735L138.278 220H140.984H168.125Z"
						stroke={stroke}
						strokeWidth={strokeWidth}
					/>
				</svg>
			</div>
			<div className="svgOBox">
				<svg
					className="svgO"
					// width="169"
					height={height}
					viewBox="-20 -20 225 300"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M169.695 176.891L169.7 176.88C176.797 161.109 180.266 142.852 180.266 122.234V109.297C180.266 88.7736 176.797 70.5679 169.705 54.8025C162.602 38.9195 152.334 26.6264 138.846 18.1658C125.492 9.63619 110.105 5.4375 92.8594 5.4375C75.8587 5.4375 60.5637 9.7012 47.1314 18.3208C33.754 26.8714 23.4986 39.1963 16.3056 55.0602C9.11773 70.913 5.59375 89.0292 5.59375 109.297V124.062V124.087L5.59399 124.111C5.7871 144.002 9.41135 161.742 16.6068 177.217L16.6149 177.235L16.6231 177.252C23.9236 192.642 34.2247 204.692 47.5574 213.213L47.5687 213.22L47.58 213.227C60.9219 221.654 76.1621 225.812 93.1406 225.812C110.469 225.812 125.863 221.666 139.137 213.218C152.425 204.763 162.593 192.576 169.695 176.891ZM129.778 56.1829L129.783 56.1898L129.788 56.1968C138.631 67.9302 143.406 85.3049 143.406 109.016V124.173C143.128 147.304 138.321 164.328 129.645 175.9C121.131 187.164 109.186 192.891 93.1406 192.891C77.3144 192.891 65.1979 186.885 56.2474 174.82C47.2434 162.462 42.4531 145.117 42.4531 122.234V107.218C42.7307 84.8004 47.608 67.9877 56.4916 56.1987C65.3418 44.4841 77.2837 38.6406 92.8594 38.6406C108.956 38.6406 121.053 44.5224 129.778 56.1829Z"
						stroke={stroke}
						strokeWidth={strokeWidth}
					/>
				</svg>
			</div>
			<div className="svgPBox">
				<svg
					className="svgP"
					// width="169"
					height={height}
					viewBox="-20 -20 205 300"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M37.7656 220H42.7656V215V139.844H86C109.862 139.844 128.967 134.34 142.565 122.597L142.567 122.595C156.36 110.669 163 93.8282 163 72.8281C163 52.7257 156.136 36.1757 142.219 23.6891C128.387 11.1936 109.524 5.25 86.2812 5.25H10.7656H5.76562V10.25V215V220H10.7656H37.7656ZM86.2812 107.766H42.7656V37.4688H87.7748C100.25 37.7396 109.468 41.2468 116.023 47.4822C122.567 53.7076 126 62.0687 126 73.1094C126 84.8995 122.516 93.227 116.157 98.895C109.695 104.561 99.9911 107.766 86.2812 107.766Z"
						stroke={stroke}
						strokeWidth={strokeWidth}
					/>
				</svg>
			</div>
			<div className="svgQBox">
				<svg
					className="svgQ"
					// width="169"
					height={height}
					viewBox="-20 -20 235 300"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M170.294 175.439L170.299 175.428C176.92 160.308 180.141 142.531 180.141 122.234V109.156C180.141 88.6318 176.672 70.466 169.573 54.7865C162.467 38.9979 152.202 26.7191 138.732 18.1729C125.371 9.63559 109.931 5.4375 92.5938 5.4375C75.593 5.4375 60.298 9.7012 46.8658 18.3208C33.4884 26.8714 23.233 39.1963 16.04 55.0602C8.85211 70.913 5.32812 89.0292 5.32812 109.297V124.062V124.087L5.32836 124.111C5.52148 144.002 9.14573 161.742 16.3411 177.217L16.3492 177.235L16.3575 177.252C23.6579 192.642 33.959 204.692 47.2918 213.213L47.3031 213.22L47.3144 213.227C60.6563 221.654 75.8965 225.812 92.875 225.812C99.8684 225.812 106.592 225.114 113.034 223.702L154.311 256.508L157.666 259.175L160.814 256.267L179.236 239.251L183.549 235.268L178.93 231.644L147.402 206.907C157.054 198.723 164.672 188.193 170.294 175.439ZM129.615 56.2724L129.627 56.2887L129.639 56.305C138.414 68.1473 143.141 85.498 143.141 109.016V124.173C142.862 147.304 138.056 164.328 129.38 175.9C120.866 187.164 108.921 192.891 92.875 192.891C76.9569 192.891 64.8545 186.842 56 174.704C47.0748 162.341 42.3281 145.03 42.3281 122.234V107.218C42.6057 84.8004 47.483 67.9877 56.3666 56.1987C65.2228 44.4762 77.1222 38.6406 92.5938 38.6406C108.988 38.6406 121.095 44.5779 129.615 56.2724Z"
						stroke={stroke}
						strokeWidth={strokeWidth}
					/>
				</svg>
			</div>
			<div className="svgRBox">
				<svg
					className="svgR"
					// width="169"
					height={height}
					viewBox="-20 -20 215 300"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M163.64 210.891L118.238 128.849C128.851 123.921 137.457 117.026 143.902 108.114C151.516 97.7159 155.266 85.554 155.266 71.8438C155.266 50.6815 148.639 33.8468 134.79 22.1811C121.197 10.6516 102.158 5.25 78.4062 5.25H10.625H5.625V10.25V215V220H10.625H37.7656H42.7656V215V137.172H82.8677L125.891 217.364L127.305 220H130.297H159.266H164.266V215V213.312V212.021L163.64 210.891ZM107.889 95.9164L107.878 95.926L107.867 95.9357C101.136 101.866 91.7867 105.094 79.25 105.094H42.7656V37.4688H79.0928C92.6119 37.5602 102.116 40.8046 108.39 46.4508L108.401 46.4612L108.413 46.4714C114.685 52.0474 118.125 60.2375 118.125 71.8438C118.125 82.1856 114.65 90.0305 107.889 95.9164Z"
						stroke={stroke}
						strokeWidth={strokeWidth}
					/>
				</svg>
			</div>
			<div className="svgSBox">
				<svg
					className="svgS"
					// width="169"
					height={height}
					viewBox="-20 -20 210 300"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d={`M29.0834 105.945L29.0665 105.93C17.5541 95.2395 11.7188 81.9147 11.7188 66.2656C11.7188 48.5916 18.8526 33.8761 32.8182 22.4583M29.0834 105.945L29.1005 105.961M29.0834 105.945L29.1005 105.961M29.1005 105.961C40.5233 116.373 58.254 124.796 81.7071 131.538C100.103 136.861 112.037 142.087 118.252 146.977L118.269 146.989L118.285 147.002C123.923 151.362 126.891 157.54 126.891 166.25C126.891 174.814 123.75 181.232 117.461 186.045C111.075 190.933 101.4 193.734 87.7344 193.734C73.2268 193.734 62.1858 190.36 54.1181 184.113C46.3215 177.915 42.3906 169.611 42.3906 158.656V153.656H37.3906H10.25H5.25V158.656C5.25 171.544 8.82201 183.195 15.9976 193.445L16.0072 193.459L16.0168 193.473C23.2695 203.688 33.4505 211.62 46.3222 217.363L46.3369 217.37L46.3516 217.376C59.2076 223.013 73.0206 225.812 87.7344 225.812C110.132 225.812 128.612 220.67 142.671 209.872L142.68 209.865M143.609 77.4531H131.469H126.469V72.4531C126.469 61.2331 122.953 52.9903 116.326 47.0734L116.314 47.0625L116.302 47.0514C109.627 41.0127 99.8726 37.6562 86.3281 37.6562C73.7026 37.6562 64.5313 40.4602 58.2028 45.4438L58.1963 45.4489C52.1361 50.205 49 56.788 49 65.8438C49 72.5352 51.7201 78.2434 57.7049 83.2015C64.0234 88.261 75.2571 93.2856 92.043 98.0154M143.609 77.4531L163.609 77.4531C163.609 60.164 160.294 48.7838 153.695 38.4223C147.159 28.0105 137.896 19.9155 126.088 14.1102C114.335 8.28548 101.043 5.4375 86.3281 5.4375C64.8277 5.4375 46.844 10.9748 32.8197 22.4571M142.68 209.865L142.689 209.858M142.68 209.865L142.689 209.858M142.689 209.858C156.867 198.864 164.031 184.083 164.031 165.969C164.031 154.798 161.509 144.827 156.281 136.245C151.169 127.698 143.373 120.462 133.197 114.431M142.689 209.858M133.197 114.431C123.091 108.293 109.304 102.853 92.0435 98.0155L133.197 114.431Z
                        `}
						stroke={stroke}
						strokeWidth={strokeWidth}
					/>
				</svg>
			</div>
			<div className="svgTBox">
				<svg
					className="svgT"
					// width="169"
					height={height}
					viewBox="-20 -20 220 300"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M169.234 37.4688H174.234V32.4688V10.25V5.25H169.234H10.8906H5.89062V10.25V32.4688V37.4688H10.8906H71.5625V215V220H76.5625H103.422H108.422V215V37.4688H169.234Z"
						stroke={stroke}
						strokeWidth={strokeWidth}
					/>
				</svg>
			</div>
			<div className="svgUBox">
				<svg
					className="svgU"
					// width="169"
					height={height}
					viewBox="-20 -20 210 300"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M163.906 10.25V5.25H158.906H131.766H126.766V10.25V149.047C126.766 162.928 122.968 172.992 115.996 179.964L115.985 179.975L115.975 179.985C109.132 186.907 98.9206 190.734 84.5156 190.734C70.3292 190.734 60.1411 186.923 53.186 179.974C46.1991 172.901 42.4062 162.777 42.4062 148.906V10.25V5.25H37.4062H10.6875H5.6875V10.25V149.75V149.772L5.6877 149.794C5.88514 172.105 13.0466 190.174 27.5754 203.373C42.0194 216.494 61.1846 222.812 84.5156 222.812H84.6136L84.7116 222.809L91.8834 222.527L91.9669 222.524L92.0502 222.518C113.628 220.949 131.176 213.681 144.195 200.36C157.312 187.035 163.807 169.935 163.906 149.493L163.906 149.481V149.469V10.25Z"
						stroke={stroke}
						strokeWidth={strokeWidth}
					/>
				</svg>
			</div>
			<div className="svgVBox">
				<svg
					className="svgV"
					// width="169"
					height={height}
					viewBox="-20 -20 250 300"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M156.322 8.6135L102.558 163.831L49.0552 8.62053L47.8933 5.25H44.3281H14.9375H7.75493L10.2485 11.9858L86.0454 216.736L87.2537 220H90.7344H114.641H118.119L119.329 216.739L195.266 11.9887L197.765 5.25H190.578H161.047H157.487L156.322 8.6135Z"
						stroke={stroke}
						strokeWidth={strokeWidth}
					/>
				</svg>
			</div>
			<div className="svgWBox">
				<svg
					className="svgW"
					// width="169"
					height={height}
					viewBox="-20 -20 305 300"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M45.4502 9.12606L44.556 5.25H40.5781H13.5781H7.22529L8.71813 11.4249L58.2181 216.175L59.1429 220H63.0781H87.6875H91.4323L92.4856 216.406L134.628 72.6346L175.267 216.36L176.296 220H180.078H204.688H208.62L209.547 216.178L259.187 11.4281L260.685 5.25H254.328H227.188H223.195L222.311 9.14359L190.468 147.531L150.725 8.91716L149.711 5.25H145.906H123.125H119.345L118.315 8.8864L77.84 147.529Z"
						stroke={stroke}
						strokeWidth={strokeWidth}
					/>
				</svg>
			</div>
			<div className="svgXBox">
				<svg
					className="svgX"
					// width="169"
					height={height}
					viewBox="-20 -20 245 300"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M157.676 220H193.118L188.177 212.3L123.669 111.772L186.639 12.9366L191.536 5.25H182.422H150.641H147.87L146.401 7.59864L101.55 79.309L56.4354 7.58774L54.9649 5.25H52.2031H20.5625H11.4377L16.3483 12.9408L79.4522 111.772L14.8101 212.296L9.8558 220H19.0156H50.9375H53.6882L55.1607 217.677L101.551 144.484L147.676 220H157.676Z"
						stroke={stroke}
						strokeWidth={strokeWidth}
					/>
				</svg>
			</div>
			<div className="svgYBox">
				<svg
					className="svgY"
					// width="169"
					height={height}
					viewBox="-20 -20 240 300"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M52.3788 7.70338L50.9809 5H47.9375H17H8.54486L12.6186 12.409L82.5938 139.675V214.75V219.75H87.5938H114.594H119.594V214.75V139.675L189.569 12.409L193.643 5H185.188H154.531H151.495L150.095 7.69381L101.105 101.934L101.105 101.934Z"
						stroke={stroke}
						strokeWidth={strokeWidth}
					/>
				</svg>
			</div>
			<div className="svgZBox">
				<svg
					className="svgZ"
					// width="169"
					height={height}
					viewBox="-20 -20 210 300"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M164.156 192.922V187.922H159.156H51.5538L158.768 32.9225L159.656 31.6389V30.0781V10.25V5.25H154.656H11.9219H6.92188V10.25V32.4688V37.4688H11.9219H112.776L5.98125 191.906L5.09375 193.19V194.75V215V220H10.0938H159.156H164.156V215V192.922Z"
						stroke={stroke}
						strokeWidth={strokeWidth}
					/>
				</svg>
			</div>
		</div>
	);
};
