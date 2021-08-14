function reducer(state = [], action) {
    switch (action.type) {
        case 'CREATE_GROUPE':
            return [
                ...state,
                {
                    name: action.text, id: action.id
                }
            ]
        case 'SET_LINK_GROUPE':

            return action.data;
        case 'DELETE_LINK':
            return state.filter(item => item.id != action.id ? item : false)
        case 'EDIT_LINK':
            return state.filter(item => {
                if (item.id == action.id) {
                    item.name = action.name;
                }
                return item;

            }
            )
        default:
            return state;
    }
}
export default reducer;