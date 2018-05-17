import React from 'react';
import './ResumeeContent.css';

const ResumeeContent = ({ title, content }) => (
        <div className="content">
          <div className="container">
            <h4><b>{title}</b></h4> 
            <p>{content}</p> 
          </div>
        </div>
);

export default ResumeeContent;