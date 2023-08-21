import './landing.css';
import TaskComponent from '../Task/task';

const LandingComponent = () => {
    
    return (
        <div className="container">
            <ul className='taskList'>
                <TaskComponent/>
                <TaskComponent/>
                <TaskComponent/>
            </ul>
        </div>
    )
}

export default LandingComponent;