import React from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.module.css';

const Layout = (props) => (
	<Aux>
		<div className={classes.content}>Toolbar, Sidedrawer, Backdrop</div>
		<main>{props.children}</main>
	</Aux>
);

export default Layout;
