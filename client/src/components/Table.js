import React from "react";
import "../assets/scss/table.scss";

const Table = ({ games = [], messages = [] }) => {
  return (
    <div id="Table">
      <h1 id="table-text">
        {messages.length > 0
          ? messages[messages.length - 1].text
          : "Partidas de Hoje"}
      </h1>

      <div className="daily-games">
        {games.length > 0 ? (
          games.map((game, index) => (
            <div key={index} className="game">
              <div className="teams-row">
                <img
                  src={game.teams.home.logo}
                  alt={game.teams.home.name}
                  className="team-logo"
                />
                <span className="versus">x</span>
                <img
                  src={game.teams.away.logo}
                  alt={game.teams.away.name}
                  className="team-logo"
                />
              </div>

              <div className="teams-names">
                <span>{game.teams.home.name}</span>
                <span>{game.teams.away.name}</span>
              </div>

              <p className="game-time">
                {new Date(game.fixture.date).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
            </div>
          ))
        ) : (
          <p>Busque por uma liga!</p>
        )}
      </div>
    </div>
  );
};

export default Table;
