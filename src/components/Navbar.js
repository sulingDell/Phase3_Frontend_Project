import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = ()=> {
    const loggedIn = useSelector(state=> state.isLoggedIn);
    return (
    
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample" >eHealth Care</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link  className="nav-link active" aria-current="page" to="/">Home</Link >
                            </li>
                            <li className="nav-item"><Link className="nav-link" to="/about-us">About</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/blogs">Blogs</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/users">Customers</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/products">Products</Link></li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="/reports" id="navbarDropdown" role="button" 
                                data-bs-toggle="dropdown" aria-expanded="false">
                                    Reports
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#">Stock Report</a></li>
                                    <li><a className="dropdown-item" href="#">Sell Report</a></li>
                                    <li><a className="dropdown-item" href="#">Medicine Report</a></li>
                                    <li><a className="dropdown-item" href="#">Order Report</a></li>
                                    <li><a className="dropdown-item" href="#">Datewise Report</a></li>
                                </ul>
                                </li>
                                <li className="nav-item"><Link className="nav-link" to="/contact">Contact Us</Link></li>
                        </ul>
                        <ul className="navbar-nav  mb-2 mb-lg-0">
                            <li className="nav-item"><a className="nav-link"  type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">{loggedIn ? 'Logout' : 'LogIn'}</a></li>
                            
                        </ul>
                    </div>
                </div>
            </nav>
        );
    
}

export default Navbar;