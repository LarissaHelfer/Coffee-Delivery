import styles from "./Styles.module.css";
import { MapPinLine } from "phosphor-react";
import { useState, useContext } from "react";
import { EnderecoContext } from "../../../context";

const Endereco = () => {
  const { endereco, setEndereco } = useContext(EnderecoContext);
  const [cep, setCep] = useState("");
  const [complemento, setComplemento] = useState("");
  const [logradouro, setLogradouro] = useState(endereco.logradouro);
  const [bairro, setBairro] = useState(endereco.bairro);
  const [localidade, setLocalidade] = useState(endereco.localidade);
  const [uf, setUf] = useState(endereco.uf);

  const handleChange = (event) => {
    setCep(event.target.value.replace(/\D/g, ""));
  };

  const getEnderecoPorCEP = () => {
    if (cep.length === 0) {
      return;
    }

    if (cep.length !== 8) {
      alert("CEP inválido");
      return;
    }

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((response) => response.json())
      .then((data) => {
        if (data.erro) {
          alert("CEP não encontrado");
        } else {
          setEndereco(data);
          setLogradouro(data.logradouro);
          setBairro(data.bairro);
          setLocalidade(data.localidade);
          setUf(data.uf);
        }
      })
      .catch((error) => {
        alert("Erro ao buscar o CEP", error);
      });
  };

  return (
    <main className={styles.main}>
      <div className={styles.endereco}>
        <MapPinLine size={22} />
        <p>Endereço de Entrega</p>
        <span>Informe o endereço onde deseja receber seu pedido</span>
      </div>
      <form className={styles.form}>
        <input
          type="text"
          placeholder="CEP"
          className={styles.cep}
          value={cep}
          onChange={handleChange}
          onBlur={getEnderecoPorCEP}
        />
        <input
          type="text"
          className={styles.rua}
          placeholder="Rua"
          value={logradouro}
          onChange={(event) => setLogradouro(event.target.value)}
        />
        <input
          type="text"
          placeholder="Número"
          className={styles.numero}
        />
        <input
          type="text"
          placeholder="Complemento Opcional"
          className={styles.complemento}
          value={complemento}
          onChange={(event) => setComplemento(event.target.value)}
        />
        <input
          type="text"
          placeholder="Bairro"
          className={styles.bairro}
          value={bairro}
          onChange={(event) => setBairro(event.target.value)}
        />
        <input
          type="text"
          placeholder="Cidade"
          className={styles.cidade}
          value={localidade}
          onChange={(event) => setLocalidade(event.target.value)}
        />
        <input
          type="text"
          className={styles.estado}
          placeholder="UF"
          value={uf}
          onChange={(event) => setUf(event.target.value)}
        />
      </form>
    </main>
  );
};

export default Endereco;
