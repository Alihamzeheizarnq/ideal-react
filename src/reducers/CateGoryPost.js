import actions from "../actions";

let initState = {
    categories: []
}


function reducer(state = initState, action) {
    switch (action.type) {
        case 'CREATE_POST_CATEGORY':
            return {
                ...state,
                categories: [
                    ...state.categories,
                    { id: action.id, name: action.name, children: [] }
                ]
            }
        case 'LIST_POST_CATEGORY':
            return {
                ...state,
                categories: action.categories
            }
        case 'EDIT_POST_CATEGORY':


         let newS =  editCategory(state.categories, action);

         return {
            ...state,
            categories: newS
        }
        case 'DELETE_POST_CATEGORY':


         let newStateDelete =  DeleteCategory(state.categories, action);

         return {
            ...state,
            categories: newStateDelete
        }
        default:
            return state;
    }
}


let editCategory = (state, action) => {


    let newState = state.filter(item => {

        if (item.id == action.id) {
            item.name = action.name
        }

        if (item.children.length) {
            editCategory(item.children, action)
        }

        return item;
    })
    return newState;
}
let DeleteCategory = (state, action) => {


    let newState = state.filter(item => {

        if (item.id != action.id) {
            return item;

        }

        if (item.children.length) {
            DeleteCategory(item.children, action)
        }

    })
    return newState;
}

export default reducer;