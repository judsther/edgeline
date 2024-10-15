import { Navbar } from '/src/components/Navbar/Navbar';
import { Banner } from '/src//pages/Home/components/Banner';
import './Home.css'
import redologo from '/src/assets/images/redologo.png'
import { Link } from 'react-router-dom';

//import woodimage from '../../../assets/images/wood-image.jpg'
//import carpentry2 from '../../../assets/images/carpentry2.jpg'

export const Home = () => {
  return (
    <div>
        <Navbar/>
      <Banner/>
      {/* Section 2: Company Features */}
      <section className="features-section bg-dark text-white pt-5 pb-4">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-4 col-sm-6 mb-4">
              <i className="bi bi-tools fs-1 mb-3"></i> {/* Bootstrap Icons */}
              <h3>Quality Work</h3>
              <p>High-standard installations you can trust.</p>
            </div>
            <div className="col-md-4 col-sm-6 mb-4">
              <i className="bi bi-clock-history fs-1 mb-3"></i>
              <h3>Efficiency</h3>
              <p>Timely and precise service that fits your schedule.</p>
            </div>
            <div className="col-md-4 col-sm-12 mb-4">
              <i className="bi bi-shield-check fs-1 mb-3"></i>
              <h3>Licensed & Insured</h3>
              <p>Certified professionals ready to serve you.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Contact Information */}
      <section className="contact-section-home row py-5">
        <div className="container col-md-4 col-sm-6 text-center">
          <h2 className="mb-4 mt-2 text-light">Get in Touch</h2>
          <i className="bi bi-telephone-fill fs-3"></i> <p>602-884-6043</p>
          <i className="bi bi-envelope-fill fs-3"></i> <p>datoscomyvent@gmail.com</p> 
        </div>
        <div className="container col-md-4 col-sm-6 text-center">
          <h2 className="mb-4 mt-2 text-light">Follow us!</h2>
          <i className="bi bi-instagram fs-3"></i> <p>@xxxxxxx</p>
          <i className="bi bi-facebook fs-3"></i> <p>xxxxxxxx</p>
        </div>
      </section>

      {/* Section 4: Logo and Parallax Background */}
      <section className="footer-logo-section d-flex align-items-center justify-content-center">
        <div className="logo-container text-center">
          <img src={redologo} alt="Edgeline Installations Logo" className="img-fluid" />
        </div>
      </section>
      <div className="text-center p-4 bg-light text-dark">
        © 2024 Copyright:
        <Link className="text-reset fw-bold" to="https://edgelineinstallations.com">Edgeline Installations LLC</Link>
      </div>
    </div>
  );
}
