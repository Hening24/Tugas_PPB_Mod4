import InstallButton from './InstallButton.jsx'

const NAV = ['Catalog', 'About', 'Contact']

function Header({ tab, onTab, cartCount = 0 }) {
  return (
    <header className="header">
      <span className="brand display">Bore &amp; Barrel</span>
      <nav className="nav">
        {NAV.map((item) => (
          <button
            key={item}
            type="button"
            className={tab === item ? 'nav-link active' : 'nav-link'}
            onClick={() => onTab(item)}
          >
            {item}
          </button>
        ))}
        <button
          type="button"
          className={tab === 'Cart' ? 'nav-link nav-cart active' : 'nav-link nav-cart'}
          onClick={() => onTab('Cart')}
        >
          Keranjang
          {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
        </button>
        <InstallButton />
      </nav>
    </header>
  )
}

export default Header