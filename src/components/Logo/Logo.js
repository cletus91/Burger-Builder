import React from 'react';
import classes from './Logo.module.css';

const Logo = (props) => (
	<div className={classes.Logo} style={{ height: props.height }}>
		<i className='fas fa-hamburger fa-2x'></i>
	</div>
);

export default Logo;
