const express = require('express')

const app = express()
const PORTA = 3000

app.get('/', (req, res) => {
  res.send('API funcionando')
})

app.listen(PORTA, () => {
  console.log(`Servidor rodando na porta ${PORTA}`)
})