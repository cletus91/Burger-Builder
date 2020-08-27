import React from 'react';
import classes from './Backdrop.module.css';

const Backdrop = (props) =>
	props.show ? (
		<div className={classes.BackDrop} onClick={props.clicked}>
			{props.children}
		</div>
	) : null;

export default Backdrop;
