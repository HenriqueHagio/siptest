import {AiOutlineLogout} from 'react-icons/ai'
import styles from './Footer.module.css'

function Footer(){
    return(
        <footer className={styles.footer}>
        <ul className={styles.logout} >
            <li><AiOutlineLogout/></li>
            <li>Logout</li>
        </ul>
        </footer>
    )
}

export default Footer