import './task.css'

const TaskFormComponent = ({updateModal}) => {
    return(
        <>
            {/* <div id='modalBackdrop' className='backdrop' onClick={ updateModal() }></div> */}
            <div id="myModal" class="modal">
                <div class="modal-content">
                    <form>
                        <input type='text'></input>
                    </form>
                </div>
            </div>
        </>
    )
}

export default TaskFormComponent