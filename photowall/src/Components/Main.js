import React, { Component } from 'react';
import Title from './Title'
import PhotoWall from './PhotoWall';
import AddPhoto from './AddPhoto';
import { Route, Link } from 'react-router-dom';

class Main extends Component {

    render() {
        return (<div>
            <h1>
                <Link to="/">Photowall</Link>
            </h1>
            <Route exact path="/" render={() => {
                return <div>
                    <PhotoWall {...this.props} />
                </div>
            }} />

            <Route path="/AddPhoto" render={({ history }) => {
                return <AddPhoto {...this.props} />
            }} />
        </div>
        )
    }
}

export default Main;