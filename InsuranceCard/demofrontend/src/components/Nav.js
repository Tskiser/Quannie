import React from 'react'
import * as FAicons from "react-icons/fa";
import '../styles/topBar.scss'
import '../styles/Sidebar.scss'
const Nav = () => {

    const handleSidebar = () => {
        alert("alo alo")
    }

    return (
        <React.Fragment>
            <div className='topBar'>
                <div className="topnav">
                    <button className='sidebar-toggler' onClick={handleSidebar}><FAicons.FaBars /></button>
                    <button className='nav-link'>Home</button>
                    <button className='nav-link'>News</button>
                    <button className='nav-link'>Contact</button>
                    <button className='nav-link'>About</button>
                </div>

                <div className='profile'>
                    
                </div>
            </div>
        </React.Fragment>
    )
}
export default Nav