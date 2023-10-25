
import React from 'react';
import styles from '../../styles/chamado.module.css'

export default function Conclusao({dados}) {
    
    console.log(dados)

    return (<>
        <label className={styles.lblCodigoChamado}>{dados.codigo}</label>
        <label className={styles.lblAgradecimentoChamado}>Eba, seu chamado foi enviado!</label>
        <label className={styles.lblInfosGerais}>Assim que nosso time tiver alguma atualização ou conclusão sobre o caso, entraremos em contato..</label>
        <label className={styles.lblAgradecimentoSuporte}>Obrigado pela confiança!</label>
    </>);
}