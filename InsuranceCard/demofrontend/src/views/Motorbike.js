import React from 'react';
import PropTypes from 'prop-types';
import { BsFillPencilFill } from 'react-icons/bs';
import { BsFillTrashFill } from 'react-icons/bs';
Motorbike.propTypes = {
  motorbike: PropTypes.object,
};

function Motorbike({motorbike}) {
  return (
    <tr>
      <td>{motorbike.id}</td>
      <td>{motorbike.licensePlates}</td>
      <td>{motorbike.customerName}</td>
      {/* <td><img src="{motorbike.picture}" /></td> */}
      <td><img className="img-motorbike" src="https://i.kym-cdn.com/entries/icons/original/000/037/349/Screenshot_14.jpg" /></td>
      <td>
        <div className="edit-delete_motorbike">
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

export default Motorbike;