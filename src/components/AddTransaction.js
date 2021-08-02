import React, { useState } from 'react';

const AddTransaction = () => {
	const [inputText, setInputText] = useState('');
	const [inputAmount, setInputAmount] = useState(0);

	const textChangeHandler = (event) => {
		setInputText(event.target.value);
	};
	const amountChangeHandler = (event) => {
		setInputAmount(event.target.value);
	};

	return (
		<>
			<h3>Add new transaction</h3>
			<form>
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
