import { useEffect, useState } from 'react'
import io from 'socket.io-client'

import { api } from '../../services/api'
import styles from './styles.module.scss'
import LogoImg from '../../assets/logo.svg'



interface MessageProps {
    id: string
    text: string
    user: {
        name: string
        avatar_url: string
    }
}

const messagesQueue: MessageProps[] =[]

const socket = io('http://localhost:5000')

socket.on('new_message',(newMessage: MessageProps) =>{
   messagesQueue.push(newMessage)
    
})

export function MessageList(){  
    const [messagesLast5, setMessagesLast5] = useState<MessageProps[]>([])

    useEffect(()=>{
         setInterval(()=>{
            if(messagesQueue.length > 0) {
                setMessagesLast5(prevState => [
                    messagesQueue[0],
                    prevState[0],
                    prevState[1],
                    prevState[2],
                    prevState[3],
                ].filter(Boolean))
                messagesQueue.shift()
            }
        }, 3000)
    },[])

    useEffect(()=>{
        api.get<MessageProps[]>('messages/last5').then(response => {
            setMessagesLast5(response.data) 
        })
    },[])


    return (
        <div className={styles.messageListWrapper}>
            <img src={LogoImg} alt='Logo Dowhile 2021' />

            <ul className={styles.messageList}>
            {
                messagesLast5?.map(message =>
                <li key={message.id} className={styles.message}>
                    <p className={styles.messageContent}>{message.text}</p>
                    <div className={styles.messageUser}>
                        <div className={styles.userImage}>
                            <img src={message.user.avatar_url} alt={message.user.name} />
                        </div>
                        <span>{message.user.name}</span>
                    </div>
                </li>
                )
            }   
            </ul>
        </div>
    )
}