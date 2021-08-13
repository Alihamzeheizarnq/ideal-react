import instance from "./Ideal"


function linkStore(text , callback) {
    instance.post('link/groups', { text }).then(res => {
        callback(res.data)
    })
}
function linkIndex(callback) {
    instance.get('link/groups').then(res => {
        callback(res.data)
    })
}

function linkDelete(id , callback) {
    instance.delete(`link/groups/${id}`).then(res => {
        callback(res.data)
    })
}
function LinkEdit(id , name , callback) {
    instance.put(`link/groups/${id}` , {name}).then(res => {
        callback(res.data)
    })
}


export default { linkStore , linkIndex , linkDelete , LinkEdit};