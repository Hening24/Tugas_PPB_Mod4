import { useMemo, useState } from 'react'
import GUNS from '../data/guns.js'
import GunCard from '../components/GunCard.jsx'

function Catalog({ onAddToCart }) {
  const [activeType, setActiveType] = useState('All')
  const [query, setQuery] = useState('')

  const types = useMemo(() => ['All', ...new Set(GUNS.map((gun) => gun.type))], [])

  const filtered = useMemo(() => {
    return GUNS.filter((gun) => {
      const matchType = activeType === 'All' || gun.type === activeType
      const matchQuery = gun.name.toLowerCase().includes(query.trim().toLowerCase())
      return matchType && matchQuery
    })
  }, [activeType, query])

  return (
    <>
      <section className="masthead">
        <h1 className="display">Hardware, by the spec sheet.</h1>
        <p className="lede">
          A small armory of pistols, rifles, and shotguns. Every piece listed with its
          type, caliber, and price — nothing else.
        </p>
      </section>
      <section>
        <div className="list-head">
          <h2>Current stock</h2>
          <span className="count">{filtered.length} pieces</span>
        </div>

        <div className="search-bar">
          <input
            type="search"
            className="search-input"
            placeholder="Cari nama senjata..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        <div className="filter-bar">
          {types.map((type) => (
            <button
              key={type}
              type="button"
              className={type === activeType ? 'filter-btn active' : 'filter-btn'}
              onClick={() => setActiveType(type)}
            >
              {type}
            </button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <p className="lede">no guns match</p>
        ) : (
          <ul className="stock">
            {filtered.map((gun) => (
              <GunCard key={gun.name} gun={gun} onAdd={onAddToCart} />
            ))}
          </ul>
        )}
      </section>
    </>
  )
}

export default Catalog