import React, { useState } from 'react'
import styles from '../../styles/chamado.module.css'
import ProgressBar from "@ramonak/react-progress-bar";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

export default function FileList({ files, rejectedFiles, onExcluir }) {
    const [arquivosUpados, setArquivosUpados] = useState(files);
    const [arquivosRejects, setArquivosRejects] = useState(rejectedFiles);


    const [showTooltip, setShowTooltip] = useState(false);
    const handleMouseEnter = () => {
        setShowTooltip(true);
    }
    const handleMouseLeave = () => {
        setShowTooltip(false);
    }
    function Tooltip({ content }) {
        return <div className={styles.tooltip}>{content}</div>;
    }
    function handleImageClickImgUpada(id) {

        onExcluir(id)
        setArquivosUpados(prevArquivos => prevArquivos.filter(file => file.id !== id));

    }
    function handleImgViwer(url) {
        console.log(url)
        Fancybox.bind('[data-fancybox]')
    }


    function transformFileName(fileName: string) {
        const splitado = fileName.split('.');
        const name = splitado[0]
        const extensao = splitado[1]
        if (name.length > 18) {
            const prefix = name.slice(0, 4);
            const suffix = name.slice(-4);
            const shortenedName = `${prefix}...${suffix}`;
            const finalName = `${shortenedName}.${extensao}`;
            return finalName
        } else {
            return fileName
        }
    }
    return (
        <>
            <ul className={styles.ulFileUpload}>
                {files.map((uploadedFile, idx) => (

                    <div key={idx} className={styles.divAcptBtn} >
                        <div className={styles.fileAcptBtn} key={uploadedFile.path}>

                            <label className={styles.lblAcptFile} data-fancybox="upload"
                                data-src={uploadedFile.url} onClick={() => handleImgViwer(uploadedFile.url)}> {transformFileName(uploadedFile.name)}</label>
                            <img src="./assets/Vector.svg" alt="" draggable="false" className={styles.imgRemove} onClick={() => handleImageClickImgUpada(uploadedFile.id)} ></img>

                        </div>
                        <div>
                            {!uploadedFile?.error && (
                                <ProgressBar bgColor='#A861D3' height='2px' width='82%'
                                    margin='-13px 0px -25px 5px' borderRadius='14px' completed={uploadedFile.progress} customLabel="" isLabelVisible={false} className={styles.wrapper}
                                    barContainerClassName={styles.container}

                                    labelClassName={styles.label} />
                            )}
                        </div>


                    </div>

                ))}

            </ul>
            <ul>
                {rejectedFiles.map((uploadedFile: any, idx: any) => (

                    <div key={idx} className={styles.divAcptBtn} >

                        {showTooltip && <Tooltip content={
                            <>
                                <p>error: {uploadedFile.errors[0].code}</p>
                                <p>your file type is: {uploadedFile.type}</p>
                            </>
                        } />}


                        <div className={styles.fileRjctBtn} key={uploadedFile.path}>
                            <img src="./assets/errorFile.svg" alt="" draggable="false" onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave} className={styles.imgRjct} />
                            <label className={styles.lblRjctFile}> Tente Novamente</label>
                            {/* <img src="./assets/Vector.svg" alt="" className={styles.imgRemove} onClick={() => handleClickImgError()} /> */}



                        </div>
                    </div>

                ))}

            </ul>

        </>
    )
}