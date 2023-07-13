import {  Routes, Route } from "react-router-dom";
import Homapage from "./pages/Homapage";

import Register from './pages/auth/Register'
import Login from "./pages/auth/Login";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProtectedRoute from "./components/Routes/ProtectedRoutes";
import PublicRoutes from "./components/Routes/PublicRoutes";
import Donar from "./pages/Dashboard/Donar";
import Hospital from "./pages/Dashboard/Hospital";

import Orgnaisation from "./pages/Dashboard/Orgnaisation";
import Consumer from "./pages/Dashboard/Consumer";
import Donation from "./pages/Dashboard/Donation";
import Analytics from "./pages/Dashboard/Analytics";
import DonarList from "./pages/Admin/DonarList";
import HospitalList from "./pages/Admin/HospitalList";
import OrgList from "./pages/Admin/OrgList";
import AdminHome from "./pages/Admin/AdminHome";

function App() {
  return (
     <>
        
    <ToastContainer/>
     <Routes>
        <Route path="/" element={
         <ProtectedRoute >
        <Homapage/>
        </ProtectedRoute>
        } /> 
         <Route path="/donar" element={
         <ProtectedRoute >
        <Donar/>
        </ProtectedRoute>
        } /> 
        <Route path="/login" element={
         <PublicRoutes>
        <Login/>
        </PublicRoutes>
        } />
        <Route path="/hospital"   element={ <ProtectedRoute ><Hospital/> </ProtectedRoute>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/orgnaisation"   element={ <ProtectedRoute > <Orgnaisation/></ProtectedRoute>} />
        <Route path="/consumer"   element={ <ProtectedRoute > <Consumer/></ProtectedRoute>} />
        <Route path="/donation"   element={ <ProtectedRoute > <Donation/></ProtectedRoute>} />
        <Route path="/analytics"   element={ <ProtectedRoute > <Analytics/></ProtectedRoute>} />
        <Route path="/analytics"   element={ <ProtectedRoute > <Analytics/></ProtectedRoute>} />
        <Route path="/donar-list"   element={ <ProtectedRoute > <DonarList/></ProtectedRoute>} />
        <Route path="/hospital-list"   element={ <ProtectedRoute > <HospitalList/></ProtectedRoute>} />
        <Route path="/org-list"   element={ <ProtectedRoute > <OrgList/></ProtectedRoute>} />
        <Route path="/admin"   element={ <ProtectedRoute > <AdminHome/></ProtectedRoute>} />
        
      
     </Routes>
  
     </>
  );
}

export default App;
