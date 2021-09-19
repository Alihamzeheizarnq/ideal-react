
let initState = {
    comments : []
}

function reducer(state = initState, action) {

    switch (action.type) {
        case 'LIST_COMMENT':

           return {
               ...state,
               comments : action.data.data
           }
        case 'ADD_COMMENT':
            let data = action.data
            return {
                ...state,
                comments : [...state.comments , data.data]
            }
        case 'DELETE_COMMENT':
            let newState = state.comments.filter(item => item.id != action.id);
            
        return {
            ...state,
            comments : newState
        };
        case 'EDIT_COMMENT':

            break;
        default:
            return state;;
    }
}

export default reducer;


