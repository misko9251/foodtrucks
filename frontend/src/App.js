import './App.css';
import Home from './pages/Home';
import Register from './pages/Register'
import AddTruck from './pages/AddTruck';
import Foodtruck from './pages/Foodtruck'
import Foodtrucks from './pages/Foodtrucks';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import MobileNav from './components/navbars/MobileNav';

function App() {
  return (
    <div className='App'>
      <Router>
      <MobileNav/>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/myFoodTruck' element={<Foodtruck />} />
          <Route path='/foodtrucks' element={<Foodtrucks />} />
          <Route path='register' element={<Register />} />
          <Route path='/addTruck' element={<AddTruck />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
