import './task.css';
import { useDrag } from 'react-dnd'

const TaskComponent = ({task, updateEditTaskModal}) => {
    const [{isDragging}, drag] = useDrag(() => ({
        type: "task",
        collect: (monitor) = ({
            isDragging: !!monitor.isDragging(),
        }),
    }));

    return (
        <div ref={drag} className="task" onClick={() => updateEditTaskModal(task)}>
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