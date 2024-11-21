import { CssVarsProvider } from '@mui/joy/styles'; 
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignInSide from "./pages/SignInSide";
import Dashboard from "./pages/dashboard/Dashboard";
import MyProfile from './pages/dashboard/components/MyProfile';
import './App.css';
import CreateService from './pages/dashboard/CreateService';
import UserDashboard from './pages/dashboard/UserDashboard';

function App() {
  return (
    <CssVarsProvider>  
      <Router>
        <Routes>
          <Route path="/"  Component={SignInSide} />
          <Route path="/dashboard"  Component={Dashboard} />
          <Route path="/user-dashboard"  Component={UserDashboard} />
          <Route path="/services"  Component={Dashboard} />
          <Route path="/profile-dashboard"  Component={MyProfile} />
          <Route path="/create-service"  Component={CreateService} />
        </Routes>
      </Router>
    </CssVarsProvider>
  )
}

export default App;
