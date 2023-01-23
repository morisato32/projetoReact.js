import logo from '../assets/img/logo-DH.png'
import styles from '../assets/css/Header.module.css'
function Header (){
    return(
        <header>
            <a href={logo} target = "_blank" rel="noreferrer" id ="logo">
                <img src={logo} alt="Logo Digital House" />
            </a>
            <ul id={styles.opciones}>
                <li><a href="Inicio">Inicio</a></li>
                <li><a href="Nosotros">Nosotros</a></li>
                <li><a href="productos">Productos</a></li>
                <li><a href="contacto">Contacto</a></li>
            </ul>
        </header>
    )
}

export default Header;