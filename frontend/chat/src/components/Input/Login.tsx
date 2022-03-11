import { VscEye } from 'react-icons/vsc'

import styles from './styles.module.scss'

interface LoginProps {
  title: string, 
  type?: string, 
  ph?: string,
  passIcon?: boolean,
}

export function InputLogin ({title,type = "text", ph = '', passIcon = false}: LoginProps) {

    return (
      <div className={styles.containerLogin}>
        <label>{title}</label>
          <div className={styles.inputLogin}>
            <input  type={type} placeholder={ph} />
            {passIcon &&
            <button className={styles.iconButton}> 
              <VscEye size='22px' color='gray'/>
            </button>
            }
          </div>
      </div>
    )
}