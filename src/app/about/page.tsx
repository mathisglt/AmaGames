import React from 'react';
import './about.module.css';

const About: React.FC = () => {
  return (
    <div className="about-container">
      <h2>Moi</h2>
      <p>Projets créé par <span>Gaultier Mathis</span></p>
      <p>Module WE</p>
    </div>
  );
};

export default About;