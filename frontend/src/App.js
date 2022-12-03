import './App.css';
import Home from './pages/Home';
import Registration from './pages/Registration'
import RegisterTruckVendor from './pages/RegisterTruckVendor'
import AddTruck from './pages/AddTruck';
import Foodtruck from './pages/Foodtruck'
import Foodtrucks from './pages/Foodtrucks';
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
          <Route path='/registerTruckOwner' element={<RegisterTruckVendor />} />
          <Route path='/addTruck' element={<AddTruck />} />
          <Route path='/myFoodTruck' element={<Foodtruck />} />
          <Route path='/foodtrucks' element={<Foodtrucks />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
