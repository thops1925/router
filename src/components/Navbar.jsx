import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <Link to='/'>Home</Link>
            <Link to='/menu'>Menu</Link>
            <Link to='/contact'>Contact</Link>
        </div>
    )
}

export default Navbar