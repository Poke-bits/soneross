import React from 'react';
import { useState } from 'react';
import styles from '../../styles/Dashboard.module.css'
export default function DashboardSidebar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(true)

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
    return (
        <div className={styles.sidebar}>
            <div className={styles.dashboard}>
                <img src="./assets/dashboard.svg" className={styles.imgSidebar} alt="" />
                <span>Dashboard</span>
            </div>
            <div className={styles.analytics} >
            <img src="./assets/landscape.svg" className={styles.imgSidebar} alt="" />
                <span>Analytics</span>
            </div>
            <ul className={styles.chamados} onClick={toggleDropdown}> 
            <img src="./assets/mail.svg" className={styles.imgSidebar} alt="" />
            Chamados
            <img src='./assets/polygon.svg' className={styles.imgPolygon} onClick={toggleDropdown} />
            {isDropdownOpen && (
                    <>
                        <li>Abertos</li>
                        <li>Não atribuídos</li>
                        <li>Atribuídos a mim</li>
                        <li>Resolvidos</li>
                        <li>Marcados</li>
                        <li className={styles.liUltimoItem}>Todos os chamados</li>
                    </>
                )}
            </ul>
            <div className={styles.criarChamado} >
            <img src="./assets/add.svg" className={styles.imgSidebar} alt="" />
                <span>Criar Chamado</span>
                <img src="./assets/copy.svg" className={styles.imgCopy} alt="" />
            </div>
            <div className={styles.settings} >
            <img src="./assets/settings.svg" className={styles.imgSidebar} alt="" />
                <span>Settings</span>
            </div>

        </div>
    )
}