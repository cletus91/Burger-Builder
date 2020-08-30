import React from 'react';
import classes from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import ToggleButton from '../SideDrawer/ToggleButton/ToggleButton';

const Toolbar = (props) => (
	<header className={classes.Toolbar}>
		<ToggleButton clicked={props.clicked} />
		<Logo height='80%' />
		<nav className={classes.DesktopOnly}>
			<NavigationItems />
		</nav>
	</header>
);

export default Toolbar;
