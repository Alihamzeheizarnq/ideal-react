function reducer(state = [], action) {
    switch (action.type) {
        case 'CREATE_GROUPE':
            return [
                 ...state,
                {
                    name : action.text , id : action.id
                }
            ]
               
        default:
            return state;
    }
}
export default reducer;