import postData from '../data/posts'
import { combineReducers } from 'redux';

function comments(state = {}, action) {
    switch (action.type) {
        case 'ADD_COMMENT':
            console.log(action.postId);
            if (state[action.postId]) {
                return {...state, [action.postId]: [...state[action.postId], action.comment]}
            } else {
                return { ...state, [action.postId]: [action.comment] };
            }
        default:
            return state;
    }

}

function posts(state = postData, action) {
    console.log("post reducer")
    console.log("action is " + JSON.stringify(action))
    switch (action.type) {
        case 'REMOVE_POST':
            return [...state.slice(0, action.index), ...state.slice(action.index + 1)]
        case 'ADD_POST':
            return [...state, action.post]
        case 'LOAD_POSTS':
                console.log("inside switch statement for load posts");
                console.log(action);
                return action.posts
        default:
            return state;
    }
}

const rootReducer = combineReducers({ comments, posts })

export default rootReducer;