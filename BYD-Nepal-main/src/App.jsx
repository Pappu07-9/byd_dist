import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./assets/css/custom.css";

import Products from "./components/Services/Products";
import ListOfServices from "./components/Services/ListOfServices";
import Atto3 from "./components/Car/Atto3/Atto3";
import Interiors from "./components/Car/Atto3/Interiors";
import Engine from "./components/Car/Atto3/Engine";
import Trunk from "./components/Car/Atto3/Trunk";
import Dolphin from "./components/Car/Dolphin/Dolphin";
import Welcome from "./components/Welcome/Welcome";
import NepalMap from "./components/Map/Map";
import PhoneNumber from "./components/OTP/PhoneNumber";
import OtpVerify from "./components/OTP/OtpVerify";
import ChargingStation from "./components/Services/ChargingStation";
import CostSaving from "./components/Services/CostSaving";
import TestDrive from "./pages/TestDrive";
import CarsPage from "./pages/Cars";

function NoMatch() {
    return (
        <div style={{ padding: 20 }}>
            <h2>404: Page Not Found</h2>
        </div>
    );
}

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<NepalMap />} />
                <Route path="/welcome" element={<Welcome />} />
                <Route path="/products" element={<Products />} />
                <Route path="/cars" element={<CarsPage />} />
                <Route path="/services" element={<ListOfServices />} />
                <Route path="/charging-station" element={<ChargingStation />} />
                <Route path="/cost-saving" element={<CostSaving />} />
                <Route path="/phone-number" element={<PhoneNumber />} />
                <Route path="/otp-verify" element={<OtpVerify />} />
                <Route path="/atto3" element={<Atto3 />} />
                <Route path="/dolphin" element={<Dolphin />} />
                <Route path="/interiors" element={<Interiors />} />
                <Route path="/engine" element={<Engine />} />
                <Route path="/trunk" element={<Trunk />} />
                <Route path="/test-drive" element={<TestDrive />} />
                <Route path="*" element={<NoMatch />} />
            </Routes>
        </Router>
    );
}

export default App;
