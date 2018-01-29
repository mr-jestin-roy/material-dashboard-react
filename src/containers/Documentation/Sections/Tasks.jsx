import React from 'react';
import { Link } from 'react-router-dom';
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { prism } from 'react-syntax-highlighter/styles/prism';

import { P, Tasks as TT } from 'components';
import { bugs } from 'variables/general';

const tasksDep = `import { Tasks } from 'components';
import { bugs } from 'variables/general';`;
const tasks = `<Tasks
    checkedIndexes={[0,3]}
    tasksIndexes={[0,1,2,3]}
    tasks={bugs}
/>`;
const tasksProp = `Tasks.propTypes = {
    // used to determine which checkboxes are checked
    tasksIndexes: PropTypes.arrayOf(PropTypes.number),
    tasks: PropTypes.arrayOf(PropTypes.node)
};`;

class Tasks extends React.Component{
    render(){
        return (
            <div>
                <h1>Tasks</h1>
                <P>This components is used in the <code>TasksCard</code> (see <Link to={'/documentation/cards'}>cards section</Link>).</P>
                <TT
                    checkedIndexes={[0,3]}
                    tasksIndexes={[0,1,2,3]}
                    tasks={bugs}
                />
                <SyntaxHighlighter language="jsx" style={prism}>{tasksDep}</SyntaxHighlighter>
                <SyntaxHighlighter language="jsx" style={prism}>{tasks}</SyntaxHighlighter>
                <SyntaxHighlighter language="jsx" style={prism}>{tasksProp}</SyntaxHighlighter>
            </div>
        );
    }
}

export default Tasks;