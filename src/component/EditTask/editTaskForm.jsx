import './editTaskForm.css'

const EditTaskFormComponent = ({submit, change, task}) => {

    return (
        <div className='modal-items'>
            <h3>Edit Task</h3>
            <form>
                <label for="taskName">Task Name</label>
                <input type="text" className='form-name' name="taskName" placeholder={task.taskName} onChange={change}></input>
                <label for="description">Description</label>
                <textarea type="text" className='form-description' name="description" placeholder={task.description} onChange={change}></textarea>
                <label for="date">Date</label>
                <input type="date" className='date' name="date" value={task.date} onChange={change}></input>
                <select name="status" value={task.status} onChange={change} className='statusSelect'>
                    <option value='Pending'>Pending</option>
                    <option value='In Progress'>In Progress</option>
                    <option value='Completed'>Completed</option>
                </select>
                <button type='submit' onClick={event => submit(event, task.id)}>Submit</button>
            </form>
        </div>
    )
}

export default EditTaskFormComponent