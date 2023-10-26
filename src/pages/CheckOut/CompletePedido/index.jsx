import React, { useContext, useState, useEffect } from "react";
import styles from "./Styles.module.css";
import { Minus, Plus, Trash } from "phosphor-react";
import { CoffeeContext } from "../../../context";
import { Link } from "react-router-dom";

const valorEntrega = 3.5;

const CompletePedido = () => {
  const { selectedItems, setSelectedItems, countCoffee, setCountCoffee } = useContext(CoffeeContext);

  const itensNoCarrinho = selectedItems.filter((item) => item.quantidade > 0);

  useEffect(() => {
    setCountCoffee(selectedItems.map(item => item.quantidade));
  }, [selectedItems]);

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

  const removerCafe = (index) => {
    const atualizaCafe = selectedItems.filter((item, i) => i !== index);
    setSelectedItems(atualizaCafe);
  };

  const calcularValorTotal = (itens) => {
    return itens.reduce(
      (total, item, index) => total + item.price * countCoffee[index],
      0
    );
  };
  // useEffect(() => {
  //   setSelectedItems((prevSelectedItems) =>
  //     prevSelectedItems.map((item, index) => ({
  //       ...item,
  //       quantidade: countCoffee[index],
  //     }))
  //   );
  // }, [countCoffee]);
  
  return (
    <div className={styles.carrinhoContainer}>
      <div>
        {itensNoCarrinho.map((item, index) => (
          <div key={item.id} className={styles.carrinhoItem}>
            <div className={styles.infoQuadrado}>
              <div className={styles.carrinhoInfo}>
                <img src={item.imagem} alt={item.nomeCafe} />
                <p>{item.nomeCafe}</p>
                <div className={styles.carrinho}>
                  <div className={styles.quant}>
                    <Minus
                      className={styles.menos}
                      onClick={() => menosCafe(index)}
                    />
                    <a>{countCoffee[index]}</a>
                    <Plus
                      className={styles.mais}
                      onClick={() => somaCafe(index)}
                    />
                  </div>
                  <div className={styles.trash}>
                    <Trash size={16} />
                    <span onClick={() => removerCafe(index)}>REMOVER</span>
                  </div>
                </div>
              </div>
              <p className={styles.valor}>
                R${" "}
                {(item.price * countCoffee[index]).toFixed(2).replace(".", ",")}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.carrinhoTotal}>
        <p>
          Total de itens
          <span>
            R${" "}
            {calcularValorTotal(itensNoCarrinho).toFixed(2).replace(".", ",")}
          </span>
        </p>
        <p className={styles.entrega}>
          Entrega
          <span>R$ {valorEntrega.toFixed(2).replace(".", ",")}</span>
        </p>
        <p className={styles.totalPedido}>
          Valor
          <span>
            R${" "}
            {(calcularValorTotal(itensNoCarrinho) + valorEntrega).toFixed(2).replace(".", ",")}
          </span>
        </p>
      </div>
      <div className={styles.confirmarPedido}>
        <Link to="/checkoutSuccess">
          <span>CONFIRMAR PEDIDO</span>
        </Link>
      </div>
    </div>
  );
};

export default CompletePedido;
