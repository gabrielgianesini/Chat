import { useContext } from 'react'
import { AuthContext } from '../contexts/auth'
import styles from './App.module.scss'
import { LoginBox } from './components/LoginBox'
import { MessageList } from './components/MessageList'
import { SendMessageForm } from './components/SendMessageForm'


export function App() {
    const { user } = useContext(AuthContext)
  //  { !!user ? <SendMessageForm /> : <LoginBox /> }
  // ${!!user ? styles.contentSigned : ''}`}>
  //     <MessageList />
  return (
    <main className={`${styles.contentWrapper}`}>
    
     
      
    </main>
  )
}


