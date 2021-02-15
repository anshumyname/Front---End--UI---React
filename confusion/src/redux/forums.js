import * as ActionTypes from './ActionType';


export const Feedback =(state = [], action) => {
    switch(action.type) {
        case ActionTypes.ADD_FEEDBACK:
            var feedback = action.payload;
            return {...state.concat(feedback)};
        default:
            return state;
    }
};