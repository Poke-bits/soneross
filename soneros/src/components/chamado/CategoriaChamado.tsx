import styles from '../../styles/chamado.module.css'
import { useState, useEffect } from 'react';
export default function CategoriaChamado({ dados, atualizarCamposHandler }) {


    let [categorias, setCategorias] = useState([])
    let [categoriasSelecionadas, setCategoriasSelecionadas] = useState({saldo:false,
    agenda:false,
    troca:false,
    pagamento:false,
    venda:false,
    acesso:false,
    escala:false,
    inadimplência:false,
    evolução:false,
    bug:false,
    outro:false,
})
    let [impacto, setImpacto] =useState({})
    let [botaoImpactoSelecionado, setBotaoImpactoSelecionado] = useState(null);
    useEffect(() => {
        const savedSelecionados = localStorage.getItem('selecionados');
        if (savedSelecionados) {
            setCategoriasSelecionadas(JSON.parse(savedSelecionados));
        }
    }, []);
    useEffect(() => {
        const savedImpacto = localStorage.getItem('impactoSelecionados');
        if (savedImpacto!==null) {
            setImpacto(JSON.parse(savedImpacto));
        }
    }, []);
    const handleClickCategoria = (btnTexto: string) => {
        const novosSelecionados = { ...categoriasSelecionadas };
        novosSelecionados[btnTexto] = !novosSelecionados[btnTexto];
        setCategoriasSelecionadas(novosSelecionados)
        localStorage.setItem('selecionados', JSON.stringify(novosSelecionados));


        if (categorias.includes(btnTexto)) {
            const novasCategorias = categorias.filter((cat) => cat !== btnTexto)
            setCategorias(novasCategorias)
            // atualizarCamposHandler('categoria', novasCategorias)

        } else {
            const novasCategorias = categorias.concat(btnTexto)
            setCategorias(novasCategorias)
            // atualizarCamposHandler('categoria', novasCategorias)
        }

    }
    const handleClickImpacto = (index:number, texto:string) => {
        
        localStorage.setItem('impactoSelecionados', JSON.stringify(index));
        setBotaoImpactoSelecionado(index);
        atualizarCamposHandler('impacto', texto);
    };

    const impactoTexto = ['Muito Baixo', 'Baixo', 'Médio', 'Alto', 'Muito Alto'];


console.log(dados)
    
    useEffect(() => {
        const obterCategoriasSelecionadas = (data) => {
          return Object.keys(data).filter(categoria => data[categoria] === true);
        };
    
        if (categoriasSelecionadas) {
          const categoria = obterCategoriasSelecionadas(categoriasSelecionadas);
          atualizarCamposHandler('categoria', categoria);
        }
      }, [categoriasSelecionadas]);
   

    return (<> <h2 className={styles.subtitle}>Selecione a categoria do chamado:*</h2>
    <div className={styles.groupBotaoCategoria}>

        <button onClick={() => { handleClickCategoria('saldo') }} className={`${styles.botaoCategoria} ${categoriasSelecionadas.saldo ? styles.botaoCategoriaSelecionado : ''}`}>saldo</button>
        <button onClick={() => { handleClickCategoria('agenda') }} className={`${styles.botaoCategoria} ${categoriasSelecionadas.agenda ? styles.botaoCategoriaSelecionado : ''}`}>agenda</button>
        <button onClick={() => { handleClickCategoria('troca') }} className={`${styles.botaoCategoria} ${categoriasSelecionadas.troca ? styles.botaoCategoriaSelecionado : ''}`}>troca</button>
        <button onClick={() => { handleClickCategoria('pagamento') }} className={`${styles.botaoCategoria} ${categoriasSelecionadas.pagamento ? styles.botaoCategoriaSelecionado : ''}`}>pagamento</button>
        <button onClick={() => { handleClickCategoria('venda') }} className={`${styles.botaoCategoria} ${categoriasSelecionadas.venda ? styles.botaoCategoriaSelecionado : ''}`}>venda</button>
        <button onClick={() => { handleClickCategoria('acesso') }} className={`${styles.botaoCategoria} ${categoriasSelecionadas.acesso ? styles.botaoCategoriaSelecionado : ''}`}>acesso</button>
        <button onClick={() => { handleClickCategoria('escala') }} className={`${styles.botaoCategoria} ${categoriasSelecionadas.escala ? styles.botaoCategoriaSelecionado : ''}`}>escala</button>
        <button onClick={() => { handleClickCategoria('inadimplência') }} className={`${styles.botaoCategoria} ${categoriasSelecionadas.inadimplência ? styles.botaoCategoriaSelecionado : ''}`}>inadimplência</button>
        <button onClick={() => { handleClickCategoria('evolução') }} className={`${styles.botaoCategoria} ${categoriasSelecionadas.evolução ? styles.botaoCategoriaSelecionado : ''}`}>evolução</button>
        <button onClick={() => { handleClickCategoria('bug') }} className={`${styles.botaoCategoria} ${categoriasSelecionadas.bug ? styles.botaoCategoriaSelecionado : ''}`}>bug</button>
        <button onClick={() => { handleClickCategoria('outro') }} className={`${styles.botaoCategoria} ${categoriasSelecionadas.outro ? styles.botaoCategoriaSelecionado : ''}`}>outro</button>
    </div>
        <h2 className={styles.subtitleImpacto}> Selecione o nível de impacto na operação:*</h2>

        <div className={styles.divImpacto}>
            <div className={styles.divImpacto}>
                {impactoTexto.map((texto, index) => (
                    <button
                        key={index}
                        onClick={() => handleClickImpacto(index, texto)}
                        className={`${styles.botaoImpacto} ${
                            botaoImpactoSelecionado !== null && index <= botaoImpactoSelecionado
                                ? styles.botaoImpactoSelecionado
                                : ''
                        } ${
                            localStorage.getItem('impactoSelecionados') !== null && index <= JSON.parse(localStorage.getItem('impactoSelecionados'))
                                ? styles.botaoImpactoSelecionado
                                : ''
                        }`}
                    >

                    </button>
                ))}
                <span className={styles.spanImpacto}>
                    {botaoImpactoSelecionado !== null ? impactoTexto[botaoImpactoSelecionado] : impactoTexto[localStorage.getItem('impactoSelecionados')]}
                </span>
            </div>
        </div>
    </>);
} 