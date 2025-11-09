
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import Home from "./pages/home/Home";
import Units from "./pages/units/Units";
import Layout from "./components/layout/Layout";
import PrivacyPolicy from "./pages/privacy_policy/PrivacyPolicy";
import WorkWithUs from "./pages/work_with_us/WorkWithUs";
import WhoWeAre from "./pages/who_we_are/WhoWeAre";
import Menu from "./pages/menu/Menu";
import Reserve from "./pages/reserve/Reserve";

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

                    <Route
                        path="/cardapio"
                        element={ <Menu /> }
                    />
                    
                    <Route
                        path="/reservas"
                        element={ <Reserve /> }
                    />
                </Routes>
            </Layout>
        </Router>    
    );
}

export default App;

//https://www.youtube.com/watch?v=FrZNOo9tXiQ&list=RDFrZNOo9tXiQ&start_radio=1
//https://www.youtube.com/watch?v=ZZvDZJEZSVA&list=RD5v07zsVouDA&index=5