
let initState = {
    posts : []
}

function reducer(state = initState, action) {


    switch (action.type) {
        case 'LIST_POSTS':

           return {
               ...state,
               posts : action.data.data
           }
        case 'ADD_POSTS':
            let data = action.data
            return {
                ...state,
                posts : [...state.posts , data]
            }
        case 'DELETE_POST':
            let newState = state.posts.filter(item => item.id != action.id);
            
        return {
            ...state,
            posts : newState
        };
        case 'EDIT_PORTOFILO':

            break;
        default:
            return state;;
    }
}

export default reducer;


