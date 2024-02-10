import styles from './Logo.module.css';

const Logo=({pic, alt, title})=>{
    return(
        <div>
            <img src={pic} alt={alt} className={styles.logo}/>
            <p>{title}</p>
        </div>
    );
}

export default Logo;