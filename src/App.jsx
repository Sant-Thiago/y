
import { /*BrowserRouter*/ HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import Home from "./pages/home/Home";
import Units from "./pages/units/Units";
import Layout from "./components/layout/Layout";
import PrivacyPolicy from "./pages/privacy_policy/PrivacyPolicy";
import WorkWithUs from "./pages/work_with_us/WorkWithUs";
import WhoWeAre from "./pages/who_we_are/WhoWeAre";
import Menu from "./pages/menu/Menu";
import Reserve from "./pages/reserve/Reserve";
import Event from "./pages/event/Event";
import UnitDetails from "./pages/unit_details/UnitDetails";
import EventDetails from "./pages/event_details/EventDetails";

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
                        path="/unidades/:name"
                        element={<UnitDetails />}    
                    />

                    <Route 
                        path="/politica-privacidade"
                        element={ <PrivacyPolicy />}
                    />

                    <Route
                        path="/contato"
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

                    <Route
                        path="/eventos"
                        element={ <Event name="EmpresaX"/> }
                    />

                    <Route
                        path="/eventos/:name"
                        element={ <EventDetails name="EmpresaX"/> }
                    />
                </Routes>
            </Layout>
        </Router>    
    );
}

export default App;

//https://www.youtube.com/watch?v=FrZNOo9tXiQ&list=RDFrZNOo9tXiQ&start_radio=1
//https://www.youtube.com/watch?v=ZZvDZJEZSVA&list=RD5v07zsVouDA&index=5