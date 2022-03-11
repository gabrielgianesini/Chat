import { useContext, useEffect } from 'react'
import { useLocation } from 'react-router'
import { AuthContext } from '../contexts/auth'
import styles from './App.module.scss'
import { Router } from './routes'


export function App() {
    const { user } = useContext(AuthContext)
  //  { !!user ? <SendMessageForm /> : <LoginBox /> }
  // ${!!user ? styles.contentSigned : ''}`}>
  //     <MessageList />


  return (
      <main>
          <Router />
      </main>
  )
}


