import React, { useEffect, useState } from 'react';
import Order from '../../components/Order/Order/Order';
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

const Orders = (props) => {
	const [state, setState] = useState({
		orders: [],
		loading: true,
	});

	useEffect(() => {
		axios
			.get('/orders.json')
			.then((res) => {
				const fetchedOrders = [];
				for (let key in res.data) {
					fetchedOrders.push({ ...res.data[key], id: key });
				}
				setState({ ...state, orders: fetchedOrders, loading: false });
			})
			.catch((err) => setState({ loading: false }));
	}, []);

	return (
		<div>
			{state.orders.map((order) => (
				<Order key={order.id} ingredients={order.ingredients} price={+order.price} />
			))}
		</div>
	);
};

export default withErrorHandler(Orders, axios);
