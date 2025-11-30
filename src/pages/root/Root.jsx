import { Link, useParams } from "react-router-dom"
import { companies } from "../../data/Companies";
import styles from "./Root.module.css";
import { useEffect, useState } from "react";

export default function Root({}) {
    const data = companies;
    const password = import.meta.env.VITE_PASSWORD;
    
    const [inputValue, setInputValue] = useState("");
    const [unlocked, setUnlocked] = useState(false);

    useEffect(() => {
        setUnlocked(inputValue == password);
    }, [inputValue]);


    return(
        <>
    
        {unlocked ? 
            <ul className={styles.container}>
                {Object.keys(data).map(it => (
                    <Link to={`/${it}/home`} > {data[it].name} </Link>    
                ))}
            </ul>
            :
            <div className={styles.container}>
                <label htmlFor="input">Senha: 
                    {" "}
                    <input id="input" type="text" value={inputValue} onChange={e => setInputValue(e.target.value)}/>
                </label>
            </div>
        }
        </>
    )
}