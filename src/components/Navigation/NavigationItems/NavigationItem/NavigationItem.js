import React from 'react';
import classes from './NavigationItem.module.css';
import Aux from '../../../../hoc/Aux';
import { NavLink } from 'react-router-dom';

const NavigationItem = (props) => (
	<Aux>
		<li className={classes.NavigationItem}>
			<NavLink to={props.link} exact activeClassName={classes.active}>
				{props.children}
			</NavLink>
		</li>
	</Aux>
);

export default NavigationItem;
