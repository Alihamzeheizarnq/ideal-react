let initState = {
    images: [],
    image: []
}

function reducer(state = initState, action) {
    switch (action.type) {
        case 'UPLOAD_IMG':
            return {
                ...state,
                images: [...state.images, { url: action.url.url, id: state.images.length + 1 }]
            }
        case 'DELETE_IMAGE':
            return {
                ...state,
                images: state.images.filter(item => item.id != action.id)
            }
        case 'UPLOAD_IMG_ONE':
            return {
                ...state,
                image: [{ url: action.url.url }]
            }

        case 'DELETE_IMAGE_ONE':
            return {
                ...state,
                image: []
            }

        case 'CLEAR_ALL_IMAGE':
            return {
                ...state,
                images: [],
                image: []
            }

        default:
            return state;
    }
}
export default reducer;