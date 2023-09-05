import './task.css';

const TaskComponent = ({task, updateEditTaskModal}) => {
    return (
        <div className="task" onClick={() => updateEditTaskModal(task)}>
            <div className='topline'>
                <p className='name'>{task.taskName}</p>
                <p className='status'>{task.status}</p>
            </div>
            <p className='description'>{task.description}</p>
            <p className='date'>{task.date}</p>
        </div>
    )
}

export default TaskComponent;