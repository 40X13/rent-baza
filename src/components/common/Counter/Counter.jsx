import styles from './Counter.module.css';


const Counter = ({value,style}) => {
  return(
    <div className={`${styles.counter} ${style} `}>
      <p>{value}</p>
    </div>
  );
}

export default Counter;