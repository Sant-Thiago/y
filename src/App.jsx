
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import Home from "./pages/home/Home";
import Units from "./pages/units/Units";
import Layout from "./components/layout/Layout";
import PrivacyPolicy from "./pages/privacy_policy/PrivacyPolicy";
import WorkWithUs from "./pages/work_with_us/WorkWithUs";
import WhoWeAre from "./pages/who_we_are/WhoWeAre";

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

                    <Route
                        path="/quem-somos"
                        element={ <WhoWeAre /> }
                    />
                </Routes>
            </Layout>
        </Router>    
    );
}

export default App;
