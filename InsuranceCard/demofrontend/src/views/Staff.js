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
      <td>
        <div className="edit-delete_staff">
          <p className="hover-pointer">
            <BsFillPencilFill />
          </p>
          <p className="hover-pointer">
            <BsFillTrashFill />
          </p>
        </div>
      </td>
    </tr>
  );
}

export default Staff;
