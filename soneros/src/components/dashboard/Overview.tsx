import React from 'react';
import stylesOverview from '../../styles/dashboard/Overview.module.css';
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

export default function Overview() {
    const currentDate = new Date();
    // @ts-ignore
    const formattedDate = format(currentDate, 'dd \'de\' MMMM \'de\' yyyy', { locale: ptBR });

    return (
        <div className={stylesOverview.overviewContainer}>
            <h2 className={stylesOverview.overviewTitle}>Overview</h2>
            <div className={stylesOverview.overviewSubtitle}>
                <span>Resumo Mensal Analytics</span>
                <span className={stylesOverview.dropdownIcon}>▼</span>
            </div>
            <div className={stylesOverview.overviewDate}>{formattedDate}</div>
        </div>
    );
}
