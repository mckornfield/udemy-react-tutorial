import React from 'react';

function Photo(props) {
    const post = props.post;
    return <figure class="figure">
        <img class="photo" src={post.imageLink} alt={post.description}></img>
        <figcaption> <p>{post.description}</p></figcaption>
        <div class="button-container">
            <button class="remove-button"> Remove </button>
        </div>
    </figure>
}

export default Photo;