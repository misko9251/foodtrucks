import './App.css';
import Home from './pages/Home';
import Registration from './pages/Registration'
import RegisterTruck from './pages/RegisterTruck'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/registerUser' element={<Registration />} />
          <Route path='/registerTruckOwner' element={<RegisterTruck />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
