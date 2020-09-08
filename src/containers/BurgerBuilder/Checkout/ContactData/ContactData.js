import React, { useState } from 'react';
import Button from '../../../../components/UI/Button/Button';

const ContactData = (props) => {
	const [state, setState] = useState({
		name: '',
		email: '',
		address: {
			street: '',
			zip: '',
		},
	});

	return (
		<div>
			<h4>Enter your Info</h4>
			<form>
				<input type='text' name='name' placeholder='Enter your name'>
					Name
				</input>
				<input type='email' name='email' placeholder='Enter your email'>
					Email address
				</input>
				<input type='text' name='street' placeholder='Address'>
					Street Name
				</input>
				<input type='number' name='zip' placeholder='Zipcode'>
					Zip
				</input>
				<Button btnType='Success'>ORDER NOW</Button>
			</form>
		</div>
	);
};

export default ContactData;
