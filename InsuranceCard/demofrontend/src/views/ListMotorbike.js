import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/listMotorbike.scss';
import Nav from '../components/Nav';
import motorbike from './Motorbike';
import Motorbike from './Motorbike';
ListMotorbike.propTypes = {
    data: PropTypes.array,
  };
  
  ListMotorbike.defaultProps = {
    data: [
      {
        id: 1,
        licensePlates: 'NamBD',
        customerName: 'DeoBiet',
        picture: 'namngu213@gmail.com',
      },
    ],
  };
  


function ListMotorbike({data}) {
    const [searchStr, setSearchStr] = useState('');
    const [searchList, setSearchList] = useState(data);
    const listData = data;
    const handleSearch = () => {
      setSearchList(
        listData.filter((motorbike) =>
          motorbike.name.toLowerCase().includes(searchStr.toLowerCase())
        )
      );
    };
    return (
        <React.Fragment>
          <Nav/>
             <div className="container_listmotorbike">
        <div className="container-search_listmotorbike">
          <div className="main_search">
            <input
              className="input_listmotorbike"
              value={searchStr}
              onChange={(e) => setSearchStr(e.target.value)}
            />
            <button class="button-search_listmotorbike" onClick={handleSearch}>
              Search
            </button>
          </div>
        </div>
        <table class="content-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>License Plates</th>
              <th>Customer Name</th>
              <th>Picture</th>
              <th> </th>
            </tr>
          </thead>
          <tbody>
            {searchList.map((motorbike) => (
              <Motorbike motorbike={motorbike}/>
            ))}
          </tbody>
        </table>        
      </div>
        </React.Fragment>
    );
}

export default ListMotorbike;