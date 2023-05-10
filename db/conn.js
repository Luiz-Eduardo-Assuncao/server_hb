const {Sequelize} = require('sequelize')
const sequelize = new Sequelize('bd_dados','root','senai',{
    host: 'localhost',
    dialect:'mysql'
})
sequelize.authenticate().then(()=>{
   console.log('conexão realizda com sucesso: )')
}).catch((error)=>{
   console.error('Deu ruim')
})

module.exports = sequelize