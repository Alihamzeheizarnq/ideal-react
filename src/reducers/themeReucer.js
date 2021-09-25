let initState = {
    token: false,
    sidebarRight: true,
    sidebarLeft: true,
    sidebarStyle: JSON.parse(localStorage.getItem('theme')),
    tokenUer: null
}
function reducer(state = initState, action) {
    switch (action.type) {
        case 'RIGHT_SIDEBAR':
            return {
                ...state,
                sidebarRight: !state.sidebarRight
            }
        case 'LEFT_SIDEBAR':
            return {
                ...state,
                sidebarLeft: !state.sidebarLeft
            }
        case 'DARK_AND_WHITH_SIDEBAR':
            return {
                ...state,
                sidebarStyle: !state.sidebarStyle
            }
        case 'TokenStatus':
            return {
                ...state,
                token: action.status
            }

        case 'SET_TOKEN':


            return {
                ...state,
                tokenUer: action.token
            }

        default:
            return state;
    }
}

export default reducer;