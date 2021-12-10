const Game = require("../models/games")

const getGamesService = async () => {
    const games = await Game.find()
    return games
}

module.exports = {
    getGamesService,
}