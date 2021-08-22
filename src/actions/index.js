// ui config
let RightSideBar = () => ({
    type: 'RIGHT_SIDEBAR'
})

let LeftSideBar = () => ({
    type: 'LEFT_SIDEBAR'
})

let DarkAndWhithSideBar = () => ({
    type: 'DARK_AND_WHITH_SIDEBAR'
})

let TokenStatus = (status) => ({
    type: 'TokenStatus',
    status
})
let setTokenUser = (token) => ({
    type: 'SET_TOKEN',
    token
})

// end ui config
// links and linksGroups
let CreateGropeLink = (text, id) => ({
    type: 'CREATE_GROUPE',
    id,
    text
})
let CreateLink = (id, link, title, group_id) => ({
    type: 'CREATE_LINK',
    id,
    link,
    title,
    group_id
})

let SetGropeLink = (data) => ({
    type: 'SET_LINK_GROUPE',
    data
})
let DeleteLink = (id) => ({
    type: 'DELETE_LINK',
    id
})
let DeleteOriginLink = (id) => ({
    type: 'DELETE_ORIGIN_LINK',
    id
})
let EditLink = (id, name) => ({
    type: 'EDIT_LINK',
    id,
    name
})
let SortChlid = (data) => ({
    type: 'SORT_CHILD',
    data
})
let EditLinkOrigin = (id, title, link, group_id, old_group_id) => ({
    type: 'EDIT_LINK_ORIGIN',
    id,
    title,
    link,
    group_id,
    old_group_id
})

//end link and link grop footer
// uploads images

let ImagesPortofilo = (url) => ({
    type: 'UPLOAD_IMG',
    url
})
let ImgPortofilo = (url) => ({
    type: 'UPLOAD_IMG_ONE',
    url
})
let DeleteImage = (id) => ({
    type: 'DELETE_IMAGE',
    id
})
let DeleteImg = () => ({
    type: 'DELETE_IMAGE_ONE',
})
let ClearImages = () => ({
    type: 'CLEAR_ALL_IMAGE'
})


//end images


//PORTOFILO

let AddPortofilo = (data) => ({
    type: 'ADD_PORTOFILO',
    data
})
let ListPortofilo = (data) => ({
    type: 'LIST_PORTOFILO',
    data
})
let DeletePortofilo = (id) => ({
    type: 'DELETE_PORTOFILO',
    id
})

//END PORTOFILO



//CATE GORY POST


let CreatePostCategory = (id, name) => ({
    type: 'CREATE_POST_CATEGORY',
    id,
    name
})

let ListPostCategory = (categories) => ({
    type: 'LIST_POST_CATEGORY',
    categories
})

let EditPostCategory = (id ,name) => ({
    type: 'EDIT_POST_CATEGORY',
    id,
    name
});
let DeletePostCategory = (id) => ({
    type: 'DELETE_POST_CATEGORY',
    id
});
export default {
    RightSideBar,
    LeftSideBar,
    DarkAndWhithSideBar,
    TokenStatus,
    CreateGropeLink,
    SetGropeLink,
    DeleteLink,
    EditLink,
    CreateLink,
    SortChlid,
    EditLinkOrigin,
    DeleteOriginLink,
    ImagesPortofilo,
    DeleteImage,
    ImgPortofilo,
    DeleteImg,
    AddPortofilo,
    ClearImages,
    ListPortofilo,
    DeletePortofilo,
    setTokenUser,
    CreatePostCategory,
    ListPostCategory,
    EditPostCategory,
    DeletePostCategory

}