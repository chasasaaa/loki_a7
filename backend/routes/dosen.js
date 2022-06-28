const express = require('express')
const server = express.Router()
const controllers = require('../controllers/index.js')
const VerifyToken = require('../middleware/VerifyToken.js')
const CekDosen = require('../middleware/CekDosen.js')

server.get('/dosen', (req, res) => {
    res.render("logindosen")
})
server.post('/loginDosen', controllers.auth.loginDosen)
server.get('/homeDosen',VerifyToken, controllers.dosen.home)

module.exports = server