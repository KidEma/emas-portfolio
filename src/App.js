import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  ResumeeCard,
  ResumeeContent
} from './components'

import { AboutMe, Experience, Skills } from './sections'

class App extends Component {
  render() {
    return (
      <div>
              <div className="navbar">
         This is going to be a navigation bar
        </div>
      <div className="parallax">
        <div className="side">
          <ResumeeCard name="Emilse Varela" 
                      imageSrc="/images/Ema.jpg" 
                      description="Web Developer" />
        </div>
        <div className="main">
          <ResumeeContent title="About Me" >
              <AboutMe />
          </ResumeeContent>
                  <br/>
          <ResumeeContent title="Experience"> 
          <Experience/>
          </ResumeeContent>
 <br/>
                 <ResumeeContent title="Skills" >
                 <Skills/>
                 </ResumeeContent>
                  <br/>
<ResumeeContent title="Education" >
<ul>
<li>Universidad Tecnológica Nacional (UTN FRBA)
System Engineer— 2016- Present</li>

<li>Universidad de Buenos Aires (Not graduated)
  <ul>
<li>System Engineer— 2009 - 2015</li>
<li>System Analyst— 2011 - 2015</li>
</ul>
</li>
</ul>
</ResumeeContent>
                  <br/>
        </div>

    </div>
      </div>
    
    );
  }
}

export default App;
