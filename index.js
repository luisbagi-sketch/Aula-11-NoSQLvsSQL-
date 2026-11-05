const express = require('express')

const app = express()
const cors = require('cors')
app.use(cors())
const PORTA = 3000

app.get('/', (req, res) => {
  res.send('API funcionando')
})

const produtos = [
  {
    _id: '65f1a2b3c4d5e6f7a8b9c0d1',
    nome: 'Caderno',
    preco: 12.9,
    fornecedor: { nome: 'Papelaria Central', cidade: 'Nova Andradina' }
  },
  {
    _id: '65f1a2b3c4d5e6f7a8b9c0d2',
    nome: 'Caneta',
    preco: 3.5,
    ativo: true
  },
  {
    _id: '65f1a2b3c4d5e6f7a8b9c0d3',
    nome: 'Lápis',
    preco: 2,
    tags: ['escritório']
  }
]

app.get('/produtos', (req, res) => {
  res.json(produtos)
})

app.get('/produtos/:id', (req, res) => {
  const produto = produtos.find(p => p._id === req.params.id)
  if (!produto) {
    return res.status(404).json({ mensagem: 'Produto não encontrado' })
  }
  res.json(produto)
})

app.get('/vazio', (req, res) => {
  res.json([])
})

app.get('/erro', (req, res) => {
  res.status(500).json({ mensagem: 'Erro no servidor' })
})

app.listen(PORTA, () => {
  console.log(`Servidor rodando na porta ${PORTA}`)
})