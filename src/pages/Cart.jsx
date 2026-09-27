function Cart({ cart, onRemove, onUpdateQty }) {
  const total = cart.reduce((sum, item) => sum + item.gun.price * item.qty, 0)

  if (cart.length === 0) {
    return (
      <div className="page">
        <h1 className="display">Keranjang kosong.</h1>
        <p className="lede">Belum ada senjata yang ditambahkan. Kembali ke Catalog untuk memilih.</p>
      </div>
    )
  }

  return (
    <div className="page">
      <h1 className="display">Keranjangmu.</h1>
      <ul className="cart-list">
        {cart.map((item) => (
          <li key={item.gun.name} className="cart-item">
            <img className="cart-img" src={item.gun.image} alt="" width="72" height="54" />
            <div className="cart-info">
              <span className="name display">{item.gun.name}</span>
              <span className="type">
                {item.gun.type} · ${item.gun.price.toLocaleString()}
              </span>
            </div>
            <div className="qty-controls">
              <button type="button" onClick={() => onUpdateQty(item.gun.name, item.qty - 1)}>
                -
              </button>
              <span>{item.qty}</span>
              <button type="button" onClick={() => onUpdateQty(item.gun.name, item.qty + 1)}>
                +
              </button>
            </div>
            <span className="cart-subtotal">${(item.gun.price * item.qty).toLocaleString()}</span>
            <button type="button" className="cart-remove" onClick={() => onRemove(item.gun.name)}>
              Hapus
            </button>
          </li>
        ))}
      </ul>
      <div className="cart-total">
        <span>Total</span>
        <span className="price">${total.toLocaleString()}</span>
      </div>
    </div>
  )
}

export default Cart