'use client';
import { createContext, useState } from "react";
import { setCookie } from 'nookies'
import Router from "next/router";
import axios from "axios";

export const AuthContext = createContext({})
export function AuthProvider({ children }) {
    const [user, setUser] = useState(null)
    const isAutenticated = !!user;
   async function singIn({ email, senha }) {
        const { data: { token, user } } = await axios.post('http://localhost:8000/login', { email: email, senha: senha });
        setCookie(undefined, 'jwtToken', token, {
            maxAge: 24 * 60 * 60 * 1000// one day
        })
        console.log("fez o token")
        setUser(user)
        console.log('tentou redirecionar')
        Router.push('/chamado')


    }
    return (<AuthContext.Provider value={{ user, singIn, isAutenticated }}>{children}</AuthContext.Provider>)
}
