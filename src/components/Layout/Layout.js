import React, { useState } from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

const Layout = (props) => {
	const [state, setState] = useState({
		showSideDrawer: false,
	});

	const sideDrawerHandler = () => {
		setState({ showSideDrawer: true });
	};

	const sideDrawerToggler = () => {
		setState((prevState) => ({
			showSideDrawer: !prevState.showSideDrawer,
		}));
	};
	return (
		<Aux>
			<div className={classes.content}>
				<Toolbar clicked={sideDrawerToggler} />
				<SideDrawer
					open={state.showSideDrawer}
					closed={sideDrawerHandler}
					clicked={sideDrawerToggler}
				/>
			</div>
			<main>{props.children}</main>
		</Aux>
	);
};

export default Layout;
