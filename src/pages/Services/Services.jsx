/* eslint-disable react/no-unescaped-entities */
import doorinstall from '/src/assets/images/doorinstall.jpg';
import shelving2 from '/src/assets/images/shelving2.jpg';
import baseboard from '/src/assets/images/baseboard.jpg';
import baserepair from '/src/assets/images/baserepair.jpg';

import './Services.css'; 
import { Navbar } from '/src/components/Navbar/Navbar';
import { MyHover } from '/src/components/Animation/MyHover';
import { Link } from 'react-router-dom';
import { Footer } from '/src/components/Footer/Footer';


export const Services = () => {
  return (
    <>
    <Navbar />
    <div className="services-container">
      <h2 className="text-center mb-5 col-12">Our Services</h2>

      <div className="container">
        <div className="row">
          {/* Baseboard Installation */}
          <div className="col-sm-12 col-md-6 col-lg-3 mb-4 d-flex">
          <MyHover animationClass="animate__pulse">
            <div className="service-card animate__animated animate__fadeInLeft">
              <i className="fas fa-ruler-combined service-icon"></i>
              <h3>Baseboard Installation</h3>
              <p>Professional installation of high-quality baseboards to enhance your home's aesthetic and protect your walls.</p>
              <img className='img-fluid' src={baseboard} alt="baseboard-service" />
            </div>
            </MyHover>
          </div>
         

          {/* Baseboard Repair */}
          <div className="col-sm-12 col-md-6 col-lg-3 mb-4 d-flex">
          <MyHover animationClass="animate__pulse">
            <div className="service-card animate__animated animate__fadeInLeft">
              <i className="fas fa-tools service-icon"></i>
              <h3>Baseboard Repair</h3>
              <p>Efficient repair services to restore your baseboards to perfect condition.</p>
              <img className='img-fluid' src={baserepair} alt="shelving-service" />
            </div>
            </MyHover>
          </div>
         
        

      
          {/* Door Installation */}
          <div className="col-sm-12 col-md-6 col-lg-3 mb-4 d-flex">
          <MyHover animationClass="animate__pulse">
            <div className="service-card animate__animated animate__fadeInLeft">
              <i className="fas fa-door-closed service-icon"></i>
              <h3>Door Installation</h3>
              <p>Expert door installation for both interior and exterior doors, ensuring fit, function, and security.</p>
              <img className='img-fluid' src={doorinstall} alt="door-installation" />
            </div>
            </MyHover>
          </div>

          {/* Shelving */}
          <div className="col-sm-12 col-md-6 col-lg-3 mb-4 d-flex">
            <MyHover animationClass="animate__pulse">
            <div className="service-card animate__animated animate__fadeInLeft">
            <i className="fas fa-archive service-icon"></i>
              <h3>Shelving</h3>
              <p>Custom shelving solutions for your home, maximizing space while adding style.</p>
              <img className='img-fluid' src={shelving2} alt="shelving-service" />
            </div>
            </MyHover>
          </div>
        </div>

        {/* Call to Action */}
        <div className="cta-section text-center mt-5">
          <h3 className="">Interested in Our Services?</h3>
          <p>Contact us today to get started with a free consultation.</p>
          <Link to="/contact" className="btn btn-primary">Contact Us</Link>
        </div>
        </div>
      </div>

      <Footer />
      </>
  );
};

