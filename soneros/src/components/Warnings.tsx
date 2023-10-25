import React from 'react';
import styles from '../styles/chamado.module.css'
export default function Warnings(props) {
    return (

        <div className={styles.warnings}>
            <div className={styles.group1}>
                <img className={styles.img1} draggable="false" src="./assets/icon warning.svg" alt="ícone de aviso" /> Certifique-se que
                digitou todos os seus dados corretamente antes de prosseguir! <br />
                <p className={styles.p1}></p>
            </div>

            <div className={styles.group2}>
                <img className={styles.img2} draggable="false" src="./assets/icon warning.svg" alt="ícone de aviso" /> Sempre preencha
                com seus próprios dados! Se estiver abrindo o chamado para terceiros ou outra clínica,
                especifique no próximo passo a clínica desejada.
                <p className={styles.p2}></p>
            </div>
        </div>

    );
}
