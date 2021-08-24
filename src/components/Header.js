import React from 'react'
import {NavLink} from "react-router-dom";

function Header() {
    return (
        <>
            <div className="container">
                <header className="d-flex flex-wrap justify-content-between py-3 mb-4 border-bottom">
                <div> 
                    <NavLink className={'d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none'} exact to="/" activeClassName="active">
                        <span className="fs-4">Simple header</span>
                        </NavLink>
                </div>

                <ul className="nav nav-pills">
                    <li className="nav-item"><NavLink className={'nav-link'} exact to="/" activeClassName="active">Home</NavLink></li>
                    <li className="nav-item"><NavLink className={'nav-link'} exact to="/faqs" activeClassName="active">FAQs</NavLink></li> 
                    <li className="nav-item"><NavLink className={'nav-link'} exact to="/about-us" activeClassName="active">About</NavLink></li>
                </ul>
                </header>
            </div>
        </>
    )
}

export default Header
