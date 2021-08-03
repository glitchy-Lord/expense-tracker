import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { numberWithCommas } from '../utils/format';

const Transaction = ({ transaction }) => {
	const { deleteTransaction } = useContext(GlobalContext);

	const deleteHandler = () => {
		deleteTransaction(transaction._id);
	};
	const sign = transaction.amount > 0 ? '+' : '-';
	return (
		<li className={transaction.amount > 0 ? 'plus' : 'minus'}>
			{transaction.text}{' '}
			<span>
				{sign}${numberWithCommas(Math.abs(transaction.amount))}
			</span>
			<button onClick={deleteHandler} className='delete-btn'>
				x
			</button>
		</li>
	);
};

export default Transaction;
