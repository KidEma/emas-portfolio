import React from 'react';
import { ProgressWidget } from '../../components';


const Skills = () => (
    <div>
        <h3>Frontend</h3>
        <ProgressWidget title="CSS & HTML"
                        value="90" />
        <ProgressWidget title="AngularJS"
                        value="90" />
        <ProgressWidget title="Angular"
                        value="80" />
        <ProgressWidget title="ReactJS"
                        value="75" />
                        <br/>
        <h3>Backend</h3>
                        
        <ProgressWidget title=".NET"
                        value="70" />
        <ProgressWidget title="NodeJS"
                        value="70" />
        <h3>Languages</h3>
                        
        <ProgressWidget title="JavaScript"
                        value="90" />
        <ProgressWidget title="C#"
                        value="70" />
    </div>
);

export default Skills;