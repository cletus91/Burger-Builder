import React, { useState, useEffect } from 'react';
import Aux from '../Aux';
import Modal from '../../components/UI/Modal/Modal';

const withErrorHandler = (WrappedComponent, axios) => {
	return (props) => {
		const [error, setError] = useState(null);

		useEffect(() => {
			const reqInterceptor = axios.interceptors.request.use((req) => {
				setError(null);
				return req;
			});
			const resInterceptor = axios.interceptors.response.use(null, (err) => {
				setError(err);
				console.log(err);
			});
			return () => {
				axios.interceptors.request.eject(reqInterceptor);
				axios.interceptors.response.eject(resInterceptor);
			};
		});

		const errorConfirmedHandler = () => {
			setError(null);
		};

		return (
			<Aux>
				<Modal show={error} modalClosed={errorConfirmedHandler}>
					{error ? error.message : null}
				</Modal>
				<WrappedComponent {...props} />
			</Aux>
		);
	};
};

export default withErrorHandler;
