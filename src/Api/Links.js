import { instance , setHeader } from "./Ideal"


function linkStore(text, callback) {

    instance.post('link/groups', { text }).then(res => {
        callback(res.data)
    })
}
function linkIndex(callback) {

    instance.get('link/groups').then(res => {
        callback(res.data)
    })
}

function linkDelete(id, callback) {
    instance.delete(`link/groups/${id}`).then(res => {
        callback(res.data)
    })
}
function LinkEdit(id, name, callback) {
    instance.put(`link/groups/${id}`, { name }).then(res => {
        callback(res.data)
    })
}
function LinkSortable(data, callback) {
    instance.put(`link/sort`, { data }).then(res => {
        callback(res.data)
    })
}

function LinkOrigin(data, callback) {
    instance.get(`links`, { data }).then(res => {
        callback(res.data)
    })
}
function LinkOriginStore(data, callback) {
    instance.post(`links`, { data }).then(res => {
        callback(res.data)
    })
}
function linkOriginDelete(id, callback) {
    instance.delete(`links/${id}`).then(res => {
        callback(res.data)
    })
}
function LinkSortChild(data, callback) {
    instance.put(`links/child/sort`, { data }).then(res => {
        callback(res.data)
    })
}
function LinkOriginEdit(id, title, link, group_id, callback) {
    instance.put(`links/${id}`, { title, link, group_id }).then(res => {
        callback(res.data)
    })
}




export default {
    linkStore,
    linkIndex,
    linkDelete,
    LinkEdit,
    LinkSortable,
    LinkOrigin,
    LinkOriginStore,
    LinkSortChild,
    LinkOriginEdit,
    linkOriginDelete
};