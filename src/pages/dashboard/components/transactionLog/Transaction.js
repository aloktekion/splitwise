import React from 'react';

const DisplayTransaction = ({ transaction }) => {
  const { amount, description, Paidby, PaidFor } = transaction;

  const paidfor = PaidFor.map((_) => _).join(', ');
  return (
    <tr>
      <td>{description}</td>
      <td>{amount}</td>
      <td>{Paidby}</td>
      <td>{paidfor}</td>
    </tr>
  );
};

export default DisplayTransaction;
