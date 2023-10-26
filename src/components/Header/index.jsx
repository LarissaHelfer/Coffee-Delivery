import { Link } from "react-router-dom";
import logo from "../../assets/Logo.svg";
import styles from "./Styles.module.css";
import { MapPin, ShoppingCart } from "phosphor-react";
import { useContext, useEffect, useState } from "react";
import { CoffeeContext } from "../../context";

const Header = () => {
  const { selectedItems } = useContext(CoffeeContext);
  const [totalItensNoCarrinho, setTotalItensNoCarrinho] = useState(0);

  useEffect(() => {
    const newTotalItensNoCarrinho = selectedItems.reduce(
      (total, item) => total + item.quantidade,
      0
    );
    setTotalItensNoCarrinho(newTotalItensNoCarrinho);
  }, [selectedItems]);

  return (
    <nav className={styles.header}>
      <Link to="/">
        <img src={logo} alt="Logo" />
      </Link>
      <div className={styles.locale}>
        <div className={styles.localizacao}>
          <MapPin size={22} weight="fill" className={styles.mapa} />
          <span>Santa Cruz do Sul, RS</span>
        </div>
        <div className={styles.quant}>
          <Link to="/checkout">
            <ShoppingCart size={22} weight="fill" className={styles.carrinhoCompra} />
            <span className={styles.quantidade}>{totalItensNoCarrinho} </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;


