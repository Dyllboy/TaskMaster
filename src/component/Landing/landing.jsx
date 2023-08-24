import './landing.css';
import TaskComponent from '../Task/task';
import task from '../../objects/task';
import { useState, useEffect } from 'react';
import NavComponent from '../Nav/nav';
import ModalWrapperComponent from '../Modal/modalWrapper';
import TaskFormComponent from '../TaskForm/taskForm';

const LandingComponent = () => {

    const [task, setTask] = useState();
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        localStorage.getItem("")
    });
    
    const updateModal = () => {
        setModalVisible(!modalVisible);
    }

    const handleFormSubmit = event => {
        event.preventDefault();
        updateModal();
        // taskArray.push({
        //     taskName: event.target.name,
        //     description: event.target.description,
        //     date: event.target.date,
        //     status: 'Pending'
        // })
    }
    

    const taskArray = [
        {
            taskName: 'Task 1',
            description: 'This is task 1',
            date: '2021-01-01',
            status: 'Pending'
        },
        {
            taskName: 'Task 2',
            description: 'This is a longer version of task 2 where I am testing the container by typing many words in the description. I will be letting copilot complete some of these sentences. Also a test for it. Lets keep going',
            date: '2021-01-01',
            status: 'Pending'
        },
        {
            taskName: 'Task 3',
            description: 'This is task 3',
            date: '2021-01-01',
            status: 'Pending'
        },
        {
            taskName: 'Task 4',
            description: 'This is task 4',
            date: '2021-01-01',
            status: 'Pending'
        }];


    
    return (
        <>
            
            <NavComponent updateModal = {updateModal}></NavComponent>
            
            <div className="container">
                {modalVisible && <ModalWrapperComponent updateModal={updateModal}>
                    <TaskFormComponent submit={handleFormSubmit}></TaskFormComponent>
                </ModalWrapperComponent>}
                <ul className='taskList'>
                    {taskArray.map(t => (<TaskComponent key={t.taskName} task={t}></TaskComponent>))}
                </ul>
            </div>
        </>
        
    )
}

export default LandingComponent;