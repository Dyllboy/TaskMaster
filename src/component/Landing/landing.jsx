import './landing.css';
import TaskComponent from '../Task/task';
import task from '../../objects/task';
import { useState, useEffect } from 'react';
import NavComponent from '../Nav/nav';
import ModalWrapperComponent from '../Modal/modalWrapper';
import TaskFormComponent from '../TaskForm/taskForm';
import EditTaskFormComponent from '../EditTask/editTaskForm';
import useDrop from 'react-dnd';

const LandingComponent = () => {
    const [task, setTask] = useState([]);
    const [addTaskModalVisible, setTaskModalVisible] = useState(false);
    const [editTaskModalVisible, setEditTaskModalVisible] = useState(false);
    const [filterStatus, setFilterStatus] = useState('Show All');

    const [{isOver}, drop] = useDrop(() => ({
        accept: "task",
        drop: (item) => 
    }))

    //State for the new task form
    const [newTask, setNewTask] = useState({
        id: 0,
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

    const updateEditTaskModal = (t) => {
        if(t != undefined)
            setNewTask(t);
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
        setNewTask(newTask.id = task.length + 1);
        setNewTask(newTask.status = 'Pending');
        const updatedTasks = [...task, newTask];
        setTask(updatedTasks);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
        updateModal();
    }

    //Handles the logic for when an edit task form is submitted
    const editFormSubmit = (event, id) => {
        event.preventDefault();
        const updatedTasks = task.map(t =>
            t.id === id ? { ...t, ...newTask } : t
        );
        setTask(updatedTasks);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
        updateEditTaskModal();
    }

    const HandleFilterChange = (event) => {
        setFilterStatus(event.target.value);
    }

    const handleDeleteTask = (event, id) => {
        event.preventDefault();
        const updatedTasks = task.filter(t => {
            return t.id != id;
        });
        setTask(updatedTasks);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
        updateEditTaskModal();
    }
    
    return (
        <>
            <NavComponent updateModal = {updateModal}></NavComponent>

            {addTaskModalVisible && <ModalWrapperComponent updateModal={updateModal}>
                    <TaskFormComponent submit={handleFormSubmit} change={handleFormChange}></TaskFormComponent>
                </ModalWrapperComponent>}

            {editTaskModalVisible && <ModalWrapperComponent updateModal={updateEditTaskModal}>
                <EditTaskFormComponent key={newTask.id} task={newTask} submit={editFormSubmit} change={handleFormChange} deleteTask={handleDeleteTask}></EditTaskFormComponent>
            </ModalWrapperComponent>}

            <div className="container">
                {task.length == 0 && <h1 className='placeHolderMessage'>Try Adding a New Task!</h1>}
                {task.length != 0 && <select className='filterSelect' onChange={HandleFilterChange}>
                    <option>Show All</option>
                    <option>Pending</option>
                    <option>In Progress</option>
                    <option>Completed</option>
                </select>}
                {task.length != 0 && filterStatus =='Show All' && <ul ref={drop} className='taskList'>{task.map(t => <TaskComponent key={t.id} task={t} updateEditTaskModal={updateEditTaskModal}></TaskComponent>)}</ul>}
                {task.length != 0 && filterStatus !='Show All' && <ul ref={drop} className='taskList'>{task.filter(t => t.status == filterStatus).map(t => <TaskComponent key={t.id} task={t} updateEditTaskModal={updateEditTaskModal}></TaskComponent>)}</ul>}
            </div>
        </>
    )
}

export default LandingComponent;