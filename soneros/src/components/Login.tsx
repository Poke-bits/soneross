'use client';
import React, { useContext,useState } from 'react';
import styles from '../styles/Login.module.css'
import { AuthContext } from '../context/AuthContext';

export default function Login() {
  const [senha, setSenha] = useState('');
  const [email, setEmail] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false);

  const  {singIn}  = useContext(AuthContext)
  
  const handleChange = (e) => {
    console.log(e)
    const { name, value } = e;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'senha') {
      setSenha(value);
    }
  };
  const toggleMostrarSenha = () => {
    setMostrarSenha(!mostrarSenha);
  };
  async function handleSingIn(data) {
  
    try {
      await singIn(data)
    } catch (error) {
      console.log(error)
    }


  }
  return (<>
    <div className={styles.login}>

      <img src="/assets/imgLoginSoneros.svg" draggable="false" className={styles.logo} alt="login soneros" />


      <div className={styles.divInputLogin}>
        <label className={styles.lblEmail} htmlFor="Email">Email de Acesso:</label>
        <input type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e)=>handleChange(e.target)} className={styles.inptEmail} />
      </div>
      <div className={styles.divInputSenha}>
        <label className={styles.lblSenha} htmlFor="Senha">Senha:</label>
        <input  type={mostrarSenha ? 'text' : 'password'}
        id="senha"
        name="senha"
        value={senha}
        onChange={(e)=>handleChange(e.target)} className={styles.inptSenha} /><span onClick={toggleMostrarSenha} className={styles.passwordToggle}></span>
        <p className={styles.pSenha}>esqueceu a senha?</p>
      </div>

      <button onClick={()=>handleSingIn({email,senha})} className={styles.btnLogin}>LOGIN</button>
    </div>

  </>)

}