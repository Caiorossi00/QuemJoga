import React, { useState, useEffect } from "react";
import suarez from "../assets/images/suarez.png";
import axios from "axios";
import "../assets/scss/header.scss";

const API_URL = process.env.REACT_APP_API_URL;

const Header = ({ onSendMessage }) => {
  const [inputValue, setInputValue] = useState("");
  const [ligas, setLigas] = useState([]);

  useEffect(() => {
    const fetchLigas = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/leagues`);
        setLigas(response.data);
      } catch (error) {
        console.error("Erro ao buscar as ligas:", error);
        onSendMessage("Erro ao carregar ligas. Tente recarregar a página.");
      }
    };

    fetchLigas();
  }, [onSendMessage]);

  const handleSendMessage = async () => {
    const query = inputValue.trim().toLowerCase();
    if (query === "") return;

    if (!Array.isArray(ligas) || ligas.length === 0) {
      onSendMessage("Ligas ainda não carregadas. Tente novamente.");
      return;
    }

    const ligaSelecionada = ligas.find(
      (liga) => liga.nome.toLowerCase() === query
    );

    if (!ligaSelecionada) {
      onSendMessage("Liga não encontrada. Tente novamente.");
      setInputValue("");
      return;
    }

    try {
      const response = await axios.get(
        `${API_URL}/api/games/${ligaSelecionada.id}`
      );

      const gamesData = response.data;

      if (!gamesData || (Array.isArray(gamesData) && gamesData.length === 0)) {
        onSendMessage("Nenhum jogo encontrado para hoje.");
      } else if (gamesData.message) {
        onSendMessage(gamesData.message);
      } else {
        onSendMessage(null, gamesData);
      }
    } catch (error) {
      console.error("Erro ao buscar os jogos:", error);
      onSendMessage("Erro ao buscar os jogos. Tente novamente mais tarde.");
    }

    setInputValue("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div id="header">
      <div className="header-content">
        <h1>Que Liga quer acompanhar hoje?</h1>
        <div className="header-input">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Digite aqui..."
            onKeyPress={handleKeyPress}
            autoComplete="off"
          />
          <button onClick={handleSendMessage} aria-label="Buscar liga">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
      </div>

      <div className="header-image">
        <img src={suarez} alt="Imagem do jogador Luis Suarez" />
      </div>
    </div>
  );
};

export default Header;
