import React from 'react';
import styles from '../../styles/Dashboard.module.css'
export default function DashboardHeader() {
    
    
    return (<header className={styles.header}>
        <img src="./assets/soneros.svg" className={styles.imgLogo} alt="logo soneros"/>
        <input type="search" name="search" className={styles.inptSearch} ></input>
        <img src="./assets/search.svg" className={styles.imgBotaoBusca} alt="botao de busca"/>
        <img src="./assets/notification.svg" className={styles.imgBotaoNotification} alt="botao de notificação"/>
        <div className={styles.linhaVertical}/>
        <img src="./assets/iconeSuporte.svg" className={styles.imgIconeSuporte} alt="icone de suporte"/>
        <div className={styles.perfil}>
       
            <div className={styles.perfilInfo}>
        <span className={styles.spanNome}>Fábio Castro</span>
        <span className={styles.spanFuncao}>Suport admin</span>
        </div>
        <img src='./assets/polygon.svg' className={styles.imgPolygonPerfil}/>
        </div>
    
    
        </header>)


}