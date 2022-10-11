import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/listStaff.scss';
import Staff from './Staff';
ListStaff.propTypes = {
    data: PropTypes.array,
};

ListStaff.defaultProps ={
    data: [],
}
function ListStaff({data}) {
    return (
        <div>
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
                    data.map((staff)=>(
                        <Staff staff={staff}/>
                    ))
                }
            </tbody>
        </table>
    </div>
    );
}

export default ListStaff;