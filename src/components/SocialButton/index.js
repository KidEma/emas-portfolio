import React from 'react';
import './SocialButton.css';
import FontAwesome from 'react-fontawesome';


const SocialButton = ({ icon, text, link }) => (
    <a  className="social-button"
        href={link}
        title={text}
        target="_blank"
        >
        <FontAwesome name={icon}
            size="lg" />
    </a>
);

export default SocialButton;