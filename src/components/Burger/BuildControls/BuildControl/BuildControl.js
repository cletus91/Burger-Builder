import React from 'react';
import classes from './BuildControl.module.css';

const BuildControl = (props) => {
	return (
		<div className={classes.BuildControl}>
			<div className={classes.Label}>{props.label}</div>
			{props.disable ? (
				<button disabled className={classes.Less}>
					Less
				</button>
			) : (
				<button className={classes.Less} onClick={props.removed}>
					Less
				</button>
			)}
			<p
				style={{
					padding: '20px',
					float: 'right',
				}}>
				${props.price}
			</p>
			{props.max ? (
				<button disabled className={classes.More} onClick={props.added}>
					More
				</button>
			) : (
				<button className={classes.More} onClick={props.added}>
					More
				</button>
			)}
		</div>
	);
};

export default BuildControl;
