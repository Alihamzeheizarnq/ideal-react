import {instance} from "./Ideal"


function UploadImages(image, Callback) {
    instance.post('upload/images',  image ).then(res => {
            Callback(res.data)
        })
}

function DeleteImages(url, Callback) {
    instance.delete(`upload/images/delete?url=${url}`).then(res => {
            Callback(res.data)
        })
}


export default { UploadImages , DeleteImages}