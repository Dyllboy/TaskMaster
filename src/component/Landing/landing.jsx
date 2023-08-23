import './landing.css';
import TaskComponent from '../Task/task';
import task from '../../objects/task';
import { useState, useEffect } from 'react';
import NavComponent from '../Nav/nav';
import TaskFormComponent from '../TaskForm/task';

const LandingComponent = () => {

    const [tasks, setTask] = useState(() => {
        const saved = localStorage.getItem("tasks");
        const initialValue = JSON.parse(saved);
        return initialValue || [];
    });

    const [modalVisible, setModalVisible] = useState(false);
    

    const updateModal = () => {
        setModalVisible(!modalVisible);
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
                {modalVisible && <TaskFormComponent updateModal={updateModal}></TaskFormComponent>}
                <ul className='taskList'>
                    {taskArray.map(t => (<TaskComponent key={t.taskName} task={t}></TaskComponent>))}
                </ul>
            </div>
        </>
        
    )
}

export default LandingComponent;