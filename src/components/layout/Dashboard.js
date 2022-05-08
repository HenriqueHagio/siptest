import styles from './Dashboard.module.css'
import Container from "./Container"
import {Link} from 'react-router-dom'
import {TiChartPie} from 'react-icons/ti'
import {GiCash} from 'react-icons/gi'
import {IoIosPeople} from 'react-icons/io'
import {MdAdminPanelSettings,MdRequestPage} from 'react-icons/md'
import {BsSunglasses} from 'react-icons/bs'

function Dashboard(){
    return(
        <nav className={styles.dashboard}>
        <Container>
        <h1 className={styles.logo} >
            LOGO
        </h1>
        <ul className={styles.list}>
            <li className={styles.item} >
                <Link to="/"><TiChartPie/> Dashboard</Link>
            </li>
            <li className={styles.item} >
                <Link to="/pedidos" ><MdRequestPage/> Pedidos</Link> 
            </li>
            <li className={styles.item} > 
                <Link to="/produtos" > <BsSunglasses/> Produtos</Link>
            </li>
            <li className={styles.item} > 
                <Link to="/clientes" ><IoIosPeople/> Clientes</Link>
            </li>
            <li className={styles.item} >
                <Link to="/financeiro" > <GiCash/> Financeiro</Link>
            </li>
            <li className={styles.item} > 
                <Link to="/usuarios" ><MdAdminPanelSettings/> Usuários</Link>
            </li>
        </ul>
        </Container>
        </nav>
    )
}

export default Dashboard