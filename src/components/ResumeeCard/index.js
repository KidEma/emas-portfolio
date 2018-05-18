import React from 'react';
import logo from '../../logo.svg';
import './ResumeeCard.css';
import SocialButton from '../SocialButton/'
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
              <li>
                <SocialButton icon="linkedin" 
                              text="LinkedIn"
                              link="https://www.linkedin.com/in/emilse-varela-05a76859" />
              </li>
              <li>
                <SocialButton icon="github" 
                              text="GitHub"
                              link="https://github.com/KidEma" />
              </li>
              <li>
                <SocialButton icon="twitter" 
                              text="twitter"
                              link="https://twitter.com/ngEma89" />
              </li>
            </ul>          

          </div>
          <div className="card-bottom">
            <button className="bottom-button">Download CV</button>
          </div>
        </div>
        
);

export default ResumeeCard;
