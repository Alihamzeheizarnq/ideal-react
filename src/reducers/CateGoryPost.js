
let initState = {
    categories: []
}


function reducer(state = initState, action) {
    switch (action.type) {
        case 'CREATE_POST_CATEGORY':
            return {
                ...state , 
                categories  : [
                    ...state.categories,
                    {id : state.categories.length + 1 , name : action.name , children : []}
                ]
            } 
             case 'LIST_POST_CATEGORY':
            return {
                ...state , 
                categories  : action.categories
            }
        
        default:
            return state;
    }
}

export default reducer;