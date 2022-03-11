import { useEffect } from "react"
import { useLocation } from "react-router"
import { InputLogin } from "../../components/Input/Login"
import useDocumentTitle from "../../components/TitlePage"
import { BsGithub, BsGoogle } from "react-icons/bs"


import styles from './styles.module.scss'


export function Login(){
    useDocumentTitle('login')

    return (
        <div className={styles.container}>
            <div className={styles.loginBoxWrapper}>
                <div>
                    <h1>My_chat</h1>
                    <InputLogin title="Usuario" />
                    <InputLogin title="Senha" type='password' passIcon={true} />
                    <button  className={styles.button} type="submit">Entrar</button>
                </div>
                <div className={styles.loginGitGoogle}>
                    <div className={styles.git}>
                        <BsGithub size="50px"/>
                        <h2>Entrar com Github</h2>
                    </div>
                    <div className={styles.google}>
                        <BsGoogle size="50px"/>
                        <h2>Entrar com Google</h2>
                    </div>
                </div>
            </div>
            
        </div>


    )
}