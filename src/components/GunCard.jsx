import { useRef } from 'react'

function GunCard({ gun, onAdd }) {
  const popup = useRef(null)

  function handleAdd(e) {
    e.stopPropagation()
    onAdd(gun)
  }

  return (
    <li className="card">
      <button
        type="button"
        className="card-open"
        onClick={() => popup.current.showModal()}
      >
        <img className="card-img" src={gun.image} alt="" width="120" height="90" />
        <span className="name display">{gun.name}</span>
        <span className="type">
          {gun.type} · {gun.caliber}
        </span>
        <span className="price">${gun.price.toLocaleString()}</span>
      </button>

      <button type="button" className="card-add" onClick={handleAdd}>
        + Keranjang
      </button>

      <dialog
        className="popup"
        ref={popup}
        onClick={(e) => e.target === popup.current && popup.current.close()}
      >
        <img className="popup-img" src={gun.image} alt="" width="240" height="180" />
        <h3 className="display">{gun.name}</h3>
        <p className="type">
          {gun.type} · {gun.caliber} · <span className="price">${gun.price.toLocaleString()}</span>
        </p>
        <p>{gun.description}</p>
        <div className="popup-actions">
          <button type="button" className="popup-add" onClick={handleAdd}>
            + Keranjang
          </button>
          <form method="dialog">
            <button className="popup-close">Close</button>
          </form>
        </div>
      </dialog>
    </li>
  )
}

export default GunCard