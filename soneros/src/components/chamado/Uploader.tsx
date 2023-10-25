import React from 'react'
import { useDropzone } from 'react-dropzone';
import styles from '../../styles/chamado.module.css'
import { useState } from 'react';
import { uniqueId } from 'lodash'
import FileList from './FileList';
import api from '../../services/api';


export default function Uploader(props) {

    const [uploadFileId, setIds] = useState([])
    const [arquivosRejeitados, setArquivosRejeitados] = useState([]);
    const [arquivosUpados, setArquivosUpados] = useState([])

    type uploadedFiles = [
        file: Blob,
        id: Blob,
        name: string,
        progress: number,
        uploaded: boolean,
        error: boolean,
        url: string

    ]
    function handleUpload(files) {

        let uploadedFiles: uploadedFiles = files.map(file => ({
            file,
            id: uniqueId(),
            name: file.name,
            originalName: file.name,
            progress: 0,
            uploaded: false,
            error: false,
            url: null


        }))


        async function updateFile(id: Blob, data) {
            setArquivosUpados(prevArquivos => (
                prevArquivos.map(uploadedFile =>
                    id == uploadedFile.id
                        ? { ...uploadedFile, ...data }
                        : uploadedFile
                )
            ));
        }
        async function processUpload(uploadedFile) {
            const data: any = new FormData()
            data.append('file', uploadedFile.file, uploadedFile.name)
            let progress: number
            try {
                const result = await api.post('/utilitys/upload', data, {

                    onUploadProgress: e => {
                        progress = (Math.round((e.loaded * 100) / e.total));
                        updateFile(uploadedFile.id, { progress })


                    }

                })
                uploadFileId.push(result.data._id)

                await updateFile(uploadedFile.id, {
                    uploaded: true,
                    id: result.data._id,
                    key: result.data.key,
                    url: result.data.url
                })



            } catch (error) {
                updateFile(uploadedFile.id, {
                    error: true
                });
            }








        }
        setArquivosUpados(arquivosUpados.concat(uploadedFiles))


        uploadedFiles.map(async uploadedFile => {
            await processUpload(uploadedFile);
        });



        setArquivosUpados(arquivosUpados.concat(uploadedFiles))

        console.log(arquivosUpados)

        props.atualizarCamposHandler('uploadIds', uploadFileId)

    }
    const { getRootProps, getInputProps, open } = useDropzone({
        noClick: true,
        multiple: true,
        accept: {
            'image/jpeg': ['.jpeg', '.jpg'],
            'image/png': ['.png'],
            // 'image/svg+xml': ['.svg'],
            'image/webp': ['.webp'],
            'image/bmp': ['.bmp'],
            'image/gif': ['.gif'],
            'application/pdf': ['.pdf'],
            'video/mp4': ['.mp4'],
            'video/avi': ['.avi'],
            'video/mkv': ['.mkv'],
            'video/quicktime': ['.mov'],
            'video/x-ms-wmv': ['.wmv'],
            'audio/mpeg': ['.mp3'],
            'audio/wave': ['.wav'],
            'audio/wav': ['.wav'],
            'audio/ogg': ['.ogg'],
            'audio/m4a': ['.m4a'],
            'audio/aac': ['.aac'],
            'audio/flac': ['.flac'],
            'audio/wma': ['.wma'],
            'audio/midi': ['.mid', '.midi'],
            'audio/x-ms-wma': ['.wma'],
            'audio/amr': ['.amr'],
            'text/plain': ['.txt']
        },
        onDropAccepted: (e) => {
            handleUpload(e)

        },
        onDropRejected: (arquivosRejeitados) => {
            setArquivosRejeitados(arquivosRejeitados.map(arquivo => ({
                name: arquivo.file.name,
                type: arquivo.file.type,
                size: arquivo.file.size,
                errors: arquivo.errors,

            })));
            console.log(arquivosRejeitados)

        }
    });

    async function handleExcluirArquivosUpados(id: Blob) {
        await api.delete(`/utilitys/upload/delete/${id}`)
        setArquivosUpados(arquivosUpados.filter(file => file.id != id))

    }

    return (

        <div>

            <div {...getRootProps({ className: `${styles.dropzone}` })}>
                <input  {...getInputProps()} />
                <img className={styles.imgAnexo} draggable="false" src="./assets/icone anexo.svg" alt="ícone de anexo" />
                <p><strong>anexe aqui:</strong> capturas de tela, imagens, documentos e etc., caso necessário.</p>
                <button type="button" className={styles.uploadBtn} onClick={open}>
                    Procurar...
                </button>
            </div>
            <aside className={styles.filesAside}>

                {< FileList files={arquivosUpados} rejectedFiles={arquivosRejeitados} onExcluir={handleExcluirArquivosUpados} />}

            </aside>
        </div>

    );
}
