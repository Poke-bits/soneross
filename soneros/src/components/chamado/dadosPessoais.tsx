import React, { useState } from 'react';
import styles from '../../styles/chamado.module.css'
import Warnings from '../Warnings';

export default function DadosPessoais({ dados, atualizarCamposHandler }) {
    const opcoesClinicas = [
        "clinica 1",
        "clinica 2",
        "clinica 3",
        "clinica 4",
        "clinica 5",
        "clinica 6",
        "clinica 7",
        "clinica 8",
        "clinica 9",
    ];
    const [termoPesquisaClinicas, setTermoPesquisaClinicas] = useState("");
    const [imgDropDown,setImgDropDown] = useState(false)
    const [clinicaSelecionada, setClinicaSelecionada] = useState("");

    const opcoesFiltradas = opcoesClinicas.filter(opcao =>
        opcao.toLowerCase().includes(termoPesquisaClinicas.toLowerCase())
    );
    const [dropdownVisivel, setDropdownVisivel] = useState(false);

    const toggleDropdown = () => {
        setDropdownVisivel(!dropdownVisivel);
        setImgDropDown(!imgDropDown)
    };




    return (<>
        <h2 className={styles.subtitle}> Olá! Digite seus dados pessoais aqui!</h2>
        <form className={styles.form}>

            <div className={styles.inputField}>
                <div className={styles.divNome}>
                    <label className={styles.labelnome} htmlFor="nome">Nome:<span className={styles.requerido}>*</span></label>
                    <input type="text" id="nome" value={dados.nome || ""} onChange={(e) => atualizarCamposHandler("nome", e.target.value)} placeholder="Hellen" />
                </div>
                <div className={styles.divNome}>
                    <label className={styles.labelsobrenome} htmlFor="sobrenome">Sobrenome:<span className={styles.requerido}>*</span></label>
                    <input type="text" id="sobrenome" value={dados.sobrenome || ""} onChange={(e) => atualizarCamposHandler("sobrenome", e.target.value)} placeholder="Machado" />
                </div>
                <div className={styles.divNome}>
                    <label className={styles.labelemail} htmlFor="email">Email Corporativo:<span className={styles.requerido}>*</span></label>
                    <input type="email" id="email" value={dados.email || ""} onChange={(e) => atualizarCamposHandler("email", e.target.value)} placeholder="seunome@dominio.com" />
                </div>
                <div className={styles.divClinica}>
                    <label className={styles.labelclinica} htmlFor="clinica">Sua Clínica:<span className={styles.requerido}>*</span></label>
                    <div className={styles.selectDivExterna}>
                        <input type="text" className={styles.inputClinica}  id='clinica' placeholder='Digite ou Selecione sua Clinica' value={clinicaSelecionada} name="clinica" onChange={(e) => { atualizarCamposHandler("clinica", e.target.value), setTermoPesquisaClinicas(e.target.value), setClinicaSelecionada(e.target.value) }} />
                        <img src={imgDropDown ? "./assets/dropDownUp.svg" : "./assets/dropDownDown.svg"} alt="" className={styles.imgDropDownDown} onClick={toggleDropdown} />
                    </div>
                    <div className={`${styles.dropDownDiv} ${dropdownVisivel ? styles.aparecer : styles.desaparecer}`}>
                        {opcoesFiltradas.map((opcao, index) => (
                            <div className={styles.dropDownList} key={index} onClick={() => { setDropdownVisivel(false), atualizarCamposHandler("clinica", opcao), setClinicaSelecionada(opcao), setTermoPesquisaClinicas(opcao) }}>
                                {opcao}
                            </div>
                        ))}
                    </div>

                </div>
            </div>


            <Warnings />

        </form>
    </>

    );
}
