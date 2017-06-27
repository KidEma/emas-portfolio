import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  ResumeeCard,
  ResumeeContent 
} from './components'

class App extends Component {
  render() {
    return (
      <div className="parallax">
        <div className="side">
          <ResumeeCard name="Emilse Varela" 
                      imageSrc="/images/Ema.jpg" 
                      description="Fullstack Web Dev" />
        </div>
        <div className="main">
          <ResumeeContent title="About Me" 
                          content="Full Stack Web Developer with 4+ years of experience in .NET technologies. &nbsp;
                          Guided through functional analysis and chaired developers team for over a year.
                          Versatile, adaptive, avid researcher and quick learner." />
                  <br/>
          <ResumeeContent title="Experience" 
                  content="November 2016 - Present
.NET Programmer - Project: InEight HD Contracts
Gradually implementing code improvements in a 50+ people distributed team, with an outstanding
commitment to the project.
Responsibilities:
● Understanding user stories and writing quality code according requirements
● Participating in daily meetings with offshore team
● Assisting less experienced developers
● Suggesting and carrying out technical improvements
● Performing code reviews" />
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
<ResumeeContent title="Education" 
                          content="Full Stack Web Developer with 4+ years of experience in .NET technologies. &nbsp;
                          Guided through functional analysis and chaired developers team for over a year.
                          Versatile, adaptive, avid researcher and quick learner." />
                  <br/>
        </div>
        <div className="navbar">
          Full Stack Web Developer with 4+ years of experience in .NET technologies.
                  Guided through functional analysis and chaired developers team for over a year.
                  Versatile, adaptive, avid researcher and quick learner.Full Stack Web Developer with 4+ years of experience in .NET technologies.
                  Guided through functional analysis and chaired developers team for over a year.
                  Versatile, adaptive, avid researcher and quick learner.Full Stack Web Developer with 4+ years of experience in .NET technologies.
                  Guided through functional analysis and chaired developers team for over a year.
                  Versatile, adaptive, avid researcher and quick learner.Full Stack Web Developer with 4+ years of experience in .NET technologies.
                  Guided through functional analysis and chaired developers team for over a year.
                  Versatile, adaptive, avid researcher and quick learner.
        </div>
    </div>
    );
  }
}

export default App;
