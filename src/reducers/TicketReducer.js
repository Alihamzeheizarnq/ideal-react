
let initState = {
    tickets: [],
    count : 0
}

function reducer(state = initState, action) {


    switch (action.type) {
        case 'LIST_TICKET':

            return {
                ...state,
                tickets: action.data.data
            }

        case 'DELETE_TICKET':
            let newState = state.tickets.filter(item => item.id != action.id);

            return {
                ...state,
                tickets: newState
            };
        case 'COUNT_TICKET':
            return {
                ...state,
                count: action.data.count
            };

        case 'EDIT_TICKET':

            let newTik = state.tickets.filter(item => {
                if(item.id == action.id){
                    item.view = 1
                }
               return item;
            });

            return {
                ...state,
                tickets: newTik
            };

        default:
            return state;;
    }
}

export default reducer;


