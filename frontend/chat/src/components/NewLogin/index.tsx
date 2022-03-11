import { useEffect } from "react"
import { useLocation } from "react-router"
import useDocumentTitle from "../TitlePage"

import styles from './styles.module.scss'


export function NewLogin( ){
    useDocumentTitle('login')
    return (
        <div className={styles.loginBoxWrapper}>
            <h1>My_chat</h1>
            Usuario
            Senha

            Entrar
        </div>


    )
}