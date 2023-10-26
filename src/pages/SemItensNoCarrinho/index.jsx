import { ShoppingCartSimple, Smiley, SmileySad } from 'phosphor-react';
import styles from './Styles.module.css'
import { Link } from 'react-router-dom';

const SemItensNoCarrinho = () =>{
return (
    <div>
    <section className={styles.carVazio}>
       <div className={styles.sad}>
        <h1>Seu carrinho está vazio <SmileySad size={40} /></h1>
       </div>
       <div className={styles.happy}>
        <p>Retorne ao nosso catálogo e escolha seu café <Smiley size={30} /></p>
       </div>
       <div className={styles.retornar}>
        <Link to="/">
            <span>Retornar ao catálogo <ShoppingCartSimple size={24} className={styles.carCompra} /></span>
        </Link>
       </div>
    </section>
    </div>
)
}

export default SemItensNoCarrinho;