
import Background from "../../components/Titulo";
import Head from "../../components/Head";
import styles from '../../styles/chamado.module.css'
import React from "react";
import { useForm } from "../../hooks/useForm";
import CategoriaChamado from "../../components/chamado/dadosPessoais";
import DadosPessoais from "../../components/chamado/CategoriaChamado";
import Enviar from "../../components/chamado/Enviar";
import Conclusao from '../../components/chamado/Conclusao'
import { useState, useEffect } from "react";
import api from '../../services/api'
import DataWarnings from "../../components/DataWarnings";

export type formTemplate = {
    nome: string;
    sobrenome: string;
    email: string;
    clinica: string;
    categoria: string[];
    impacto: string;
    titulo: string;
    descricao: string;
    uploadIds: number[];
    codigo: string;
}
let formTemplate: formTemplate = {
    nome: "",
    sobrenome: "",
    email: "",
    clinica: "",
    categoria: [],
    impacto: "",
    titulo: "",
    descricao: "",
    uploadIds: [],
    codigo: "",
}

export default function TelaChamado() {
    const [avisoVisible, setAvisoVisible] = useState(false);
    const limparLocalStorage = () => {
        localStorage.clear();
    }
    // Efeito que será executado quando a página for recarregada
    useEffect(() => {
        window.addEventListener("beforeunload", limparLocalStorage);

        return () => {
            window.removeEventListener("beforeunload", limparLocalStorage);
        };
    }, []);

    const [dados, setDados] = useState(formTemplate)

    const atualizarCamposHandler = (key: any, value: any) => {
        setDados((prev) => {
            formTemplate = prev
            return {
                ...prev, [key]: value
            }
        })

    }

    const chamadoComponents = [<CategoriaChamado dados={dados} atualizarCamposHandler={atualizarCamposHandler} />,
    <DadosPessoais dados={dados} atualizarCamposHandler={atualizarCamposHandler} />,
    <Enviar dados={dados} atualizarCamposHandler={atualizarCamposHandler} />,
    <Conclusao dados={dados} />]
    const { primeiraEtapa, segundaEtapa, terceiraEtapa, quartaEtapa, etapaAtual, mudancaStep } = useForm(chamadoComponents)

    const validarDadosPrimeiraEtapa = () => {

        // Expressão regular para validar um endereço de e-mail
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!dados.nome || !dados.sobrenome || !dados.email || !dados.clinica) {

            return false; // Campos obrigatórios não estão preenchidos
        }

        if (!emailRegex.test(dados.email)) {
            return false; // Email não é válido
        }

        return true; // Todos os campos obrigatórios estão preenchidos e o email é válido
    }
    const validarDadosSegundaEtapa = () => {
        if (dados.categoria.length==0 || !dados.impacto)
            return false
        return true
    }

    const validarDadosTerceiraEtapa = () => {
        if (!dados.titulo || !dados.descricao)
            return false
        return true
    }

    const renderizarBotoes = () => {
       
        if (primeiraEtapa) {

            return (<>
                        
                <button onClick={(e: any) => {
                      const validos = validarDadosPrimeiraEtapa();

                    if (!validos) {
                        setAvisoVisible(true);
                        setTimeout(() => setAvisoVisible(false), 4000);
                        
                      

                        return
                    } 
                    
                    mudancaStep(etapaAtual + 1, e, formTemplate);
                }} className={styles.botao}>Próxima Etapa</button>
                
            </>);

        }
        if (segundaEtapa) {
            return (
                <>
                    <button className={styles.btnVoltar} onClick={(e) => mudancaStep(etapaAtual - 1, e, formTemplate)}> <img src="/assets/voltarBtn.svg" alt="" /></button>
                    <button onClick={(e: any) => {
                        const validos = validarDadosSegundaEtapa();

                        if (!validos) {
                            setAvisoVisible(true);
                            setTimeout(() => setAvisoVisible(false), 4000);
    
                            return;
                        }
                        mudancaStep(etapaAtual + 1, e, formTemplate)
                    }} className={styles.botao}>Próxima Etapa</button>
                </>)
        }


        if (terceiraEtapa) {
            const handleEnviar = async (dados: formTemplate, atualizarCamposHandler: any, e: any) => {
            
                const result = await api.post('/utilitys/formulario', dados);

                atualizarCamposHandler('codigo', result.data);

                mudancaStep(etapaAtual + 1, e, formTemplate);
                limparLocalStorage();

            }
            return (
                <>
                    <button className={styles.btnVoltar} onClick={(e) => mudancaStep(etapaAtual - 1, e, formTemplate)}> <img src="/assets/voltarBtn.svg" alt="" /></button>
                    <button onClick={(e) => {
                        const validos = validarDadosTerceiraEtapa();

                        if (!validos) {

                             setAvisoVisible(true);
                            setTimeout(() => setAvisoVisible(false), 4000);
    
                            return;
                        }



                        handleEnviar(dados, atualizarCamposHandler, e)
                    }} className={styles.botao}>Enviar</button>
                </>
            );
        }

        if (quartaEtapa) {
            return (
                <></>
            );
        }
    };
    return (
        <>
            <Head />

            <div className={styles.background}>

                <div className={styles.formBox}>
                    <Background />
                    {chamadoComponents[etapaAtual]}
                    {avisoVisible && <DataWarnings />} {/* Renderiza o aviso se avisoVisible for true */}
                    {renderizarBotoes()}

                </div>
            </div>
        </>); 
}