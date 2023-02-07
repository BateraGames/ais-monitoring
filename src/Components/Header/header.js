import React, {useEffect, useState} from 'react'
import bateraIcon from '../../Assets/logo batera kapal pintar-BW.png'

function Header({currentTab, setCurrentTab}){
    return (
        <nav className="navbar bg-primary">
            <div className="container-fluid flex-row">
                <a className="navbar-brand">
                    <img src={bateraIcon} alt="Logo" width="58.4571429" height="33.3428571" className="d-inline-block align-text-top" />
                </a>
                <ul className="nav">
                    <li className="nav-item">
                        <button className={currentTab === 0 ? "nav-link text-dark bg-light" : "nav-link text-light bg-primary"} style={{borderRadius: 20, border: '1px solid transparent'}} onClick={() => setCurrentTab(0)}>Live Map</button>
                    </li>
                    <li className="nav-item">
                        <button className={"nav-link text-secondary bg-primary"}  style={{borderRadius: 20, border: '1px solid transparent'}} >Weather</button>
                    </li>
                    <li className="nav-item">
                        <button className={currentTab === 2 ? "nav-link text-dark bg-light" : "nav-link text-light bg-primary"}  style={{borderRadius: 20, border: '1px solid transparent'}} onClick={() => setCurrentTab(2)}>Coverages</button>
                    </li>
                </ul>
                <div className="nav-item d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-light me-2" >Register</button>
                    <button className="btn btn-light me-2" >Login</button>
                </div>
            </div>
        </nav>
    );
}

export default Header;