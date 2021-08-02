import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const Balance = () => {
	const { transactions } = useContext(GlobalContext);

	const amounts = transactions.map((transaction) => transaction.amount);
	console.log(amounts);
	let total = 0;
	if (amounts.length > 0) {
		total = amounts.reduce((acc, curr) => acc + curr).toFixed(2);
	}

	return (
		<>
			<h4>Your Balance</h4>
			<h2>${total}</h2>
		</>
	);
};

export default Balance;
