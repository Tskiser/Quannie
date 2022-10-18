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
                    <button className='nav-link'>Home</button>
                    <button className='nav-link'>News</button>
                    <button className='nav-link'>Contact</button>
                    <button className='nav-link'>About</button>
                </div>
                <div className='user-log-nav'>
                    <button className='profile-nav lower-level-profile-nav'>User
                        <ul className="dropdown">
                            <li className="dropdown-item">caigido</li>
                            <li className="dropdown-item">caigido2</li>
                            <li className="dropdown-item">caigido3</li>
                        </ul>
                    </button>
                    <button className='profile-nav'>Log (in/out)</button>
                    <div className='profile'>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Nav