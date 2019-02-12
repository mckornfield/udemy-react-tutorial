import { database } from '../database/config';
export function startAddingPost(post) {

    console.log("inside start adding post")
    return (dispatch) => {
        return database.ref('posts').update({ [post.id]: post }).then(() => {
            dispatch(addPost(post))
            console.log("Success creating post")
        }).catch((error) => {
            console.log(error);
            console.log("Error creating post")
        })
    };
}

export function startLoadingPosts() {
    return (dispatch) => {

        console.log("trying to fetch posts")
        return database.ref('posts').once('value').then((snapshot) => {
            const posts = [];

            console.log("mapping posts to fetch posts")
            snapshot.forEach((childSnapshot) => {
                posts.push(childSnapshot.val())
            })
            console.log("fetched posts")
            console.log(posts)
            dispatch(loadPosts(posts));
        }).catch((error) => {
            console.log(error);
            console.log("Error loading posts")
        });
    }
}

export function startRemovingPost(index, id) {
    return (dispatch) => {
        return database.ref(`posts/${id}`).remove().then(() => {
            dispatch(removePost(index));
        })
    }
}

export function startAddingComment(comment, postId) {
    console.log("inside start adding comment")
    return (dispatch) => {
        return database.ref(`comment/${postId}`).push(comment).then(() => {
            dispatch(addComment(comment, postId))
            console.log("Success creating comment")
        }).catch((error) => {
            console.log(error);
            console.log("Error adding comment")
        })
    };
}

export function loadPosts(posts) {
    console.log("inside load posts")
    return {
        type: "LOAD_POSTS",
        posts
    };
}

export function removePost(index) {
    return {
        type: "REMOVE_POST",
        index: index
    };
}

export function addPost(post) {
    console.log("inside add post")
    return {
        type: "ADD_POST",
        post
    };
}


export function addComment(comment, postId) {
    return {
        type: "ADD_COMMENT",
        comment,
        postId
    };
}