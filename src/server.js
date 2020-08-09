const express = require('express')
const server = express()
const nunjucks = require('nunjucks')
const format = require('./utils/format')
const { pageLanding, pageGiveClasses, pageStudy, saveClasses } = require('./pages')

nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

server.use(express.static("public"))
server.use(express.urlencoded({ extended: true }))

//renderização das paginas

server.get("/", pageLanding)
server.get("/study", pageStudy)
server.get("/give-classes", pageGiveClasses)
server.post("/save-classes", saveClasses)

//porta em que o servidor será aberto (localhost:3000)
server.listen(3000)