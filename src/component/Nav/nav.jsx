import './nav.css'
import { useState } from 'react';
import LandingComponent from '../Landing/landing';
import { Link } from 'react-router-dom';

const NavComponent = ({updateModal}) => {

    return (
        <ul className="nav">
            <a className='navLink' onClick={updateModal}>Create Task</a>
            <Link to='/' className='navTitle'>Task Master</Link>
        </ul>
    )
}

export default NavComponent;