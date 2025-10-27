import { useEffect } from "react"; 
import { useLocation } from "react-router-dom"; 

export default function Layout({ children }) { 
    const { pathname } = useLocation(); 
    useEffect(() => { 
        window.scrollTo(0, 0); 
    }, [pathname]); // toda vez que muda a rota 
    
    return <div>{children}</div>; 
}