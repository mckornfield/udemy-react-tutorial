import React, { Component } from 'react';
import List from './List'
import Title from './Title'
class Main extends Component {
    render() {
        return <div>
            <Title title={'todos'}/>
            <List tasks={['Mow the lawn', 'Walk the dog']}/>
            <List tasks={['Other thing', 'Next thing']}/>
            <List tasks={['Do JS tutorial', 'Give Michele a hug']}/>
        </div>
    }
}

export default Main;