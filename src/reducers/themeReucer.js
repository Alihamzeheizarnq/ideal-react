
let initState = {
    token : false,
    sidebarRight : true,
    sidebarLeft : true,
    sidebarStyle : true
}

function reducer(state = initState , action) {
    console.log(action + 1)
    switch (action.type) {
        case 'xcf':
            
            break;
    
        default:
            return state;
    }
}
export default reducer;