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
    _id: '665f1c2a9b1e8a0012a4b7c1',
    nome: 'Café',
    preco: 12.5,
    tags: ['quente', 'manhã'],
    fornecedor: { nome: 'CoopeCafé', cidade: 'Dourados' }
  },
  {
    _id: '665f1c2a9b1e8a0012a4b7c2',
    nome: 'Pão de queijo',
    preco: 4,
    tags: ['salgado', 'manhã']
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