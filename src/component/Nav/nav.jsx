import './nav.css'
import { useState } from 'react';
import LandingComponent from '../Landing/landing';

const NavComponent = ({updateModal}) => {

    return (
        <ul className="nav">
            <a className='navLink' onClick={updateModal}>New Task</a>
        </ul>
    )
}

export default NavComponent;