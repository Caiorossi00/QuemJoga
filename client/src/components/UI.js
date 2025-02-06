import React, { useState } from "react";
import Header from "./Header";
import Table from "./Table";
import "../assets/scss/UI.scss";
import Leagues from "./Leagues";
import Info from "./Info";
import Footer from "./Footer";

const UI = () => {
  const [messages, setMessages] = useState([
    {
      text: "Partidas do Dia",
      user: false,
    },
  ]);
  const [games, setGames] = useState([]);

  const handleSendMessage = (message, gamesData) => {
    if (message) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: message, user: false },
      ]);
    } else {
      setGames(gamesData);
    }
  };

  return (
    <div id="UI">
      <div id="main">
        <div className="left-side">
          <Header onSendMessage={handleSendMessage} />
          <div>
            <Leagues />
            <Info />
          </div>
        </div>
        <div id="right-side">
          <Table games={games} messages={messages} />
        </div>
        <div id="bottom">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default UI;
