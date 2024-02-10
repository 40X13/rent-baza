import {NavLink} from "react-router-dom";
import Counter from "../Counter/Counter";
import styles from './Controller.module.css';



const Controller=({onClick, style={}, href,icon, text,counter=false})=>{
    return(
        <a onClick={()=>onClick()}
            className={`${styles.controller} ${style}`} href={href}>
            {icon}
            <span>{text}</span>
            {counter&&<Counter style={style} />}
        </a>
    );
}

export default Controller;