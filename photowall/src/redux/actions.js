// remove

export function removePost(index) {
    return {
        type: "REMOVE_POST",
        index: index
    };
}

// function addPost(index)

export function addPost(post) {
    return {
        type: "ADD_POST",
        post
    };
}