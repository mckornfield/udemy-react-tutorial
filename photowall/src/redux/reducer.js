import posts from '../data/posts'

const postReducer = function reducer(state = posts, action) {
    console.log(action.index);
    return state;
}

export default postReducer;