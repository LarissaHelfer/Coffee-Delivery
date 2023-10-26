import styles from "./Styles.module.css";
import Endereco from "./Endereco";
import Pagamento from "./Pagamento";
import CompletePedido from "./CompletePedido";
import { useContext } from "react";
import { CoffeeContext } from "../../context";
import SemItensNoCarrinho from "../SemItensNoCarrinho";

function Checkout() {

  const { selectedItems} = useContext(CoffeeContext);

  const itensNoCarrinho = selectedItems.filter((item) => item.quantidade > 0);

  if (itensNoCarrinho.length === 0) {
    return <SemItensNoCarrinho />;
  }
  return (
    <div className={styles.checkout}>
      <h2>Complete seu pedido</h2>
      <Endereco />
      <Pagamento />
      <section className={styles.pedido}>
        <h2>Cafés selecionados</h2>
        <CompletePedido />
      </section>
    </div>
  );
}

export default Checkout;
