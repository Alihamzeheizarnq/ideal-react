import instance from "./Ideal"


function UploadImages(image, Callback) {
    instance.post('uploads/images', { image }).then(res => {
            Callback(res.data)
        })
}


export default { UploadImages }