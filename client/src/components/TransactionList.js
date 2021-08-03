import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalState';
import Transaction from './Transaction';

const TransactionList = () => {
	const { transactions, getTransactions } = useContext(GlobalContext);

	useEffect(() => {
		getTransactions();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	let content = <li>No transactions added yet.</li>;

	if (transactions.length > 0) {
		content = transactions.map((transaction) => (
			<Transaction key={transaction._id} transaction={transaction} />
		));
	}

	return (
		<>
			<h3>History</h3>
			<ul className='list'>{content}</ul>
		</>
	);
};

export default TransactionList;
