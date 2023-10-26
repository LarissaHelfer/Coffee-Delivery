import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import styles from "./Styles.module.css";
import img from "../../assets/Illustration.png";
import { useContext, useState } from "react"; // Import useState
import { CoffeeContext, EnderecoContext } from "../../context";

const CheckOutSuccess = () => {
  const { endereco } = useContext(EnderecoContext);
  const { pagamento } = useContext(CoffeeContext);

  return (
    <div>
      <section>
        <div className={styles.tituloo}>
          <h1>Uhu! Pedido confirmado</h1>
          <p>Agora é só aguardar que logo o café chegará até você</p>
        </div>
      </section>
      <section className={styles.cardInfo}>
  <div className={styles.endereco}>
    <div>
      <MapPin size={16} className={styles.mapa} weight="fill" />
      <p>
        Entrega em
        <strong> Rua {endereco.logradouro}</strong> 
        <span>
          {endereco.bairro} - {endereco.localidade}, {endereco.uf}
        </span>
      </p>
    </div>
    <div className={styles.entrega}>
      <Timer size={16} className={styles.timer} weight="fill" />
      <p>
        Previsão de entrega
        <strong> 20 min - 30 min</strong>
      </p>
    </div>
    <div className={styles.payment}>
      <CurrencyDollar size={16} className={styles.pay} weight="fill" />
      <p>
        Pagamento na entrega
        <strong> {pagamento}</strong>
      </p>
    </div>
  </div>
</section>
      <section className={styles.imagem}>
        <img src={img} />
      </section>
    </div>
  );
};

export default CheckOutSuccess;
