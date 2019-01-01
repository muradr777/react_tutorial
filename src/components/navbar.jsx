import React from 'react';

const NavBar = props => {
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container">
                <a className="navbar-brand" href="#">Navbar <span className="badge badge-secondary badge-pill">{props.totalCount}</span></a>
            </div>
        </nav>
    )
};

export default NavBar;