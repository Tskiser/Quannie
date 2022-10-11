import React from 'react';
import PropTypes from 'prop-types';

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
    </tr>
  );
}

export default Staff;
