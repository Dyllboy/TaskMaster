import './task.css';
import { useDrag } from 'react-dnd'

const TaskComponent = ({task, updateEditTaskModal, onDragS, onDragO, index}) => {

    return (
        <div draggable className="task" onClick={() => updateEditTaskModal(task)} onDragStart={() => onDragS(index)} onDragOver={((event)=> onDragO(event))}>
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