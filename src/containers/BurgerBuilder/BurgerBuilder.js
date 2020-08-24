import React, { useState } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
	salad: 1.5,
	bacon: 2,
	cheese: 1,
	meat: 3,
};

const BurgerBuilder = () => {
	const [state, setState] = useState({
		ingredients: {
			salad: 1,
			bacon: 1,
			cheese: 2,
			meat: 2,
		},
		totalPrice: 4,
	});

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

		setState({ totalPrice: newPrice, ingredients: updatedIngredients });
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

		setState({ totalPrice: newPrice, ingredients: updatedIngredients });
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

	return (
		<Aux>
			<Burger ingredients={state.ingredients} />
			<BuildControls
				ingredientAdded={addIngredientHandler}
				ingredientRemoved={removeIngredientHandler}
				disable={disabledInfo}
				maximum={maxInfo}
				price={INGREDIENT_PRICES}
			/>
		</Aux>
	);
};

export default BurgerBuilder;
