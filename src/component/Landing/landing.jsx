import './landing.css';
import TaskComponent from '../Task/task';
import task from '../../objects/task';
import { useState, useEffect } from 'react';
import NavComponent from '../Nav/nav';
import ModalWrapperComponent from '../Modal/modalWrapper';
import TaskFormComponent from '../TaskForm/taskForm';
import EditTaskFormComponent from '../EditTask/editTaskForm';

const LandingComponent = () => {

    const [task, setTask] = useState([]);
    const [addTaskModalVisible, setTaskModalVisible] = useState(false);
    const [editTaskModalVisible, setEditTaskModalVisible] = useState(false);

    //State for the new task form
    const [newTask, setNewTask] = useState({
        taskName: '',
        description: '',
        date: '',
        status: 'Pending'
    });

    //Retrieves the tasks from local storage
    useEffect(() => {
        const storedTasks = localStorage.getItem('tasks');
        if (storedTasks) {
            setTask(JSON.parse(storedTasks));
        }
    }, []);
    
    //Toggles the modal visibility
    const updateModal = () => {
        setTaskModalVisible(!addTaskModalVisible);
    }

    const updateEditTaskModal = () => {
        setEditTaskModalVisible(!editTaskModalVisible);
    }

    //Captures the task form data and updates the newTask state
    const handleFormChange = event => {
        const { name, value } = event.target;
        setNewTask(prevTask => ({
          ...prevTask,
          [name]: value,
        }));
    };

    //Handles the logic for when a new task is submitted
    const handleFormSubmit = event => {
        event.preventDefault();
        const updatedTasks = [...task, newTask];
        setTask(updatedTasks);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
        updateModal();
    }

    //Handles the logic for when an edit task form is submitted
    const editFormSubmit = (event) => {
        event.preventDefault();
        const updatedTasks = [...task, newTask];
        setTask(updatedTasks);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
        updateModal();
    }

    
    return (
        <>
            <NavComponent updateModal = {updateModal} updateEditTaskModal={updateEditTaskModal}></NavComponent>  
            <div className="container">
                {addTaskModalVisible && <ModalWrapperComponent updateModal={updateModal}>
                    <TaskFormComponent submit={handleFormSubmit} change={handleFormChange}></TaskFormComponent>
                </ModalWrapperComponent>}

                
                <ul className='taskList'>
                    {task.map(t => (<><TaskComponent key={t.taskName} task={t} updateEditTaskModal={updateEditTaskModal}></TaskComponent>
                                      {editTaskModalVisible && <ModalWrapperComponent updateModal={updateEditTaskModal}>
                                        <EditTaskFormComponent key={t.taskName} task={t} submit={editFormSubmit} change={handleFormChange}></EditTaskFormComponent>
                                      </ModalWrapperComponent>}
                                    </>))}
                </ul>
            </div>
        </>
    )
}

export default LandingComponent;