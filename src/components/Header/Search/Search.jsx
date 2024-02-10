

import styles from './Search.module.css';


const Search = ({icon, text}) => {
    return (
        <div className={styles.search}>
            <input type="text" placeholder={text}  />
            <button>{icon}</button>
        </div>
    );
}
export default Search;
