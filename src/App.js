import './App.css';
import Login from './Components/Login';
import SignUp from './Components/SignUp';

import Dashboard from './Components/Dashboard';
import Settings from './Components/Settings';
import Pricing from './Components/Pricing';
import About from './Components/About';
import AddProject from './Components/AddProject';
import NoPage from './Components/NoPage';

import ProtectedRoutes from './Components/ProtectedRoutes';
import ProtectLogin from './Components/ProtectLogin';
import PropTypes from 'prop-types'


import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ProtectedRoutes />}>
            <Route path='/' element={<Dashboard />} />
            <Route path='settings' element={<Settings />} />
            <Route path='pricing' element={<Pricing />} />
            <Route path='about' element={<About />} />

            <Route path='addProject' element={<AddProject />}/>
          </Route>

          <Route path='/login' element={<ProtectLogin/>}>
            <Route path='/login' element={<Login />} />
          </Route>
          
          <Route path='/signup' element={<SignUp />} />
          
          <Route path='*' element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
