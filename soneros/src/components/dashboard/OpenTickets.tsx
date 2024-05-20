
// components/OpenTickets.js
import React from 'react';

const OpenTickets = ({ count }) => {
  return (
    <div>
      <h3>Chamados em Aberto</h3>
      <p>{count}</p>
    </div>
  );
};

export default OpenTickets;


