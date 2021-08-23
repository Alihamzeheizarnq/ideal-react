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

function ShowPortofilo(id, callback) {
    instance.get(`portofilos/${id}`).then(res => {
        callback(res.data)
    })
}
function UpdatePortofilo(id, data, callback) {
    let { title, client, address, body, image, images, status, list_delete } = data;
    instance.put(`portofilos/${id}`, { title, client, address, body, image, images, status, list_delete }).then(res => {
        callback(res.data)
    })
}
function DeletePortofilo(id, callback) {
    instance.delete(`portofilos/${id}`).then(res => {
        callback(res.data)
    })
}




export default {
    StorePost,
    ShowPortofilo,
    DeletePortofilo,
    UpdatePortofilo,
    ListPost
};