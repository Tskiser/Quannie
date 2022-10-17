import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/listcontract.scss';
import Nav from '../components/Nav';
import Contract from './Contracts';
Listcontract.propTypes = {
    data: PropTypes.array,
};

Listcontract.defaultProps = {
    data: [
        {
            owner: 'Tran Nam',
            code: 'A1234567',
            type: 'Bao Hiem Xe May',
            from: '11/10/2002',
            through: '11/10/2003'
        }
    ],
}

function Listcontract({ data }) {

    const [searchStr, setSearchStr] = useState('');
    const [searchList, setSearchList] = useState(data);


    //Contract List by criteria(Default = all contracts)
    const listData = data;
    const handleSearch = () => {
        setSearchList(listData.filter((contract) => contract.owner.toLowerCase().includes(searchStr.toLowerCase())))
    }


    return (
        <React.Fragment>
            <Nav />
            <div className="container-search_listcontract">
                <div className="main_search">
                    <input
                        className="input_listcontract"
                        value={searchStr}
                        onChange={(e) => setSearchStr(e.target.value)}
                    />{' '}
                    <button class="button-search_listcontract" onClick={handleSearch}>
                        Search
                    </button>
                </div>
            </div>
            <table class="content-table">
                <thead>
                    <tr>
                        <th>Contract Owner</th>
                        <th>Contract Code</th>
                        <th>Contract Name</th>
                        <th>Start Date</th>
                        <th>Expired Date</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        searchList.map((contract) => (
                            <Contract contract={contract} />
                        ))
                    }
                </tbody>
            </table>
        </React.Fragment>
    );
}

export default Listcontract;