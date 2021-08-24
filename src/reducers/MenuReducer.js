let initState = {
    menus: []
}


function reducer(state = initState, action) {
    switch (action.type) {
        case 'CREATE_MENU':
            return {
                ...state,
                menus: [
                    ...state.menus,
                    { id: action.id, title: action.title, link: action.link, type: action.status, children: [] }
                ]
            }
        case 'LIST_MENU':
            return {
                ...state,
                menus: action.data
            }
        case 'EDIT_MENU':


            let newS = editCategory(state.menus, action);

            return {
                ...state,
                menus : newS
            }
        case 'DELETE_MENU':


            let newStateDelete = DeleteCategory(state.menus, action);

            return {
                ...state,
                menus: newStateDelete
            }
        default:
            return state;
    }
}


let editCategory = (state, action) => {


    let newState = state.filter(item => {

        if (item.id == action.id) {
            item.title = action.title;
            item.link = action.link;
            item.type = action.status;
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