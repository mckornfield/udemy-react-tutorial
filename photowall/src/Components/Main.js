import React, { Component } from 'react';
import Title from './Title'
import PhotoWall from './PhotoWall';
import AddPhoto from './AddPhoto';
import { Route } from 'react-router-dom';

class Main extends Component {
    constructor() {
        super();
    }

    render() {
        return (<div>
            <Route exact path="/" render={() => {
                return <div>
                    <Title title={'Photowall'} />
                    <PhotoWall posts={this.props.posts} />
                </div>
            }} />

            {/* <Route path="/AddPhoto" render={({history}) => {
                return <AddPhoto onAddPhoto={(addedPhoto) => {
                    this.addPhoto(addedPhoto)
                    history.push('.');
                }
                } />
            }} /> */}
        </div>
        )
    }
}

export default Main;