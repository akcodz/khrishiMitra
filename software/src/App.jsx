import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import AdminDashboard from "./pages/AdminDashboard.jsx";
import Layout from "./pages/Layout.jsx";
import SoilMoisture from "./pages/SoilMoisture.jsx";
import TempHumidity from "./pages/TempHumidity.jsx";
import RainSensor from "./pages/RainSensor.jsx";
import IrrigationControl from "./pages/IrrigationControl.jsx";
import AdminLayout from "./pages/AdminLayout.jsx";
import Farmers from "./pages/Farmers.jsx";
import Sensors from "./pages/Sensors.jsx";
import ManageRequest from "./pages/ManageRequest.jsx";
import AuthForm from "./pages/AuthForm.jsx";
import AdminLogin from "./pages/AdminLogin.jsx";
import RaiseTicket from "./pages/RaiseTicket.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import AdminProtectedRoute from "./components/AdminProtectedRoute.jsx";


const App = () => {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<AuthForm />} />
          <Route path="/admin-auth" element={<AdminLogin />} />

          {/* Layout with sidebar */}
          <Route element={<ProtectedRoute/>}>
          <Route path="/dashboard" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="soil-moisture" element={<SoilMoisture />} />
            <Route path="ambient-temp-humidity" element={<TempHumidity />} />
            <Route path="rain-detection" element={<RainSensor />} />
            <Route path="drip-irrigation" element={<IrrigationControl />} />
            <Route path="raise-ticket" element={<RaiseTicket />} />
          </Route>
          </Route>
          
          
          <Route element={<AdminProtectedRoute/>}>
            <Route path="/admin-dashboard" element={<AdminLayout />} >
                <Route index element={<AdminDashboard />} />

                <Route path="farmers" element={<Farmers />} />
                <Route path="sensors" element={<Sensors />} />
                <Route path="requests" element={<ManageRequest />} />

            </Route>
            </Route>
        </Routes>
      </Router>
  );
};

export default App;
