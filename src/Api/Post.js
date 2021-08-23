import { instance } from "./Ideal";



function ListPost(page, callback) {
    instance.get(`posts?${page}`).then(res => {
        callback(res.data)
    })
}
function StorePost(data, callback) {
    let { title, category_id, slug, meta_title, meta_description, body, tags, image, status } = data;
    instance.post('posts', { title, category_id, slug, meta_title, meta_description, body, tags, image, status }).then(res => {
        callback(res.data)
    })
}

function ShowPost(id, callback) {
    instance.get(`posts/${id}`).then(res => {
        callback(res.data)
    })
}
function EditPost(id, data, callback) {
    let { title, category_id, slug, meta_title, meta_description, body, tags, image, status , listDelete } = data;
    instance.put(`posts/${id}`, { title, category_id, slug, meta_title, meta_description, body, tags, image, status , listDelete }).then(res => {
        callback(res.data)
    })
}
function DeletePost(id, callback) {
    instance.delete(`posts/${id}`).then(res => {
        callback(res.data)
    })
}




export default {
    StorePost,
    ShowPost,
    DeletePost,
    EditPost,
    ListPost
};