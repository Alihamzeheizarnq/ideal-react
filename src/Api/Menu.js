import { instance } from "./Ideal";

function ListMenu(callback) {
    instance.get('menus').then(res => callback(res.data));
}
function CreateMenu(title, link, type, callback) {
    instance.post('menus', { title, link, type }).then(res => callback(res.data));
}
function EditMenu(id, title, link, type, callback) {
    instance.put(`menus/${id}`, { title, link, type }).then(res => callback(res.data));
}
function DeleteMenu(id, callback) {
    instance.delete(`menus/${id}`).then(res => callback(res.data));
}
function SortMenu(menus, callback) {
    instance.post('sortable/menu', { menus }).then(res => callback(res.data));
}



export default {
    ListMenu,
    CreateMenu,
    SortMenu,
    EditMenu,
    DeleteMenu

}