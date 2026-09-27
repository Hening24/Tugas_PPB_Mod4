import GUNS from '../data/guns.js'
import GunCard from '../components/GunCard.jsx'

function Catalog() {
  return (
    <>
      <section className="masthead">
        <h1 className="display">Hardware, by the spec sheet.</h1>
        <p className="lede">
          A small armory of pistols, rifles, and shotguns. Every piece listed with its
          type, caliber, and price — nothing else.
        </p>
      </section>

      <ul className="card-list">
        {GUNS.map((gun) => (
          <GunCard key={gun.name} gun={gun} />
        ))}
      </ul>
    </>
  )
}

export default Catalog
