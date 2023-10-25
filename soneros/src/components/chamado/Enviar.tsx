import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';
import React, { useState } from 'react';
import styles from '../../styles/chamado.module.css';
import Uploader from './Uploader';

// Importando o reactQuill dinamicamente
const ReactQuill = dynamic(() => import('react-quill'), {
    ssr: false,
});



export default function Enviar({ dados, atualizarCamposHandler }) {
    const handleChange = (content: string) => {

        atualizarCamposHandler('descricao', content);


        setTextEditor(content);
    };
    const [textEditor, setTextEditor] = useState('');




    const formats = [
        'font',
        'size',
        'bold',
        'italic',
        'underline',
        'strike',
        'blockquote',
        'list',
        'bullet',
        'indent',
        'link',
        'image',
        'color',
        'background',
        'align',
        'script',
        'code-block'

    ];

    const modules = {
        toolbar: {
            container: '#toolbar',
        },
    };
    const customToolbarStyle = {
        backgroundColor: '#A861D3',
        width: '100%',
        height: '18%',
        borderRadius: '12px 12px 0px 0px',
        paddingTop: '10px',
        paddingBottom: '14px'

    };


    return (
        <> <h2 className={styles.subtitleEnviar}>Como podemos ajudar você hoje?</h2>
            <div className={styles.divCaixaTexto}>
                <label className={styles.lblTitulo}>Titulo: <span className={styles.requerido}>*</span></label>
                <input className={styles.inptTitulo} type="titulo" id='titulo' value={dados.titulo || ""} onChange={(e) => atualizarCamposHandler("titulo", e.target.value)} placeholder="descreva um titulo curto" />
                <label className={styles.lblDescricao}> Descrição: <span className={styles.requerido}>*</span></label>
                <div className={styles.editor}>
                    <div id="toolbar" style={customToolbarStyle}>
                        <button className="ql-bold" />
                        <button className="ql-italic" />
                        <button className="ql-underline" />
                        <button className="ql-strike" />
                        <button className="ql-blockquote" />
                        <button className="ql-list" value="ordered" />
                        <button className="ql-list" value="bullet" />
                        <button className="ql-indent" value="-1" />
                        <button className="ql-indent" value="+1" />
                        <button className="ql-code-block" />
                        <button className="ql-link" />
                        <button className="ql-image" />
                        <button className="ql-video" />
                        <button className="ql-clean" />
                        <button className="ql-formula" />
                        <select className="ql-color" defaultValue="">
                            <option value="red"></option>
                            <option value="green"></option>
                            <option value="blue"></option>
                            <option value="purple"></option>
                            <option value="yellow"></option>
                        </select>
                        <select className="ql-background" defaultValue="">
                            <option value="#A861D3"></option>
                            <option value="#F68E5F"></option>
                            <option value="#4CAF50"></option>
                            <option value="#2196F3"></option>
                        </select>



                    </div>

                    <ReactQuill
                        value={dados.descricao || textEditor}
                        onChange={handleChange}

                        formats={formats}
                        modules={modules}
                        style={{ height: '168px', width: '100%' }}


                    />
                </div>
            </div>
            <Uploader dados={dados} atualizarCamposHandler={atualizarCamposHandler} />


        </>
    );
}
