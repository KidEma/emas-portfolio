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
        width: '95%',
        
    },
    subtitle: {
        color: "var(--highlight)",
        fontWeight: 'bold'

    },
    title:{
        fontWeight: "bold"
    }
}

class Experience extends React.Component {
 
  render() {
    return (
      <div >
        <Timeline>
            <TimelineEvent
                title="Prokarma Argentina"
                titleStyle={styles.title}                
                subtitle={<span><FontAwesome name="calendar" /> Nov 2016 - Present</span>}  
                subtitleStyle={styles.subtitle}
                icon={<FontAwesome name="building" />}  
                iconColor="var(--highlight-alt)"
                style={styles.root}
                contentStyle={styles.root}
            >
                <ExpansionPanel style={styles.root}>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography>Expansion Panel 1</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                            sit amet blandit leo lobortis eget.
                        </Typography>
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
               Functional Analyst
               <br/>
               Team Leader
               <br/>
               Web Developer               
               
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
               Fullstack Web Developer (.NET)
            </TimelineEvent>
        </Timeline>
      </div>
    );
  }
}



export default Experience;
