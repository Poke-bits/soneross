import styles from '../../styles/Login.module.css'
import Login from '../../components/Login'
import Head from '../../components/Head'
import React from 'react';
import Layout from '../../components/layout';


export default function TelaLogin() {
    return (<>

        <Layout>
            <Head />

            <div className={styles.background}>
                <div className={styles.divContainer}>
                    <Login/>
                </div>
            </div>
        </Layout>
    </>
    )

}