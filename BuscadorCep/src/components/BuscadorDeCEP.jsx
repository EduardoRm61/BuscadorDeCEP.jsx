import React, { useState } from 'react';
import './BuscadorDeCEP.css';

const BuscadorDeCEP = () => {
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState(null);
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState('');

  const buscarCEP = async () => {
    // Validação de formato (apenas 8 dígitos numéricos)
    const cepNumerico = cep.replace(/\D/g, '');
    if (cepNumerico.length !== 8) {
      setErro('CEP inválido. Digite 8 números.');
      setEndereco(null);
      return;
    }

    setCarregando(true);
    setErro('');
    setEndereco(null);

    try {
      const response = await fetch(`https://viacep.com.br/ws/${cepNumerico}/json/`);
      const data = await response.json();

      if (data.erro) {
        setErro('CEP não encontrado.');
      } else {
        setEndereco(data);
      }
    } catch (err) {
      setErro('Erro ao buscar o CEP. Tente novamente.');
    } finally {
      setCarregando(false);
    }
  };

  const limparBusca = () => {
    setCep('');
    setEndereco(null);
    setErro('');
    setCarregando(false);
  };

  return (
    <div className="container">
      <div className="buscador-card">
        <h1>Buscador de CEP</h1>
        <div className="input-group">
          <input
            type="text"
            placeholder="Digite o CEP (somente números)"
            value={cep}
            onChange={(e) => {
              const valor = e.target.value.replace(/\D/g, '');
              setCep(valor);
            }}
            maxLength="8"
          />
          <button onClick={buscarCEP}>Buscar</button>
          <button className="limpar-btn" onClick={limparBusca}>Limpar</button>
        </div>

        {carregando && <p className="status-message">Carregando...</p>}
        {erro && <p className="status-message erro-message">{erro}</p>}

        {endereco && !erro && (
          <div className="endereco-info">
            <h2>Endereço Encontrado:</h2>
            <p><strong>Logradouro:</strong> {endereco.logradouro}</p>
            <p><strong>Bairro:</strong> {endereco.bairro}</p>
            <p><strong>Cidade:</strong> {endereco.localidade}</p>
            <p><strong>Estado:</strong> {endereco.uf}</p>
            <p><strong>DDD:</strong> {endereco.ddd}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BuscadorDeCEP;