import './modalWrapper.css'

const ModalWrapperComponent = ({updateModal, updateEditTaskModal, children}) => {

    const handleBackdropClick = event => {
        if (event.target === event.currentTarget) {
            updateModal();
        }
    };

    return(
        <>
            <div id="myModal" class="modal" onClick={handleBackdropClick}>
                {children}
            </div>
        </>
    )
}

export default ModalWrapperComponent