import React from 'react';
import styles from '../styles/chamado.module.css'
export default function Background() {
    return (
        <>
            <img src="/assets/soneros.svg" alt="logo Son eros" draggable="false" className={styles.imgLogo} />

            <h2 className={styles.titulo}>portal de chamado</h2>
            <img src="/assets/icon support.svg" className={styles.iconsup} draggable="false" alt="ícone de agente de suporte" />
           

        </>

    );
};