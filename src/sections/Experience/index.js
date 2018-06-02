import React from 'react';
import {Timeline, TimelineEvent} from 'react-event-timeline';
import FontAwesome from 'react-fontawesome';


const styles = {
    root: {
        backgroundColor: 'var(--secondary)',
        fontFamily: 'sans-serif',
        fontSize: '20px',
        width: '95%'
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
      <div className={root} >
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
              Fullstack Web Developer
            </TimelineEvent>
            <TimelineEvent
                title="Consisnet SA"
                titleStyle={{fontWeight: "bold"}}
                subtitle={<span><FontAwesome name="calendar" /> Nov 2012 - Oct 2016</span>} 
                subtitleStyle={styles.subtitle}
                icon={<FontAwesome name="building" />}
                iconColor="var(--highlight-alt)"
                style={styles.root}
                contentStyle={styles.root}
            >
               Web Dev
               <br/>
               Functional Analyst
               <br/>
               Team Leader
            </TimelineEvent>
        </Timeline>
      </div>
    );
  }
}



export default Experience;
