import { useEffect, useState } from 'react';
import carpentry from '/src/assets/images/carpentry.jpg';
import carpentry2 from '/src/assets/images/carpentry2.jpg';
import shelving from '/src/assets/images/shelving.jpg';
import { Link } from 'react-router-dom';

export const Banner = () => {
  const images = [carpentry, carpentry2, shelving];
  
  const [currentImage, setCurrentImage] = useState(images[0]);
  
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % images.length;
      setCurrentImage(images[index]);
    }, 3000); // Cambia la imagen cada 2 segundos
    
    return () => clearInterval(interval); // Limpiar intervalo al desmontar
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="banner-section d-flex align-items-center justify-content-center text-start animate__animated animate__fadeInRight" style={{ backgroundImage: `url(${currentImage})` }}>
      <div className="container text-white">
        <h1 className="display-3 fw-bold animate__animated animate__fadeInLeft">Welcome to Edgeline Installations</h1>
        <p className="lead animate__animated animate__fadeInLeft">Your trusted partner for premium carpentry installations.</p>
        <Link to="/services" className="btn btn-outline-light btn-lg mt-4 animate__animated animate__fadeIn">Explore Our Services</Link>
        </div>
    </section>
  );
};
