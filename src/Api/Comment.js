import { instance } from "./Ideal";



function ListComment(page, callback) {
    instance.get(`comments?${page}`).then(res => {
        callback(res.data)
    })
}
function StoreComment(data, callback) {
    let { title, body, image } = data;
    instance.post('comments', { name : title, body, image }).then(res => {
        callback(res.data)
    })
}

function ShowComment(id, callback, error) {
    instance.get(`comments/${id}`).then(res => {
        callback(res.data)
    }).catch(err => error(err))
}
function UpdateComment(id, data, callback) {
    let { title , body, image } = data;
    instance.put(`comments/${id}`, { name : title , body, image  }).then(res => {
        callback(res.data)
    })
}
function DeleteComment(id, callback) {
    instance.delete(`comments/${id}`).then(res => {
        callback(res.data)
    })
}




export default {
    ListComment,
    StoreComment,
    ShowComment,
    DeleteComment,
    UpdateComment
};