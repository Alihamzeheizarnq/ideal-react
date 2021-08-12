import instance from "./Ideal"


function linkStore(text , callback) {
    instance.post('link/groups', { text }).then(res => {
        callback(res.data)
    })
}


export default { linkStore };