import React from 'react';
import PropTypes from 'prop-types';
import { BsFillPencilFill } from "react-icons/bs";
import { BsFillTrashFill } from "react-icons/bs";
Staff.propTypes = {
  staff: PropTypes.object,
};

function Staff({ staff }) {
  return (
    <tr>
      <td>{staff.id}</td>
      <td>{staff.name}</td>
      <td>{staff.gender}</td>
      <td>{staff.email}</td>
      <td>{staff.phone}</td>
      <td>{staff.address}</td>
      <td><BsFillPencilFill/><BsFillTrashFill/></td>
    </tr>
  );
}

export default Staff;
