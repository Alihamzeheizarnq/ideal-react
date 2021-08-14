// ui config
let RightSideBar = () => ({
    type : 'RIGHT_SIDEBAR'
})

let LeftSideBar = () => ({
    type : 'LEFT_SIDEBAR'
})

let DarkAndWhithSideBar = () => ({
    type : 'DARK_AND_WHITH_SIDEBAR'
})

let TokenStatus = (status) => ({
    type : 'TokenStatus',
    status 
})

// end ui config
// links and linksGroups
let CreateGropeLink = (text , id) => ({
    type : 'CREATE_GROUPE',
    id,
    text
})
let CreateLink = (id , link , title , group_id) => ({
    type : 'CREATE_LINK',
    id,
    link,
    title,
    group_id
})

let SetGropeLink = (data) => ({
    type : 'SET_LINK_GROUPE',
    data
})
let DeleteLink = (id) => ({
    type : 'DELETE_LINK',
    id
})
let EditLink = (id , name) => ({
    type : 'EDIT_LINK',
    id,
    name
})
let SortChlid = (data) => ({
    type : 'SORT_CHILD',
    data
})


export default { 
    RightSideBar, 
    LeftSideBar , 
    DarkAndWhithSideBar , 
    TokenStatus,
    CreateGropeLink,
    SetGropeLink,
    DeleteLink,
    EditLink,
    CreateLink,
    SortChlid
    
}