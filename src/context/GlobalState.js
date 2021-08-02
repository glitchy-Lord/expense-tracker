import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// initial state
const initialState = {
	transactions: [
		// { id: 1, text: 'Flower', amount: -10 },
		// { id: 2, text: 'Salary', amount: 1000 },
		// { id: 3, text: 'Book', amount: -10 },
		// { id: 4, text: 'Camera', amount: -100 },
		// { id: 5, text: 'Furniture', amount: 150 },
	],
};

// create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = (props) => {
	const [state, dispatch] = useReducer(AppReducer, initialState);

	const deleteTransaction = (id) => {
		dispatch({
			type: 'DELETE_TRANSACTION',
			payload: id,
		});
	};

	const addTransaction = (transaction) => {
		dispatch({ type: 'ADD_TRANSACTION', payload: transaction });
	};

	return (
		<GlobalContext.Provider
			value={{
				transactions: state.transactions,
				deleteTransaction,
				addTransaction,
			}}>
			{props.children}
		</GlobalContext.Provider>
	);
};
