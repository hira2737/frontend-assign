import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Button from './Button'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Work', to: '/work' },
  { label: 'Contact', to: '/contact' }
]

function Navbar() {
  const [open, setOpen] = useState(false)

  const closeMenu = () => setOpen(false)

  return (
    <header className="navbar-wrap">
      <nav className="navbar">
        <Link to="/" className="brand" onClick={closeMenu}>
          <span className="brand-mark">N</span>
          <div className="brand-copy">
            <strong>Northstar</strong>
            <span>Studio</span>
          </div>
        </Link>

        <button
          className={`menu-toggle ${open ? 'active' : ''}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          <span />
          <span />
        </button>

        <div className={`nav-links ${open ? 'open' : ''}`}>
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => (isActive ? 'active' : '')}
              onClick={closeMenu}
            >
              {item.label}
            </NavLink>
          ))}
          <Button to="/contact" onClick={closeMenu}>
            Start a project
          </Button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
