import React from 'react';

const Header  =  (props) => {
    return (
        <div className="alert alert-info alert-dismissible fade show" role="alert">
            <strong>Welcome to eHealth Care</strong> You should check in on some of <a href="#" className="badge bg-primary">New features</a> below.
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    );
}

export default Header;