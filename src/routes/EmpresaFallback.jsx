import { Navigate, useParams } from "react-router-dom";
import { validCompanies } from "../data/Companies";

export default function EmpresaFallback() {
    const { empresa } = useParams();  
    
    if (!validCompanies.includes(empresa)) {
        return <Navigate to="/not-found" replace />;
    }

    return <Navigate to={`/${empresa}/home`} replace />;
}