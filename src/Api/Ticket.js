import { instance } from "./Ideal";

function ListTicket(page , callback) {
    instance.get(`tickets?${page}`).then(res => callback(res.data));
}

function DeleteTicket(id, callback) {
    instance.delete(`tickets/${id}`).then(res => callback(res.data));
}

function UpdateTicket(id, callback) {
    instance.put(`tickets/${id}`).then(res => callback(res.data));
}

function CountTicket(callback) {
    instance.get(`view/tickets`).then(res => callback(res.data));
}

export default {
    ListTicket,
    DeleteTicket,
    UpdateTicket,
    CountTicket
}