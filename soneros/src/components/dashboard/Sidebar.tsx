import React from 'react';
import { useState } from 'react';
import stylesSidebar from '../../styles/dashboard/Sidebar.module.css'
export default function DashboardSidebar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(true)

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
    return (
        <div className={stylesSidebar.sidebar}>
            <div className={stylesSidebar.dashboard}>
                <img src="./assets/dashboard.svg" className={stylesSidebar.imgSidebar} alt="" />
                <span>Dashboard</span>
            </div>
            <div className={stylesSidebar.analytics} >
                <img src="./assets/landscape.svg" className={stylesSidebar.imgSidebar} alt="" />
                <span>Analytics</span>
            </div>
            <ul className={stylesSidebar.chamados} onClick={toggleDropdown}>
                <img src="./assets/mail.svg" className={stylesSidebar.imgSidebar} alt="" />
                Chamados
                <img src='./assets/polygon.svg' className={stylesSidebar.imgPolygon} onClick={toggleDropdown} />
                {isDropdownOpen && (
                    <>
                        <li>Abertos</li>
                        <li>Não atribuídos</li>
                        <li>Atribuídos a mim</li>
                        <li>Resolvidos</li>
                        <li>Marcados</li>
                        <li className={stylesSidebar.liUltimoItem}>Todos os chamados</li>
                    </>
                )}
            </ul>
            <div className={stylesSidebar.criarChamado} >
                <img src="./assets/add.svg" className={stylesSidebar.imgSidebar} alt="" />
                <span>Criar Chamado</span>
                <img src="./assets/copy.svg" className={stylesSidebar.imgCopy} alt="" />
            </div>
            <div className={stylesSidebar.settings} >
                <img src="./assets/settings.svg" className={stylesSidebar.imgSidebar} alt="" />
                <span>Settings</span>
            </div>

        </div>
    )
}