require("dotenv").config();
const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

const allowedOrigins =
  process.env.NODE_ENV === "production"
    ? [process.env.FRONTEND_URL_PROD]
    : [process.env.FRONTEND_URL_LOCAL];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        const msg = `O CORS para origem ${origin} não está permitido.`;
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
    credentials: true,
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API funcionando");
});

const getLeagues = async () => {
  try {
    const response = await axios.get(
      "https://api-football-v1.p.rapidapi.com/v3/leagues",
      {
        headers: {
          "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
          "X-RapidAPI-Key": process.env.RAPIDAPI_KEY,
        },
      }
    );

    return response.data.response;
  } catch (error) {
    console.error(
      "Erro ao buscar ligas:",
      error.response?.data || error.message
    );
    return [];
  }
};

app.get("/api/leagues", async (req, res) => {
  console.log("Rota /api/leagues chamada");

  try {
    const leagues = await getLeagues();
    console.log("Ligas recebidas:", leagues.length);

    if (!leagues.length) {
      return res.status(404).json({ message: "Nenhuma liga encontrada." });
    }

    res.json(
      leagues.map((league) => ({
        id: league.league.id,
        nome: league.league.name,
        pais: league.country.name,
      }))
    );
  } catch (error) {
    console.error("Erro na rota /api/leagues:", error.message);
    res.status(500).json({ message: "Erro ao buscar ligas." });
  }
});

const getGamesByLeague = async (leagueId, season) => {
  try {
    const response = await axios.get(
      "https://api-football-v1.p.rapidapi.com/v3/fixtures",
      {
        params: { league: leagueId, season: season },
        headers: {
          "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
          "X-RapidAPI-Key": process.env.RAPIDAPI_KEY,
        },
      }
    );
    return response.data.response;
  } catch (error) {
    console.error(
      "Erro ao buscar jogos:",
      error.response?.data || error.message
    );
    return [];
  }
};

app.get("/api/games/:leagueId", async (req, res) => {
  const { leagueId } = req.params;
  const season = 2024;
  const today = new Date().toISOString().split("T")[0];

  try {
    const games = await getGamesByLeague(leagueId, season);
    const gamesToday = games
      .filter((game) => game.fixture.date.startsWith(today))
      .map((game) => ({
        id: game.fixture.id,
        data: game.fixture.date,
        estadio: game.fixture.venue.name,
        time_casa: {
          nome: game.teams.home.name,
          escudo: game.teams.home.logo,
        },
        time_fora: {
          nome: game.teams.away.name,
          escudo: game.teams.away.logo,
        },
      }));

    res.json(
      gamesToday.length
        ? gamesToday
        : { message: "Nenhum jogo encontrado para hoje." }
    );
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar jogos." });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

module.exports = app;
