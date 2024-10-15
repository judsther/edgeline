
import { useState } from 'react';

export const MyHover = ({ animationClass, children }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`animated-hover ${isHovered ? 'animate__animated ' + animationClass : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ transition: 'transform 0.2s ease', cursor: 'pointer' }} // Opcional
    >
      {children}
    </div>
  );
};


