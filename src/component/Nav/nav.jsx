import './nav.css'
import { useState } from 'react';

const NavComponent = () => {

    const [showModal, setShowModal] = useState('false');

    let toggleModal = () => {
        if(!showModal)
            setShowModal('true');
        else
            setShowModal('false');
    }

    return (
        <ul className="nav">
            <a className='navLink'>New Task</a>
        </ul>
    )
}

export default NavComponent;