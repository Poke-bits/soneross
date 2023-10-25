import React, { useState ,useEffect} from 'react';
import styles from '../styles/DataWarnings.module.css'
export default function DataWarnings() {
    const [visible, setVisible] = useState(true);
    
    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false);
        }, 4000);

        return () => clearTimeout(timer);
    }, []);

    return (<div className={visible ? `${styles.warning} ${styles.visible}` : `${styles.warning} ${styles.hidden}`}>
        <img src="./assets/errorFileBranco.svg" draggable="false" alt=" error Icon" />
        <span>por favor, preencha todos os campos!</span>
        <img src="./assets/close.svg"  draggable="false" alt=" close Icon" />
    </div>)
}
