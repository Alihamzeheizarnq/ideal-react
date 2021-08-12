
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

export default { RightSideBar , LeftSideBar , DarkAndWhithSideBar , TokenStatus}