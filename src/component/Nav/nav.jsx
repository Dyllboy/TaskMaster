import './nav.css'
import { useState } from 'react';
import LandingComponent from '../Landing/landing';

const NavComponent = ({updateModal}) => {

    return (
        <ul className="nav">
            <a className='navLink' onClick={updateModal}>Create Task</a>
            <p className='navTitle'>Task Master</p>
        </ul>
    )
}

export default NavComponent;