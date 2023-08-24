import './task.css'

const TaskFormComponent = ({updateModal, children}) => {

    const handleBackdropClick = event => {
        if (event.target === event.currentTarget) {
            updateModal(); // Close the modal when backdrop is clicked
        }
    };

    return(
        <>
            <div id="myModal" class="modal" onClick={handleBackdropClick}>
                <div class="modal-content">{children}</div>
            </div>
        </>
    )
}

export default TaskFormComponent