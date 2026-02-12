import {BrowserRouter, Routes, Route, NavLink} from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Reports from "./components/Reports";
import Settings from "./components/Settings";
import Help from "./components/Help";
import './App.css'
import { FaHome, FaUser, FaCog, FaChartBar, FaQuestionCircle } from "react-icons/fa";


function App(){
  return(
      <BrowserRouter>
      <div className="dashboard-container">
        <nav className="nav-tabs">  
            <NavLink to="/" className={({isActive}) => isActive ? "active" : ""}><FaHome />Home</NavLink>
            <NavLink to="/profile" className={({isActive}) => isActive ? "active" : ""}><FaUser />Profile</NavLink>
            <NavLink to="/settings" className={({isActive}) => isActive ? "active" : ""}><FaCog />Settings</NavLink>
            <NavLink to="/reports" className={({isActive}) => isActive ? "active" : ""}><FaChartBar />Reports</NavLink>
            <NavLink to="/help" className={({isActive}) => isActive ? "active" : ""}><FaQuestionCircle />Help</NavLink>
        </nav>
      <div className="dashboard-card">
          <h1>React Router Dashboard</h1>
          <h4>Navigate Between Diffrent Components</h4>
          <div className="divider"></div>
            <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/profile" element={<Profile />}/>
              <Route path="/settings" element={<Settings />}/>
              <Route path="/reports" element={<Reports/>}/>
              <Route path="/help" element={<Help />}/>
            </Routes>
      </div>
      </div>
      </BrowserRouter>
      
  );
}

export default App