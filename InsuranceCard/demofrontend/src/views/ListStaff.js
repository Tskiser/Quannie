import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/listStaff.scss';
import Nav from '../components/Nav';
import Staff from './Staff';
ListStaff.propTypes = {
  data: PropTypes.array,
};

ListStaff.defaultProps = {
  data: [
    {
      id: 1,
      name: 'NamBD',
      gender: 'DeoBiet',
      email: 'namngu213@gmail.com',
      phone: '123456789',
      address: 'cho hoa lac',
    },
  ],
};

function ListStaff({ data }) {
  const [searchStr, setSearchStr] = useState('');
  const [searchList, setSearchList] = useState(data);
  const listData = data;
  const handleSearch = () => {
    setSearchList(
      listData.filter((staff) =>
        staff.name.toLowerCase().includes(searchStr.toLowerCase())
      )
    );
  };

  const [isShow, setIsShow] = useState(false);
//   const modal = document.querySelector('.modal-edit');
//   modal.addEventListener('click', handleCloseModal);
//   function handleCloseModal() {
//     modal.classList.remove('open');
//   }
  
  return (
    <React.Fragment>
      <Nav />
      <div className="container_liststaff">
        <div className="container-search_liststaff">
          <div className="main_search">
            <input
              className="input_liststaff"
              value={searchStr}
              onChange={(e) => setSearchStr(e.target.value)}
            />{' '}
            <button class="button-search_liststaff" onClick={handleSearch}>
              Search
            </button>
          </div>
        </div>
        <table class="content-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>GENDER</th>
              <th>EMAIL</th>
              <th>PHONE</th>
              <th>ADDRESS</th>
              <th> </th>
            </tr>
          </thead>
          <tbody>
            {searchList.map((staff) => (
              <Staff staff={staff} setIsShow={setIsShow} />
            ))}
          </tbody>
        </table>
        <div className="modal-edit">
          <div className="container_modal"></div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ListStaff;
