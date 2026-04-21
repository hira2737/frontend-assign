import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div>
          <p className="eyebrow">Northstar Studio</p>
          <h3>We design websites that feel clear, calm, and ready to ship.</h3>
        </div>

        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/work">Work</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Built with React and Vite. Ready to deploy.</p>
        <p>hello@northstar.studio</p>
      </div>
    </footer>
  )
}

export default Footer
