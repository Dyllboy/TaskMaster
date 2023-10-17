import logo from './logo.svg';
import './App.css';
import LandingComponent from './component/Landing/landing';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

function App() {
  return (
    <div >
      <LandingComponent/>
    </div>
  );
}

export default App;
