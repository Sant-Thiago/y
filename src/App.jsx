
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import Home from "./pages/home/Home";
import Units from "./pages/units/Units";
import Layout from "./components/layout/Layout";

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
                </Routes>
            </Layout>
        </Router>    
    );
}

export default App;
