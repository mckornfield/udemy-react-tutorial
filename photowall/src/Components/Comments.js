import React, { Component } from 'react';

class Comments extends Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const comment = event.target.elements.comment.value;
        console.log(comment);
        this.props.startAddingComment(comment, this.props.id);
        event.target.elements.comment.value = '';
    }


    render() {
        return <div>
            {
                this.props.comments.map((comment, index) => {
                    return (
                        <p key={index}> {comment}</p>
                    )
                })
            }
            <form className="comment-form" onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Comment" name="comment" />
                <input type="submit" hidden />
            </form>
        </div >
    }
}

export default Comments;