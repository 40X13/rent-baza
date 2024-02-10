import styles from './Main.module.css';
import Slider from "./Slider/Slider";
import Cards from "./Cards/Cards";
import Pagination from "./Pagination/Pagination";
import Rules from "./Rules/Rules";

const Main = ({setIsActiveModal}) => {


    return (
        <div  className={styles.main} >
            <Slider/>
            <Cards/>
            <button onClick={()=>setIsActiveModal(true)}>test modal</button>
            <Pagination/>
            <Rules/>
        </div>
    );
}

export default Main;