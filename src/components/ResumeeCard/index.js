import React from 'react';
import logo from '../../logo.svg';
import './ResumeeCard.css';
import FontAwesome from 'react-fontawesome';


const ResumeeCard = ({ imageSrc, name, description }) => (
        <div className="card">
          <img src={imageSrc} 
                alt={name} 
                className="card-image avatar"></img>
          <div className="container">
            <h2><b>{name}</b></h2>             
            <p>{description}</p> 
            <ul className='contact-info social-icons'>
              <li><FontAwesome name="linkedin" size="lg" /></li>
              <li><FontAwesome name="github" size="lg"/></li>
              <li><FontAwesome name="twitter" size="lg"/></li>
            </ul>          

          </div>
          <div className="card-bottom">
            <button className="bottom-button">Download CV</button>
          </div>
        </div>
        
);

export default ResumeeCard;
