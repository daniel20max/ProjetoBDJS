const express = require('express')
const gamesController = require('../controllers/games.controller')
const Router = express.Router()


Router.get('/', gamesController.getGames)



module.exports = Router;
