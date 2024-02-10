import styles from './Sidebar.module.css';
import {useState} from "react";
import Filters from "./Filters/Filters";
const Sidebar = () => {
    const[title, setTitle]=useState('сапборд')
  return(
      <div className={styles.sidebar}>
        <h2 className={styles.title}>{title}</h2>
        <Filters/>
      </div>
  );
}

export default Sidebar;

//дублирует бургер или появляется только тогда когда выбрана категория