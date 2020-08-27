import React, { useState } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
	salad: 1.5,
	bacon: 2,
	cheese: 1,
	meat: 3,
};

const BurgerBuilder = () => {
	const [state, setState] = useState({
		ingredients: {
			salad: 0,
			bacon: 0,
			cheese: 0,
			meat: 0,
		},
		totalPrice: 0,
		purchaseable: false,
		purchasing: false,
	});

	const updatePurchaseState = (ingredients) => {
		const sum = Object.keys(ingredients)
			.map((igKey) => {
				return ingredients[igKey];
			})
			.reduce((sum, el) => {
				return sum + el;
			}, 0);

		setState((ingredients) => ({ ...ingredients, purchaseable: sum > 0 }));
	};

	const addIngredientHandler = (type) => {
		const oldCount = state.ingredients[type];
		const updatedCount = oldCount + 1;
		const updatedIngredients = {
			...state.ingredients,
		};
		updatedIngredients[type] = updatedCount;
		const priceAddition = INGREDIENT_PRICES[type];
		const oldPrice = state.totalPrice;
		const newPrice = oldPrice + priceAddition;

		setState({
			totalPrice: newPrice,
			ingredients: updatedIngredients,
		});
		updatePurchaseState(updatedIngredients);
	};

	const removeIngredientHandler = (type) => {
		const oldCount = state.ingredients[type];
		const updatedCount = oldCount - 1;
		const updatedIngredients = {
			...state.ingredients,
		};
		updatedIngredients[type] = updatedCount;
		const priceDeduction = INGREDIENT_PRICES[type];
		const oldPrice = state.totalPrice;
		const newPrice = oldPrice - priceDeduction;

		setState({
			totalPrice: newPrice,
			ingredients: updatedIngredients,
		});
		updatePurchaseState(updatedIngredients);
	};

	const disabledInfo = {
		...state.ingredients,
	};
	for (let key in disabledInfo) {
		disabledInfo[key] = disabledInfo[key] <= 0;
	}

	const maxInfo = {
		...state.ingredients,
	};
	for (let key in maxInfo) {
		maxInfo[key] = maxInfo[key] >= 5;
	}

	const purchaseHandler = () => {
		setState(() => ({ ...state, purchasing: true }));
	};

	const closeHandler = () => {
		setState(() => ({ ...state, purchasing: false }));
	};

	return (
		<Aux>
			<Modal show={state.purchasing} modalClosed={closeHandler}>
				<OrderSummary
					ingredients={state.ingredients}
					totalPrice={state.totalPrice}
					closed={closeHandler}
					continue={closeHandler}
				/>
			</Modal>
			<Burger ingredients={state.ingredients} />
			<BuildControls
				ingredientAdded={addIngredientHandler}
				ingredientRemoved={removeIngredientHandler}
				disable={disabledInfo}
				maximum={maxInfo}
				price={INGREDIENT_PRICES}
				totalPrice={state.totalPrice}
				purchaseable={state.purchaseable}
				order={purchaseHandler}
			/>
		</Aux>
	);
};

export default BurgerBuilder;
