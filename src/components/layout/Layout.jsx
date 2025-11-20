import { useEffect } from "react"; 
import { Navigate, Outlet, useLocation, useParams } from "react-router-dom"; 
import { validCompanies } from "../../data/Companies";

export default function Layout() { 
    const { pathname } = useLocation(); 
    const { empresa } = useParams();
    
if (!validCompanies.includes(empresa)) {
        return <Navigate to="/not-found" replace />;
    }
    useEffect(() => { 
        window.scrollTo(0, 0); 
    }, [pathname, empresa]); // toda vez que muda a rota 
    
    return <div><Outlet /></div>; 
}