import { instance } from "./Ideal";

function ListVisitor(callback) {
    instance.get('visitor').then(res => callback(res.data));
}

export default {
    ListVisitor
}