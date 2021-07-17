import React from 'react'
import { Link } from 'react-router-dom'
const Navbar=()=> {
    return (
        <div className="navbar-nav navbar-dark navbar-expand-lg bg-dark py-2">
            <Link to="/" className="navbar-brand mx-4">React Redux Crud</Link>
        </div>
    )
}

export default Navbar

