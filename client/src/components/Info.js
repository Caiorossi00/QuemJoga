import React from "react";
import "../assets/scss/info.scss";

const Info = () => {
  return (
    <div id="Info">
      <div className="info-tabs">
        <div className="info tab1">
          <img
            src="https://t3.ftcdn.net/jpg/04/10/34/74/360_F_410347485_aRPHoqThq8ge92nqmgaEBJNfx0M1brq1.jpg"
            alt="info"
          />
          <h1>1- Busque o nome da sua liga favorita</h1>
        </div>
        <div className="info tab2">
          <img
            src="https://t3.ftcdn.net/jpg/04/10/34/74/360_F_410347485_aRPHoqThq8ge92nqmgaEBJNfx0M1brq1.jpg"
            alt="info"
          />
          <h1>2- Veja os jogos que acontecerão hoje</h1>
        </div>
        <div className="info tab3">
          <img
            src="https://img.freepik.com/premium-vector/graffiti-spray-crown-icon-with-spray-black-white-vector-illustration_36380-589.jpg"
            alt="info"
            className="crown"
          />
          <h1>3- Aproveite e não perca nenhum jogo!</h1>
        </div>
      </div>
    </div>
  );
};

export default Info;
