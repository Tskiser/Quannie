import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/listStaff.scss';
import Nav from '../components/Nav';
import Staff from './Staff';
ListStaff.propTypes = {
    data: PropTypes.array,
};

ListStaff.defaultProps = {
    data: [],
}

function ListStaff({ data }) {

    const [searchStr, setSearchStr] = useState('');
    const [searchList, setSearchList] = useState(data);
    const listData = data;
    const handleSearch = () => {
        setSearchList(listData.filter((staff) => staff.name.toLowerCase().includes(searchStr.toLowerCase())))
    }
    return (
        <React.Fragment>
            <Nav/>
            <input value={searchStr} onChange={(e) => setSearchStr(e.target.value)} /> <button onClick={handleSearch}>Search</button>
            <table class="content-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>GENDER</th>
                        <th>EMAIL</th>
                        <th>PHONE</th>
                        <th>ADDRESS</th>
                    </tr>
                </thead>
                <tbody>

                    <tr class="active-row">
                        <td>2</td>
                        <td>Quang</td>
                        <td>Male</td>
                        <td>quangabc@gmail.com</td>
                        <td>031267823</td>
                        <td>lien quan ha noi</td>
                    </tr>
                    {
                        searchList.map((staff) => (
                            <Staff staff={staff} />
                        ))
                    }
                </tbody>
            </table>
        </React.Fragment>
    );
}

export default ListStaff;