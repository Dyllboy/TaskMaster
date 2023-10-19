import './welcome.css'
import { Link } from "react-router-dom"

const WelcomeComponent = () => {

    return(
        <div className='container'>
            <h1 className='welcome'>Welcome to Task Master</h1>
            
            <Link to='/tasks' className='toHomePageButton'>Start Planning</Link>
        </div>
    )
}

export default WelcomeComponent;