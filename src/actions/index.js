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

let SetGropeLink = () => ({
    type : 'CREATE_GROUPE'
})

//
export default { 
    RightSideBar, 
    LeftSideBar , 
    DarkAndWhithSideBar , 
    TokenStatus,
    CreateGropeLink,
    SetGropeLink
}