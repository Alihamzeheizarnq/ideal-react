import { instance } from "./Ideal";

async function ListTicket(page)
{
    try { return await instance.get( `tickets?${page}` ) } catch (error) { throw error }
}
function DeleteTicket(id, callback ,  err) {
    instance.delete(`tickets/${id}`).then(res => callback(res.data)).catch(error => err(error));
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