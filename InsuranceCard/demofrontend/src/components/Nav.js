import React from 'react'
import * as FAicons from "react-icons/fa";
import '../styles/Nav.scss'
import '../styles/Sidebar.scss'
const Nav = () => {

    const handleSidebar = () => {
        alert("alo alo")
    }

    return (
        <React.Fragment>
            <div class="topnav">
                <button className='sidebar-toggler' onClick={handleSidebar}><FAicons.FaBars/></button>
                <button className='nav-link'><a href="#home">Home</a></button>
                <button className='nav-link'><a href="#news">News</a></button>
                <button className='nav-link'><a href="#contact">Contact</a></button>
                <button className='nav-link'><a href="#about">About</a></button>
            </div>
            <ul className='sideNav'>
                <li className='navItem'><a href='#'>Item 1</a></li>
                <li className='navItem'><a href='#'>Item 1</a></li>
                <li className='navItem'><a href='#'>Item 1</a></li>
                <li className='navItem'><a href='#'>Item 1</a></li>
                <li className='navItem'><a href='#'>Item 1</a></li>
            </ul>
        </React.Fragment>
    )
}
export default Nav