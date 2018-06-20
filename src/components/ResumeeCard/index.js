import React from 'react';
import logo from '../../logo.svg';
import './ResumeeCard.css';
import SocialButton from '../SocialButton/'
import HighlightedButton from '../HighlightedButton/'
import FontAwesome from 'react-fontawesome';


const ResumeeCard = ({ imageSrc, name, description }) => (
        <div className="card">
          <img src={process.env.PUBLIC_URL + imageSrc} 
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
                <SocialButton icon="bitbucket" 
                              text="BitBucket"
                              link="https://bitbucket.org/devstreet/" />
              </li>
              <li>
                <SocialButton icon="twitter" 
                              text="Twitter"
                              link="https://twitter.com/ngEma89" />
              </li>
            </ul>          

          </div>
          <div className="card-bottom">
            <HighlightedButton>Download CV</HighlightedButton>
          </div>
        </div>
        
);

export default ResumeeCard;
