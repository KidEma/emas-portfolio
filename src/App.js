import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  ResumeeCard,
  ResumeeContent
} from './components'

import { AboutMe, Experience } from './sections'

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
                 <ResumeeContent title="Skills" 
                          content="From most experienced to less experienced
IDE:
● Visual Studio (VS 2010, VS 2012, VS 2015)
● Eclipse, Webstorm, Atom, CodeBlocks
Frameworks:
● .NET 4, 4.5 and 5
● ASP.NET MVC 6 and ASP.NET Web Forms
Languages:
● C#
● Javascript
● VB
● C++, Java, Python, Bash, C, Smalltalk Pharo
ORM:
● Entity Framework (EF5 and EF6) both Code First and Database First
● NHibernate
Data Storage and Interchange:
● SQL Server 2005/2008/2012 (Including complex Stored Procedures, queries optimization, table
indexing and database migration)
● MongoDB
● JSON
● XML
Source Control:
● Git: GitLab, GitHub, BitBucket
● TFS & VSTS
● VSS 2005
● Tortoise SVN
Frontend:
● HTML5 & CSS3
● Angular, AngularJS
● jQuery
● Bootstrap
● Kendo UI
OS:
● Windows XP, 7, 10
● Ubuntu, Lubuntu, Arch, Ubuntu Server
Dabbled on:
● SQL Server Reporting Services
● MEAN Stack
● SSIS
● React.js
● NUnit (TDD)
" />
                  <br/>
<ResumeeContent title="Education" >
Universidad Tecnológica Nacional (UTN FRBA)
System Engineer— 2016- Present

Universidad de Buenos Aires (Not graduated)
System Engineer— 2009 - 2015
System Analyst— 2011 - 2015
</ResumeeContent>
                  <br/>
        </div>

    </div>
      </div>
    
    );
  }
}

export default App;
