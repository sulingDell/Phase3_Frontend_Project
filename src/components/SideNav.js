import React from 'react'

export const SideNav = () => {
    return (
        <div>
            <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasExampleLabel">Big eCom</h5>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Admin Dashboard</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">User Management</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Product Management</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link">Category Management</a>
                    </li>
                </ul>                   
                </div>
            </div>
        </div>
    )
}