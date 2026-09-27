import { useState } from 'react'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Catalog from './pages/Catalog.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import './App.css'

function App() {
  const [tab, setTab] = useState('Catalog')

  const pages = { Catalog, About, Contact }
  const Page = pages[tab]

  return (
    <div className="shell">
      <Header tab={tab} onTab={setTab} />
      <main className="main">
        <Page />
      </main>
      <Footer />
    </div>
  )
}

export default App
