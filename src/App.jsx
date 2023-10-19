import './App.css';
import LandingComponent from './component/Landing/landing';
import { Routes, Route } from "react-router-dom";
import WelcomeComponent from './component/HelloPage/welcome';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <WelcomeComponent/> }/>
        <Route path='/tasks' element={<LandingComponent/>}/>
      </Routes>
    </div>
  );
}

export default App;
