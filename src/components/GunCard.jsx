import { useRef } from 'react'

function GunCard({ gun }) {
  const popup = useRef(null)

  return (
    <li className="card">
      <button className="card-btn" onClick={() => popup.current.showModal()}>
        <img className="card-img" src={gun.image} alt="" width="120" height="90" />
        <span className="name display">{gun.name}</span>
        <span className="type">
          {gun.type} · {gun.caliber}
        </span>
        <span className="price">${gun.price}</span>
      </button>

      <dialog ref={popup}>
        <img className="dialog-img" src={gun.image} alt="" />
        <p className="dialog-name display">{gun.name}</p>
        <p className="dialog-meta">
          {gun.type} · {gun.caliber}
        </p>
        <p className="dialog-desc">{gun.description}</p>
        <p className="dialog-price">${gun.price}</p>
        <button className="dialog-close" onClick={() => popup.current.close()}>
          Close
        </button>
      </dialog>
    </li>
  )
}

export default GunCard
