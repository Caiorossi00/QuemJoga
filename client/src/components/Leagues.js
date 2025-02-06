import React, { useEffect, useState } from "react";
import axios from "axios";
import ligasDisplay from "../assets/data";
import "../assets/scss/leagues.scss";

const Leagues = () => {
  const [ligas, setLigas] = useState([]);

  useEffect(() => {
    const fetchLigas = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/leagues");
        setLigas(response.data);
      } catch (error) {
        console.error("Erro ao buscar as ligas:", error);
      }
    };

    fetchLigas();
  }, []);

  return (
    <div id="Leagues">
      <h1>Mais Buscadas</h1>

      <div id="leagues-display">
        {ligasDisplay.length > 0 ? (
          ligasDisplay.map((league) => (
            <div key={league.id} className="league">
              <img src={league.foto} alt={league.nome} />
              <p>{league.nome}</p>
            </div>
          ))
        ) : (
          <p>Carregando ligas...</p>
        )}
      </div>
    </div>
  );
};

export default Leagues;
