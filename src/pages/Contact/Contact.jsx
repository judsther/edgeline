/* eslint-disable react/no-unescaped-entities */
import { Navbar } from '/src/components/Navbar/Navbar';
import redologo from '/src/assets/images/redologo.png'
import './Contact.css'


const Contact = () => {
  return (
    <>

    <Navbar />

    <section className="contact-section">
      <div className="row text-center">
        {/* Contact Information */}
        <div className="col-md-12 contact-info animate__animated animate__fadeInLeft">
          <h2>Contact Us</h2>
          <p className="mb-4">We'd love to hear from you! Reach out to us through any of the following channels:</p>
          </div>

          <div className="col-md-12 animate__animated animate__fadeInRight contact-info">
          <ul className="list-unstyled">
            <li className="mb-3">
              <i className="bi bi-telephone-fill fs-5 me-2"></i> 602-884-6043
            </li>
            <li className="mb-3">
              <i className="fas fa-envelope me-2"></i>datoscomyvent@gmail.com
            </li>
            <li className="mb-3">
              <i className="fas fa-home me-2"></i>Arizona, USA
            </li>
            <li className="mb-3">
              <i className="fab fa-facebook me-2"></i> <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Edgeline Installations</a>
            </li>
            <li className="mb-3">
              <i className="fab fa-instagram me-2"></i> <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">@edgelineinstallations</a>
            </li>
          </ul>
        </div>
        </div>
    </section>

    <section className="footer-logo-section d-flex align-items-center justify-content-center">
        <div className="logo-container text-center">
          <img src={redologo} alt="Edgeline Installations Logo" className="img-fluid" />
        </div>
      </section>

    </>
  );
};

export default Contact;
