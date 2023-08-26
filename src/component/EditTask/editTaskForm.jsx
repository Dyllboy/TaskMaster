import './editTaskForm.css'

const EditTaskFormComponent = ({submit, change}) => {

    return (
        <div className='modal-items'>
            <h3>Edit Task</h3>
            <form>
                <label for="taskName">Task Name</label>
                <input type="text" className='form-name' name="taskName" placeholder="Task Name" onChange={change}></input>
                <label for="description">Description</label>
                <textarea type="text" className='form-description' name="description" placeholder="Description" onChange={change}></textarea>
                <label for="date">Date</label>
                <input type="date" className='date' name="date" placeholder="Date" onChange={change}></input>
                <button type='submit' onClick={submit}>Submit</button>
            </form>
        </div>
    )
}

export default EditTaskFormComponent