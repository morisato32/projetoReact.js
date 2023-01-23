import styles from '../assets/css/Header.module.css'
import img1 from '../assets/img/reloj1.jpg'
import img2 from '../assets/img/reloj2.jpg'
import img3 from '../assets/img/reloj3.jpg'
import img4 from '../assets/img/reloj4.jpg'

function Produto (){
    return(
        <main className={styles.productos}>
            <h2 id= {styles.productos}>Nossos produtos</h2>
            <article>
                <img src={img1} alt="Reloj"/>
                <h2>Relogio de Luxo</h2>
                <p>Feito com os materiais de alta qualidade,trazendo uma elegância incomparavél.</p>
                <h2>Preco: $450</h2>
                <button>Ver mais</button>
            </article>

            <article>
                <img src={img2} alt="Reloj"/>
                <h2>Relogio de Luxo</h2>
                <p>Feito com os materiais de alta qualidade,trazendo uma elegância incomparavél.</p>
                <h2>Preco: $450</h2>
                <button>Ver mais</button>
            </article>

            <article>
                <img src={img3} alt="Reloj"/>
                <h2>Relogio de Luxo</h2>
                <p>Feito com os materiais de alta qualidade,trazendo uma elegância incomparavél.</p>
                <h2>Preco: $450</h2>
                <button>Ver mais</button>
            </article>

            <article>
                <img src={img4} alt="Reloj"/>
                <h2>Relogio de Luxo</h2>
                <p>Feito com os materiais de alta qualidade,trazendo uma elegância incomparavél.</p>
                <h2>Preco: $450</h2>
                <button>Ver mais</button>
            </article>
        </main>
    )
}

    


export default Produto;