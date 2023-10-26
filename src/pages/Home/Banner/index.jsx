import styles from "./Styles.module.css";
import img from "../../../assets/Imagem.png";
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";

export function Banner() {
  return (
    <main className={styles.home}>
      <div className={styles.text}>
        <div className={styles.titulo}>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffe Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
        </div>
        <div className={styles.caracteristicas}>
          <table className={styles.pair}>
            <tbody>
              <tr>
                <td>
                  <ShoppingCart
                    size={32}
                    weight="fill"
                    className={styles.compra}
                  />
                  <span className={styles.primeiro}>
                    Compra simples e segura
                  </span>
                </td>
                <td>
                  <Package
                    size={32}
                    weight="fill"
                    className={styles.embalagem}
                  />
                  <span>Embalagem mantém o café intacto</span>
                </td>
              </tr>
              <tr>
                <td>
                  <Timer size={32} weight="fill" className={styles.time} />
                  <span>Entrega rápida e rastreada</span>
                </td>
                <td>
                  <Coffee size={32} weight="fill" className={styles.coffe} />
                  <span>O café chega fresquinho até você</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className={styles.cafeCopo}>
        <img src={img} />
      </div>
    </main>
  );
}
