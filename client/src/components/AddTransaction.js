import React, { useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalState';

const AddTransaction = () => {
	const [inputText, setInputText] = useState('');
	const [inputAmount, setInputAmount] = useState(0);
	const { addTransaction } = useContext(GlobalContext);

	const addTransactionHandler = (event) => {
		event.preventDefault();

		const newTransaction = {
			id: Math.floor(Math.random() * 10000000000),
			text: inputText,
			amount: +inputAmount,
		};

		addTransaction(newTransaction);

		// reset
		setInputText('');
		setInputAmount(0);
	};

	const textChangeHandler = (event) => {
		setInputText(event.target.value);
	};
	const amountChangeHandler = (event) => {
		setInputAmount(event.target.value);
	};

	return (
		<>
			<h3>Add new transaction</h3>
			<form onSubmit={addTransactionHandler}>
				<div className='form-control'>
					<label htmlFor='text'>Text</label>
					<input
						type='text'
						placeholder='Enter text...'
						onChange={textChangeHandler}
						value={inputText}
					/>
				</div>
				<div className='form-control'>
					<label htmlFor='amount'>
						Amount <br /> (negative - expense, positive - income)
					</label>
					<input
						type='number'
						onChange={amountChangeHandler}
						value={inputAmount}
					/>
				</div>
				<button className='btn'>Add transaction</button>
			</form>
		</>
	);
};

export default AddTransaction;
