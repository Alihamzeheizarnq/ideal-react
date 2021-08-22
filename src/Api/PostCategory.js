import { instance } from "./Ideal";




function ListPostCategory(callback) {
    instance.get('posts/category').then(res => callback(res.data));
}
function CreatePostCategory(name, callback) {
    instance.post('posts/category', { name, type: 'post' }).then(res => callback(res.data));
}
function SortPostCategory(categories, callback) {
    instance.post('posts/category/sort', { categories}).then(res => callback(res.data));
}



export default {
    ListPostCategory,
    CreatePostCategory,
    SortPostCategory

}