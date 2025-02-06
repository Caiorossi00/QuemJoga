require("dotenv").config();
const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: "*" }));

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
  try {
    const leagues = await getLeagues();

    if (!leagues || leagues.length === 0) {
      return res.status(404).json({ message: "Nenhuma liga encontrada." });
    }

    const formattedLeagues = leagues.map((league) => ({
      id: league.league.id,
      nome: league.league.name,
      país: league.country.name,
    }));

    res.json(formattedLeagues);
  } catch (error) {
    console.error(
      "Erro ao buscar ligas:",
      error.response?.data || error.message
    );
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

    if (!games || games.length === 0) {
      return res
        .status(404)
        .json({ message: "Nenhum jogo encontrado para hoje." });
    }

    const gamesToday = games.filter((game) =>
      game.fixture.date.startsWith(today)
    );

    res.json(gamesToday);
  } catch (error) {
    console.error(
      "Erro ao buscar jogos:",
      error.response?.data || error.message
    );
    res.status(500).json({ message: "Erro ao buscar jogos." });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
