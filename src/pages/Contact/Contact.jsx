/* eslint-disable react/no-unescaped-entities */
import { Navbar } from '/src/components/Navbar/Navbar';
import redologo from '/src/assets/images/redologo.png'
import './Contact.css'
import { Link } from 'react-router-dom';


export const Contact = () => {
  return (
    <>

    <Navbar />

    <div className='contact-section'>
      <div className="row text-center">
        {/* Contact Information */}
        <div className="col-md-12 contact-info">
          <h2 className='text-info'>Contact Us</h2>
          <p className="mb-4 h3">We'd love to hear from you! Reach out to us through any of the following channels:</p>
          </div>

          <div className="col-md-12 animate__animated animate__fadeInRight contact-info">
          <ul className="list-unstyled">
            <li className="mb-3 m-3">
              <i className="bi bi-telephone-fill"></i>
              <p>602-884-6043</p>
            </li>
            <li className="mb-3 m-3">
              <i className="bi bi-envelope-fill"></i>
              <p>datoscomyvent@gmail.com</p>
            </li>
            <li className="mb-3 m-3">
              <i className="bi bi-house-fill"></i>
              <p>Arizona, USA</p>
            </li>
            <li className="mb-3 m-3">
              <i className="bi bi-facebook"></i> 
            <p><a className='text-info' href="https://facebook.com" target="_blank" rel="noopener noreferrer">Edgeline Installations</a></p>
            </li>
            <li className="mb-3 m-3">
              <i className="bi bi-instagram"></i> 
              <p><a className='text-info' href="https://instagram.com" target="_blank" rel="noopener noreferrer">@edgelineinstallations</a></p>
            </li>
          </ul>
        </div>
        </div>
        </div>
 

    <section className="container">
        <div className="logo-container text-center">
          <img src={redologo} alt="Edgeline Installations Logo" className="img-fluid" />
        </div>
      </section>
      <div className="text-center p-4 bg-light text-dark">
        © 2024 Copyright:
        <Link className="text-reset fw-bold" to="https://edgelineinstallations.com">Edgeline Installations LLC</Link>
      </div>

    </>
  );
};


