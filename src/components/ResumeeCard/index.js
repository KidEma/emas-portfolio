import React from 'react';
import logo from '../../logo.svg';
import './ResumeeCard.css';


const ResumeeCard = ({ imageSrc, name, description }) => (
        <div className="card">
          <img src={imageSrc} 
                alt={name} 
                className="card-image"></img>
          <div className="container">
            <h4><b>{name}</b></h4>             
            <p>{description}</p> 
            <ul className='contact-info'>
              <li>+5491158480988</li>
              <li>emilse.varela@gmail.com</li>
              <li>Medrano 1683 5B</li>
            </ul>
          </div>
        </div>
);

export default ResumeeCard;
