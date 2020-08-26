import React from 'react';
import classes from './BuildControl.module.css';

const BuildControl = (props) => {
	return (
		<div className={classes.BuildControl}>
			<div className={classes.Label}>{props.label}</div>
			<div>${props.price}</div>
			{props.disable ? (
				<button disabled className={classes.Less}>
					<i className='fas fa-minus'></i>
				</button>
			) : (
				<button className={classes.Less} onClick={props.removed}>
					<i className='fas fa-minus'></i>
				</button>
			)}

			{props.max ? (
				<button disabled className={classes.More}>
					<i className='fas fa-plus'></i>
				</button>
			) : (
				<button className={classes.More} onClick={props.added}>
					<i className='fas fa-plus'></i>
				</button>
			)}
		</div>
	);
};

export default BuildControl;
