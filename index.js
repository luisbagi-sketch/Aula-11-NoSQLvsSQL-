const express = require('express')

const app = express()
const PORTA = 3000

app.get('/', (req, res) => {
  res.send('API funcionando')
})

const produtos = [
  { _id: '665f1c2a9b1e8a0012a4b7c1', nome: 'Café', preco: 12.5 }
]

app.get('/produtos', (req, res) => {
  res.json(produtos)
})

app.listen(PORTA, () => {
  console.log(`Servidor rodando na porta ${PORTA}`)
})