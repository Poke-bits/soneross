import React from 'react';
import stylesHeader from '../../styles/dashboard/Header.module.css'
export default function DashboardHeader() {


    return (<header className={stylesHeader.header}>
        <img src="./assets/soneros.svg" className={stylesHeader.imgLogo} alt="logo soneros" />
        <input type="search" name="search" className={stylesHeader.inptSearch} ></input>
        <img src="./assets/search.svg" className={stylesHeader.imgBotaoBusca} alt="botao de busca" />
        <img src="./assets/notification.svg" className={stylesHeader.imgBotaoNotification} alt="botao de notificação" />
        <div className={stylesHeader.linhaVertical} />
        <img src="./assets/iconeSuporte.svg" className={stylesHeader.imgIconeSuporte} alt="icone de suporte" />
        <div className={stylesHeader.perfil}>

            <div className={stylesHeader.perfilInfo}>
                <span className={stylesHeader.spanNome}>Fábio Castro</span>
                <span className={stylesHeader.spanFuncao}>Suport admin</span>
            </div>
            <img src='./assets/polygon.svg' className={stylesHeader.imgPolygonPerfil} />
        </div>


    </header>)


}