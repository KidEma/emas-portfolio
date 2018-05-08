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
            <ul className='contact-info'>
              <li><FontAwesome name="linkedin"/></li>
              <li><FontAwesome name="facebook"/></li>
              <li><FontAwesome name="twitter"/></li>
            </ul>
          </div>
        </div>
);

export default ResumeeCard;
