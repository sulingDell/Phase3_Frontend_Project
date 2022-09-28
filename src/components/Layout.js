import React from 'react'
import Header from './Header'
import { SideNav } from './SideNav'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Navbar from './Navbar'
import Login from './Login'

export default function Layout() {
    return (
        <div className="container">
            <Header />
            <Navbar />
            <SideNav />
            <Login />
            <Outlet />    {/*  React Component Inject as routes Routes*/}

            <br /><br /><br /><br />
            <Footer />
        </div>
    )
}