import { useEffect } from "react"; 
import { Navigate, Outlet, useLocation, useParams } from "react-router-dom"; 
import { companies, validCompanies } from "../../data/Companies";

export default function Layout() { 
    const { pathname } = useLocation(); 
    const { empresa } = useParams();

    if (!validCompanies.includes(empresa)) {
        return <Navigate to="/not-found" replace />;
    }

    useEffect(() => {
        const data = companies[empresa];

        if (!data) return;

        const favicon = document.querySelector("link[rel='icon']") || document.createElement("link");
        favicon.rel = "icon";
        favicon.href = data.logo;
        document.head.appendChild(favicon);

        document.title = data.name || "Meu Restaurante";
    
    }, [empresa]);

    useEffect(() => { 
        window.scrollTo(0, 0); 
    }, [pathname, empresa]); // toda vez que muda a rota 
    
    return <div><Outlet /></div>; 
}