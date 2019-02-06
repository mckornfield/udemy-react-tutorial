import React, { Component } from 'react';
import Title from './Title'
import PhotoWall from './PhotoWall';
import AddPhoto from './AddPhoto';
import { Route } from 'react-router-dom';
import { removePost } from '../redux/actions'

function stupidFun(){}
class Main extends Component {
    constructor() {
        super();
    }

    render() {
        console.log(this.props);
        return (<div>
            <Route exact path="/" render={() => {
                return <div>
                    <Title title={'Photowall'} />
                    <PhotoWall {...this.props} />
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