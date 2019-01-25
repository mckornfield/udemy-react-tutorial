import React, { Component } from 'react';
import ReactDOM from 'react-dom';
class List extends Component {
    render() {
        return (<ol>
            {this.props.tasks.map((task, index) => <li key={index}>{task}</li>)}
        </ol>)
    }
}

class Title extends Component {
    render() {
        return <h1>Task list</h1>
    }
}

class Main extends Component {
    render() {
        return <div>
            <Title />
            <List tasks={['Mow the lawn', 'Walk the dog']}/>
            <List tasks={['Other thing', 'Next thing']}/>
            <List tasks={['Do JS tutorial', 'Give Michele a hug']}/>
        </div>
    }
}

ReactDOM.render(<Main />, document.getElementById('root'));