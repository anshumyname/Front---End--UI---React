import *  as ActionTypes from  './ActionType';

export const Leaders = (state = {
    leadersLoading: true,
    leaderserrmess: null,
    leaders: []
},  action) => {
    switch(action.type){
        case ActionTypes.ADD_LEADERS:
            return {...state, leadersLoading: false, leaderserrmess:null, leaders: action.payload}
        case ActionTypes.LEADERS_LOADING:
            return {...state, leadersLoading: true, leaderserrmess:null, leaders: []}
        case ActionTypes.LEADERS_FAILED:
            return {...state, leadersLoading:false, leaderserrmess:action.payload, leaders: []}
        default:
            return state;
    }
}