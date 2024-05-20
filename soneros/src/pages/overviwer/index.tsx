import React from "react";
import DashboardHeader from "../../components/dashboard/Header";
import Head from "../../components/Head";
import DashboardSidebar from "../../components/dashboard/Sidebar";
import Overview from "../../components/dashboard/Overview";
import styles from "../../styles/dashboard/pageOverview.module.css";
import OpenTickets from "../../components/dashboard/OpenTickets";

export default function PageOverview() {
    return (
        <>
            <Head />
            <div>
                <DashboardHeader />
                <div className={styles.mainContainer}>
                    <DashboardSidebar />
                    <Overview />
                    <OpenTickets count='87'></OpenTickets>

                </div>
            </div>
        </>
    );
}
