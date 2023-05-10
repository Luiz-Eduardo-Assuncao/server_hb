const express = require("express")
const app = express()
const exphbs = require("express-handlebars")
const conn = require('./db/conn')
const Usuario = require('./models/Usuario')

const PORT = 3000
const hostname = 'localhost'

/*-------------------------------------------*/
app.use(express.urlencoded([extended]))
app.use(express.json())
app.use(express.static('public'))

/*-----------config express-handlebars-------*/
app.engine('handlebars',exphbs())
app.set('view engine','handlebars')

/*-------------------------------------------*/
conn.sync().then(()=>{
    app.listen(PORT, hostname,()=>{
        console.log(`Servidor Rodando ${hostname}:${PORT}`)
    })

}).catch((error)=>{
    console.error('Não foi'+error)
})





