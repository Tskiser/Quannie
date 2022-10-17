import React from 'react';
import PropTypes from 'prop-types';

contract.propTypes = {
  contract: PropTypes.object,
};

function contract({ contract }) {
  return (
    <tr>
      <td>{contract.owner}</td>
      <td>{contract.code}</td>
      <td>{contract.type}</td>
      <td>{contract.from}</td>
      <td>{contract.through}</td>
    </tr>
  );
}

export default contract;
