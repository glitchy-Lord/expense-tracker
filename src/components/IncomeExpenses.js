import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const IncomeExpenses = () => {
	const { transactions } = useContext(GlobalContext);

	const amounts = transactions.map((transaction) => transaction.amount);

	const isIncome = amounts.filter((item) => item > 0);
	let income = '0.00';
	if (isIncome.length > 0) {
		income = isIncome.reduce((acc, curr) => acc + curr).toFixed(2);
	}

	const isExpense = amounts.filter((item) => item < 0);
	let expense = '0.00';
	if (isExpense.length > 0) {
		expense = isExpense.reduce((acc, curr) => acc + curr).toFixed(2);
	}

	return (
		<div className='inc-exp-container'>
			<div>
				<h4>Income</h4>
				<p className='money plus'>+${income}</p>
			</div>
			<div>
				<h4>Expense</h4>
				<p className='money minus'>-${expense}</p>
			</div>
		</div>
	);
};

export default IncomeExpenses;
