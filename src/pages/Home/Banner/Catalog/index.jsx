import { useContext, useEffect, useState } from "react";
import styles from "./Styles.module.css";
import { Minus, Plus, ShoppingCartSimple } from "phosphor-react";
import { api } from "../../../../components/lib/axios";
import { CoffeeContext } from "../../../../context";

const Catalogo = () => {
  const { selectedItems, setSelectedItems, countCoffee, setCountCoffee} = useContext(CoffeeContext);
  const [coffee, setCoffee] = useState([]);

  useEffect(() => {
    api
      .get("/coffee")
      .then((response) => {
        setCoffee(response.data);
        const initialCounters = new Array(response.data.length).fill(1);
        setCountCoffee(initialCounters);
      })
      .catch((error) => {
        console.error("Erro na requisição", error);
      });
  }, []);

  const somaCafe = (index) => {
    const newCount = [...countCoffee];
    newCount[index] += 1;
    setCountCoffee(newCount);
  };

  const menosCafe = (index) => {
    if (countCoffee[index] > 0) {
      const newCount = [...countCoffee];
      newCount[index] -= 1;
      setCountCoffee(newCount);
    }
  };

  const valorTotal = (item, index) => {
  return item.price * countCoffee[index];
};


  const adicionarAoCarrinho = (item, quantidade) => {
    const novoItem = {
      ...item,
      quantidade: quantidade
    };
  
    const itemExistente = selectedItems.find((i) => i.id === item.id);
    if (itemExistente) {
      itemExistente.quantidade += quantidade;
      setSelectedItems([...selectedItems]);
    } else {
      setSelectedItems([...selectedItems, novoItem]);
    }
  };

  return (
    <div className={styles.nossoCafe}>
      <h1>Nossos cafés</h1>
      <div className={styles.cafe}>
        {coffee.map((item, index) => (
          <div key={item.id} className={styles.cafes}>
            <img src={item.imagem} alt={item.nomeCafe} />
            <div className={styles.carac}>
              <span className={styles.tipo}>{item.categoria}</span>
              <h2>{item.nomeCafe}</h2>
              <p className={styles.decricao}>{item.descricaoCurta}</p>
              <section className={styles.preco}>
                <span>
                  R${" "}
                  <p>{valorTotal(item, index).toFixed(2).replace(".", ",")}</p>
                </span>
                <div className={styles.carrinho}>
                  <Minus
                    className={styles.menos}
                    onClick={() => menosCafe(index)}
                  />
                  <span>{countCoffee[index]}</span>
                  <Plus
                    className={styles.mais}
                    onClick={() => somaCafe(index)}
                  />
                </div>
                <ShoppingCartSimple
                  onClick={() => adicionarAoCarrinho(item, countCoffee[index])}
                  weight="fill"
                  size={22}
                  className={styles.car}
                />
              </section>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Catalogo;
