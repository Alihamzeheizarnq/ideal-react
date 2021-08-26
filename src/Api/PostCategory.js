import { instance } from "./Ideal";




function ListPostCategory(callback) {
    instance.get('posts/category').then(res => callback(res.data));
}
function CreatePostCategory(name , slug  , callback) {
    instance.post('posts/category', { name, slug , type: 'post' }).then(res => callback(res.data));
}
function EditPostCategory(id , name , slug , callback) {
    instance.put(`posts/category/${id}`, { name , slug }).then(res => callback(res.data));
}
function DeletePostCategory(id , callback) {
    instance.delete(`posts/category/${id}`).then(res => callback(res.data));
}
function SortPostCategory(categories, callback) {
    instance.post('posts/category/sort', { categories}).then(res => callback(res.data));
}



export default {
    ListPostCategory,
    CreatePostCategory,
    SortPostCategory,
    EditPostCategory,
    DeletePostCategory

}