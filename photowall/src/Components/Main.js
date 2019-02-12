import React, { Component } from 'react';
import Title from './Title'
import PhotoWall from './PhotoWall';
import AddPhoto from './AddPhoto';
import Single from './Single';
import { Route } from 'react-router-dom';


class Main extends Component {
    state = { loading: true };

    componentDidMount() {
        this.props.startLoadingPosts().then(() => {
            this.setState({ loading: false })
        });
        this.props.startLoadingComments();
    }

    render() {
        return (<div>
            <Title title={'PhotoWall'} />
            <Route exact path="/" render={() => {
                return <div>
                    <PhotoWall {...this.props} />
                </div>
            }} />

            <Route path="/AddPhoto" render={({ history }) => {
                return <AddPhoto {...this.props} />
            }} />

            <Route path="/single/:id" render={(params) => {
                return <Single loading={this.state.loading} {...this.props} {...params} />
            }} />
        </div>
        )
    }
}

export default Main;