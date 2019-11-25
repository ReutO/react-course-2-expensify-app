import React from 'react';
import { Link } from 'react-router-dom';


const ExpenseListItem = ({ id, description, note, amount, createdAt, number }) => {
    const currentNumber = number +1;
    return (
    <div>
        <span>{currentNumber}.</span>&nbsp;
        <Link to={`/edit/${id}`}>{description}</Link>&nbsp;|&nbsp;
        <span>{note}</span>&nbsp;|&nbsp;
        <span>{amount}</span>&nbsp;|&nbsp;
        <span>{createdAt}</span>&nbsp;|&nbsp;
    </div>
)};

export default ExpenseListItem;