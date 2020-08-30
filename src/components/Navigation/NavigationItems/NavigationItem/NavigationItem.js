import React from 'react';
import classes from './NavigationItem.module.css';
import Aux from '../../../../hoc/Aux';

const NavigationItem = (props) => (
	<Aux>
		<li className={classes.NavigationItem}>
			<a className={props.active ? classes.active : null} href={props.link}>
				{props.children}
			</a>
		</li>
	</Aux>
);

export default NavigationItem;
