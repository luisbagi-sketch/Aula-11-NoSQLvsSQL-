import { useEffect, useState } from 'react'

const URL_API = 'http://localhost:3000/produtos'

function App() {
  const [itens, setItens] = useState([])
  const [carregando, setCarregando] = useState(true)
  const [erro, setErro] = useState('')

  useEffect(() => {
    const controle = new AbortController()
    async function buscarItens() {
      try {
        const resp = await fetch(URL_API, { signal: controle.signal })
        if (!resp.ok) {
          throw new Error(`HTTP ${resp.status}`)
        }
        const data = await resp.json()
        setItens(data)
        setCarregando(false)
      } catch (e) {
        if (e.name !== 'AbortError') {
          setErro('Não foi possível carregar os dados')
          setCarregando(false)
        }
      }
    }
    buscarItens()
    return () => controle.abort()
  }, [])

  if (carregando) {
    return <p>Carregando...</p>
  }

  if (erro !== '') {
    return <p style={{ color: 'red' }}>{erro}</p>
  }

  if (itens.length === 0) {
    return <p>Nenhum item encontrado</p>
  }

  return (
    <main>
      <h1>Produtos</h1>
      <ul>
        {itens.map(item => (
          <li key={item._id ?? item.id}>
            {item.nome} — R$ {item.preco}
          </li>
        ))}
      </ul>
    </main>
  )
}

export default App