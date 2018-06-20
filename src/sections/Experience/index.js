import React from 'react';
import {Timeline, TimelineEvent} from 'react-event-timeline';
import FontAwesome from 'react-fontawesome';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const styles = {
    root: {
        backgroundColor: 'var(--secondary)',
        fontFamily: 'sans-serif',
        fontSize: '20px',
        width: '98%',
        boxShadow: 'none'
        
    },
    subtitle: {
        color: "var(--highlight)",
        fontWeight: 'bold'

    },
    title:{
        fontWeight: "bold"
    },
    description: {
        backgroundColor: 'var(--background)',
    },
    descriptionTitle: {
        color: "var(--text)",
        fontWeight: 'bold'
        
    }
}

class Experience extends React.Component {
 
  render() {
    return (
      <div >
        <Timeline >
            <TimelineEvent
                title="Prokarma Argentina"
                titleStyle={styles.title}                
                subtitle={<span><FontAwesome name="calendar" /> Nov 2016 - Present</span>}  
                subtitleStyle={styles.subtitle}
                icon={<FontAwesome name="building" />}  
                iconColor="var(--highlight-alt)"
                style={styles.root}
                bubbleStyle={styles.bubble}
                contentStyle={styles.root}
            >
                <ExpansionPanel style={styles.description}>
                    <ExpansionPanelSummary style={styles.descriptionTitle} expandIcon={<ExpandMoreIcon />}>
                        Fullstack Developer
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                    <div>
                        Developing new features according to user stories and design documents.
                        <br/>
                        Gradually implementing code improvements in a 50+ people distributed team, with an outstanding
                        commitment to the project.
                        <br/> 
                        Responsibilities:                    
                        <ul>
                            <li>Understanding user stories and writing quality code according requirements</li>
                            <li>Creating applications from design documents and style guides</li>
                            <li>Participating in daily meetings with offshore team</li>
                            <li>Assisting less experienced developers</li>
                            <li>Suggesting and carrying out technical improvements</li>
                            <li>Performing code reviews</li>
                        </ul>
                    </div>
                    </ExpansionPanelDetails>
                </ExpansionPanel> 
            </TimelineEvent>
            <TimelineEvent
                title="Consisnet SA"
                titleStyle={{fontWeight: "bold"}}
                subtitle={<span><FontAwesome name="calendar" /> May 2015 - Oct 2016</span>} 
                subtitleStyle={styles.subtitle}
                icon={<FontAwesome name="building" />}
                iconColor="var(--highlight-alt)"
                style={styles.root}
                contentStyle={styles.root}
            >
            <ExpansionPanel style={styles.description}>
                    <ExpansionPanelSummary style={styles.descriptionTitle} expandIcon={<ExpandMoreIcon />}>
                        Functional Analyst and Technical Leader
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                    <div>
                        Promoted after 2 years of expertise in programming.
                        <br/>
                        Encouraged company modernization by implementing a private GitLab server, Jenkins                                                                                                                                                                                                               and Redmine as well as providing instruction to the team for its use.
                        Responsibilities included:
                        <br/> 
                        <ul>
                            <li>Coordinating and attending meeting with the clients for information gathering.</li>
                            <li>Analysis and design of solutions with proper time and budget estimation.</li>
                            <li>Writing user stories and use cases.</li>
                            <li>Researching and implementing new technologies and tools for development.</li>
                            <li>Instructing, guiding and supporting the programmers through the development phases in simultaneous projects.</li>
                            <li>Carrying out and supervising releases</li>
                            <li>Reporting status and milestones to project managers and client’s executives.</li>
                            <li>Instructing and assisting users on the operation of resulting software.</li>
                        </ul>
                    </div>
                    </ExpansionPanelDetails>
                </ExpansionPanel>             
               
            </TimelineEvent>
            <TimelineEvent
                title="Consisnet SA"
                titleStyle={{fontWeight: "bold"}}
                subtitle={<span><FontAwesome name="calendar" /> Nov 2012 - May 2015</span>} 
                subtitleStyle={styles.subtitle}
                icon={<FontAwesome name="building" />}
                iconColor="var(--highlight-alt)"
                style={styles.root}
                contentStyle={styles.root}
            >
                 <ExpansionPanel style={styles.description}>
                    <ExpansionPanelSummary style={styles.descriptionTitle} expandIcon={<ExpandMoreIcon />}>
                        Functional Analyst and Technical Leader
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                    <div>
                    Continuously researching and implementing new technologies. Carefully applying design patterns and SOLID principles.
                        <br/>
                        Responsibilities included: 
                        <ul>
                            <li>Understanding use cases</li>
                            <li>Writing scalable and understandable code</li>
                            <li>Refactoring legacy code</li>
                            <li>Testing and delivering required tasks on time</li>
                        </ul>
                    </div>
                    </ExpansionPanelDetails>
                </ExpansionPanel>             
               
            </TimelineEvent>
        </Timeline>
      </div>
    );
  }
}



export default Experience;
