import './App.css'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import AddTruck from './pages/AddTruck'
import Foodtrucks from './pages/Foodtrucks'
import AcctMgr from './pages/AcctMgr'
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
          <Route path='/foodtrucks' element={<Foodtrucks />} />
          <Route path='register' element={<Register />} />
          <Route path='/login' element ={<Login />} />
          <Route path='/addTruck' element={<AddTruck />} />
          <Route path='/accountmanager' element={<AcctMgr />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
