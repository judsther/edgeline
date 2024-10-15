import { Link } from "react-router-dom"


export const Footer = () => {

  return (
    <div>

<footer className="bg-light text-center text-lg-start text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>
        <div>
          <Link to="#" className="me-4 text-reset">
            <i className="fab fa-facebook-f"></i>
          </Link>
          <Link to="#" className="me-4 text-reset">
            <i className="fab fa-twitter"></i>
          </Link>
          <Link to="#" className="me-4 text-reset">
            <i className="fab fa-instagram"></i>
          </Link>
          <Link to="#" className="me-4 text-reset">
            <i className="fab fa-linkedin"></i>
          </Link>
        </div>
      </section>

      <section>
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-4 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-gem me-3"></i>Edgeline Installations LLC
              </h6>
              <p>
                We specialize in finish carpentry and offer top-notch installation services.
              </p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Products</h6>
              <p><Link to="/services" className="text-reset">Baseboards</Link></p>
              <p><Link to="/services" className="text-reset">Doors</Link></p>
              <p><Link to="/services" className="text-reset">Shelving</Link></p>
            </div>

            <div className="col-md-5 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p><i className="fas fa-home me-3"></i>Arizona, USA</p>
              <p><i className="fas fa-envelope me-3"></i>datoscomyvent@gmail.com</p>
              <p><i className="fas fa-phone me-3"></i>602-884-6043</p>
            </div>
          </div>
        </div>
      </section>

      <div className="text-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2024 Copyright:
        <Link className="text-reset fw-bold" to="https://edgelineinstallations.com">Edgeline Installations LLC</Link>
      </div>
    </footer>

    </div>
  )
}


