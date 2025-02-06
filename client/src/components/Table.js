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
              <h1>
                {game.teams.home.name} x {game.teams.away.name}
              </h1>
              <p>
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
