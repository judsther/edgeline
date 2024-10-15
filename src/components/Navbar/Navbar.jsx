import { Link } from "react-router-dom"
import logonav from '/src/assets/images/logonav.png'
import './Navbar.css'

export const Navbar = () => {
  return (
  <div>
 
 <nav className="navbar navbar-expand-md border-bottom border-body p-0 ps-2">
  <div className="container-fluid">
    <Link to='/' className="navbar-brand">
      <img src={logonav} alt="Logo" width="40" className="imglogo d-inline-block align-text-top" />
    </Link>

    <button className="navbar-toggler navbar-toggler-custom" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse slide-in-menu" id="navbarNavAltMarkup">
      <div className="navbar-nav text-end">
        <Link to='/' className="nav-link homelink">Home</Link>
        <Link to='/services' className="nav-link">Services</Link>
        <Link to='/about-us' className="nav-link">About Us</Link>
        <Link to='/contact' className="nav-link">Contact</Link>
      </div>
    </div>
  </div>
</nav>

  </div>
  )
}


