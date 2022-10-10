import React from 'react';
import PropTypes from 'prop-types';
import '../styles/listStaff.scss';
ListStaff.propTypes = {
    
};

function ListStaff(props) {
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
                <tr>
                    <td>1</td>
                    <td>Nam</td>
                    <td>Male</td>
                    <td>nampro2k2@gmail.com</td>
                    <td>091238762</td>
                    <td>thach that ha noi</td>
                </tr>
                <tr class="active-row">
                    <td>2</td>
                    <td>Quang</td>
                    <td>Male</td>
                    <td>quangabc@gmail.com</td>
                    <td>031267823</td>
                    <td>lien quan ha noi</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>DucAnh</td>
                    <td>Female</td>
                    <td>ducanh2k3@gmail.com</td>
                    <td>312879312</td>
                    <td>kim quan ha noi</td>
                </tr>
            </tbody>
        </table>
    </div>
    );
}

export default ListStaff;