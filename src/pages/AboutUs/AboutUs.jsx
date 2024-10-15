import refimage2 from '/src/assets/images/refimage2.jpg';
import { Navbar } from '/src/components/Navbar/Navbar';
import redologo from '/src/assets/images/redologo.png'
import './AboutUs.css'; 
import { Footer } from '/src/components/Footer/Footer';

export const AboutUs = () => {
  return (
    <>
    <Navbar />
    <h2 className="section-title text-center pt-4">About Us</h2>
      <div className="us pb-5">
        <div className="row align-items-center">
          <div className="col-lg-6 text-section mb-4 mb-lg-0">
            <h3>Who We Are</h3>
            <p>
              Edgeline Installations is dedicated to providing top-notch carpentry services. Our team of skilled professionals ensures that every project meets the highest standards of quality and craftsmanship.
            </p>
          </div>
          <div className="col-lg-6 image-section">
            <img src={refimage2} alt="reference image" className="about-image img-fluid" />
          </div>
        </div>
        </div>

    <div className="about-us-container">


        <div className="logo-container text-center m-0">
          <img src={redologo} alt="Edgeline Installations Logo" className="img-fluid" />
        </div>

      <div className="mission-vision text-center mt-1">
        <h3>Our Mission</h3>
        <p>
          To deliver high-quality installations that enhance the beauty and functionality of your space, while maintaining a commitment to sustainability and customer satisfaction.
        </p>
      </div>

      <div className="vision text-center mt-4">
        <h3>Our Vision</h3>
        <p>
          To be recognized as a leading provider of carpentry services, known for our exceptional craftsmanship and unwavering dedication to our clients.
        </p>
      </div>
    
    </div>
    <Footer/>
    </>
  );
};

