import instance from "./Ideal";



function ListPortofilo(page,callback) {
    instance.get(`portofilos?${page}`).then(res => {
        callback(res.data)
    })
}
function StorePortofilo(data, callback) {
    let { title, client, address, body, image, images, status } = data;
    instance.post('portofilos', { title, client, address, body, image, images, status }).then(res => {
        callback(res.data)
    })
}

function ShowPortofilo(id, callback) {
    instance.get(`portofilos/${id}`).then(res => {
        callback(res.data)
    })
}
function UpdatePortofilo(id, data, callback) {
    let { title, client, address, body, image, images, status , list_delete } = data;
    instance.put(`portofilos/${id}`, { title, client, address, body, image, images, status , list_delete }).then(res => {
        callback(res.data)
    })
}
function DeletePortofilo(id, callback) {
    instance.delete(`portofilos/${id}`).then(res => {
        callback(res.data)
    })
}




export default {
    ListPortofilo,
    StorePortofilo,
    ShowPortofilo,
    DeletePortofilo,
    UpdatePortofilo
};