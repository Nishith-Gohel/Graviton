import "./App.css";

import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import Dashboard from "./Components/Dashboard";
import Settings from "./Components/Settings";
import Pricing from "./Components/Pricing";
import About from "./Components/About";
import AddProject from "./Components/AddProject";
import NoPage from "./Components/NoPage";

import ProtectedRoutes from "./Components/ProtectedRoutes";
import ProtectLogin from "./Components/ProtectLogin";

import ProjectPage from "./Project Specs/ProjectPage";
import ProjectContent from "./Project Specs/ProjectContent";
import ScrumBacklog from "./Project Specs/ScrumBacklog";
import Issues from "./Project Specs/Issues";
import Team from "./Project Specs/Team";
import ProjectSettings from "./Project Specs/ProjectSettings";

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
          <Route path="/" element={<ProtectedRoutes />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="settings" element={<Settings />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="about" element={<About />} />

            <Route path="addProject" element={<AddProject />} />
            
          </Route>

          <Route path="/ProjectPage" element={<ProjectPage />}>
              <Route index element={<ProjectContent />} />
              <Route path="ScrumBacklog" element={<ScrumBacklog />} />
              <Route path="Issues" element={<Issues />} />
              <Route path="Team" element={<Team />} />
              <Route path="ProjectSettings" element={<ProjectSettings />} />
          </Route>

          <Route path="/login" element={<ProtectLogin />}>
            <Route path="/login" element={<Login />} />
          </Route>

          <Route path="/signup" element={<SignUp />} />

          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
