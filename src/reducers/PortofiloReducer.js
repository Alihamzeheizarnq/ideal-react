
let initState = {
    portofilo : []
}

function reducer(state = initState, action) {


    switch (action.type) {
        case 'LIST_PORTOFILO':

            break;
        case 'ADD_PORTOFILO':
            let data = action.data
            return {
                ...state,
                portofilo : [...state.portofilo , data]
            }
        case 'DELETE_PORTOFILO':

            break;
        case 'EDIT_PORTOFILO':

            break;
        default:
            return state;;
    }
}

export default reducer;


