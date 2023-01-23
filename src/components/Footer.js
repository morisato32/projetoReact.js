import styles from '../assets/css/Header.module.css'
import logo from '../assets/img/logo-DH.png'

function Footer(){
    return(
        <footer className={styles.pie}>
            <nav id= {styles.logo}>
                <a href="https://digitalhouse.com" target = "_blank" rel="noreferrer"><img src= {logo} alt="Logo Digital House"/></a>
            </nav>
            <nav id= {styles.opciones}>
                <ul>
                    <li><a href="https://facebook.com" target = "_blank" rel="noreferrer">facebook</a></li>
                    <li><a href="https://instagram.com" target = "_blank" rel="noreferrer">Instagram</a></li>
                </ul>
            </nav>
        </footer>
    )
}

export default Footer;