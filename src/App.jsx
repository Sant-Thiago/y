
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import Home from "./pages/home/Home";
import Units from "./pages/units/Units";
import Layout from "./components/layout/Layout";
import PrivacyPolicy from "./pages/privacy_policy/PrivacyPolicy";
import WorkWithUs from "./pages/work_with_us/WorkWithUs";

function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route
                        path="/"
                        element={ <Navigate to="/home" /> }
                    />
                    <Route 
                        path="/home"
                        element={ <Home /> }
                    />
                    <Route 
                        path="/unidades"
                        element={ <Units />}
                    />
                    <Route 
                        path="/politica-privacidade"
                        element={ <PrivacyPolicy />}
                    />

                    <Route
                        path="/trabalhe-conosco"
                        element={ <WorkWithUs /> }
                    />
                </Routes>
            </Layout>
        </Router>    
    );
}

export default App;
