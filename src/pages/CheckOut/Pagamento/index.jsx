import React, { useContext, useState } from 'react';
import styles from './Styles.module.css';
import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react';
import { CoffeeContext } from '../../../context';

const Pagamento = () => {
    const {pagamento, setPagamento } = useContext(CoffeeContext);

    const handlePagamentoSelecionado = (opcao) => {
        setPagamento(opcao);
        console.log(opcao)
    };

    return (
        <main className={styles.pagamento}>
            <section className={styles.pag}>
                <CurrencyDollar size={22} />
                <p>Pagamento</p>
                <span>O pagamento é feito na entrega. Escolha a forma que deseja pagar</span>
            </section>
            <section className={styles.opcoes}>
                <div onClick={() => handlePagamentoSelecionado('Cartão de Crédito')} className={pagamento === 'Cartão de Crédito' ? styles.selecionado : ''}>
                    <CreditCard size={16} />
                    <span>CARTÃO DE CRÉDITO</span>
                </div>
                <div onClick={() => handlePagamentoSelecionado('Cartão de Débito')} className={pagamento === 'Cartão de Débito' ? styles.selecionado : ''}>
                    <Bank size={16} />
                    <span>CARTÃO DE DÉBITO</span>
                </div>
                <div onClick={() => handlePagamentoSelecionado('Dinheiro')} className={pagamento === 'Dinheiro' ? styles.selecionado : ''}>
                    <Money size={16} />
                    <span>DINHEIRO</span>
                </div>
            </section>
        </main>
    );
}

export default Pagamento;
