import React from 'react';
import PropTypes from 'prop-types';
import { BsFillPencilFill } from "react-icons/bs";
import { BsFillTrashFill } from "react-icons/bs";
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
      <td>
        <div className="cancel-renew">
          <p className="hover-pointer">
            <BsFillPencilFill size={16}/>
          </p>
          <p className="hover-pointer">
            <BsFillTrashFill size={16} />
          </p>
        </div>
      </td>
    </tr>
  );
}

export default contract;
