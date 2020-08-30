import React from 'react';
import classes from './ToggleButton.module.css';

const ToggleButton = (props) => (
	<div onClick={props.clicked} className={classes.DrawerToggle}>
		<div></div>
		<div></div>
		<div></div>
	</div>
);

export default ToggleButton;
