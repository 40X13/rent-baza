import styles from './Modal.module.css';

const Modal = ({active, setActive, children}) => {
    return (
        <div onClick={() => setActive(false)} className={`${styles.modal} ${active ? styles.active : ''}`}>
            <div onClick={e => e.stopPropagation()}
                 className={`${styles.modal__content} ${active ? styles.active : ''}`}>
                {children}
            </div>
        </div>
    );
}

export default Modal;

