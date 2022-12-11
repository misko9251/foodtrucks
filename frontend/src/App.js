import './App.css'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import AddTruck from './pages/AddTruck'
import Foodtrucks from './pages/Foodtrucks'
import ListView from './pages/ListView'
import AcctMgr from './pages/AcctMgr'
import MyAccount from './pages/MyAccount'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation
} from "react-router-dom";
import MobileNav from './components/navbars/MobileNav';

function App() {
  const location = useLocation()

  return (
    <div className='App'>
      {location.pathname !== '/login' && location.pathname !== '/register' && location.pathname !== '/addTruck' && 
        <nav>
          <MobileNav/>
        </nav>
      }
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/foodtrucks' element={<Foodtrucks />} />
          <Route path='register' element={<Register />} />
          <Route path='/login' element ={<Login />} />
          <Route path='/addTruck' element={<AddTruck />} />
          <Route path='/accountmanager' element={<MyAccount />} />
          <Route path='/list' element={<ListView />} />
        </Routes>
    </div>
  );
}

export default App;
