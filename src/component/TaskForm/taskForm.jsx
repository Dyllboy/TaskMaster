import './taskForm.css'

const TaskFormComponent = ({submit}) => {

    return (
        <div className='modal-items'>
            <h3>New Task</h3>
            <form>
                <label for="taskName">Task Name</label>
                <input type="text" className='form-name' name="taskName" placeholder="Task Name"></input>
                <label for="description">Description</label>
                <textarea type="text" className='form-description' name="description" placeholder="Description"></textarea>
                <label for="date">Date</label>
                <input type="date" className='date' name="date" placeholder="Date"></input>
                <button type='submit' onClick={submit}>Submit</button>
            </form>
        </div>
    )
}

export default TaskFormComponent