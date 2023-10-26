import React, { createContext, useState, useEffect, useContext } from 'react';
import { api } from '../components/lib/axios';

export const CoffeeContext = createContext();
export const EnderecoContext = createContext();

export function CoffeeProvider({ children }) {
  const [selectedItems, setSelectedItems] = useState([]);
  const [countCoffee, setCountCoffee] = useState([]);
  const [coffeeData, setCoffeeData] = useState([]);
  const [pagamento, setPagamento] = useState([])

  async function fetchCoffee() {
    try {
      const response = await api.get("/coffee");
      setCoffeeData(response.data);
      setCountCoffee(new Array(response.data.length).fill(1));
    } catch (error) {
      console.error("Erro no fetch coffee:", error);
    }
  }

  useEffect(() => {
    fetchCoffee();
  }, []);

  return (
    <CoffeeContext.Provider value={{ selectedItems, setSelectedItems, countCoffee, setCountCoffee, coffeeData, pagamento, setPagamento }}>
      {children}
    </CoffeeContext.Provider>
  );
}

export function EnderecoProvider({ children }) {
  const [endereco, setEndereco] = useState({});

  async function fetchEndereco(cep) {
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      if (!response.ok) {
        throw new Error('Erro ao buscar informações de endereço');
      }
  
      const data = await response.json();
  
      if (data.erro) {
        throw new Error('CEP não encontrado');
      }
  
      setEndereco({
        logradouro: data.logradouro,
        bairro: data.bairro,
        localidade: data.localidade,
        uf: data.uf
      });
    } catch (error) {
      console.error('Erro ao buscar informações de endereço:', error);
    }
  }

  return (
    <EnderecoContext.Provider value={{ endereco, setEndereco, fetchEndereco }}>
      {children}
    </EnderecoContext.Provider>
  );
}
