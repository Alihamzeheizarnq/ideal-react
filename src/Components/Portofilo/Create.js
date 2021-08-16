import animate from './../Partials/animate';
import { StyleRoot } from 'radium';
import Breadcrumb from "../Partials/Breadcrumb";
import breadcrumb from "../../breadcrub";
import CKEditor from 'ckeditor4-react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import Upload from '../../Api/UploadFile';
import { connect } from 'react-redux';
import actions from '../../actions';
import ApiProtofilo from '../../Api/Portofilo';
import { toast } from 'react-toastify';

function Create(props) {

    let [title, setTitle] = useState('');
    let [client, setClient] = useState('');
    let [address, setAddress] = useState('');
    let [body, setBody] = useState('');
    let [img, setImg] = useState('');
    let [image, setImages] = useState('');
    let [status, setStatus] = useState(true);
    let [btn, setBtn] = useState(false);





    let handleForm = (e) => {
        e.preventDefault();
        setBtn(true)

        setTimeout(() => {
            setBtn(false)
        }, 5000);
        let image = '';
        if (props.files.image.length) {
            image = props.files.image[0].url;
        }

        ApiProtofilo.StorePortofilo({ title, client, address, body, image, images: props.files.images, status }, (data) => {
            props.dispatch(actions.AddPortofilo(data));
            props.dispatch(actions.ClearImages());
            setTitle('');
            setClient('');
            setAddress('');
            setBody('');
            setStatus(false);
            toast.success('نمونه کار با موفقیت ایجاد شد .');


        })

    }



    let DeleteImages = (id, url) => {
        const formData = new FormData();
        formData.append(
            "url",
            url
        );
        Upload.DeleteImages(url, (data) => {
            props.dispatch(actions.DeleteImage(id));
        })
    }
    let DeleteImage = (url) => {

        Upload.DeleteImages(url, (data) => {
            props.dispatch(actions.DeleteImg());
        })
    }
    let imgUpload = (e) => {
        let files = Array.prototype.slice.call(e.target.files);

        files.map(file => {
            const formData = new FormData();

            formData.append(
                "file",
                file,
                file.name,
            );
            Upload.UploadImages(formData, (data) => {
                props.dispatch(actions.ImgPortofilo(data))
            })
        })

        setImg('');




    }

    let imagesUpload = (e) => {
        let files = Array.prototype.slice.call(e.target.files);

        files.map(file => {
            const formData = new FormData();

            formData.append(
                "file",
                file,
                file.name,
            );
            Upload.UploadImages(formData, (data) => {
                props.dispatch(actions.ImagesPortofilo(data))
            })
        })
        setImages('');
    }
    let header = breadcrumb('portofilo.create');



    return (
        <>
            <Breadcrumb header={header} />

            <StyleRoot>
                <div className="content content-full content-boxed" style={animate.bounce}>
                    <form onSubmit={handleForm} method="POST" encType="multipart/form-data" >
                        <div className="block">
                            <div className="block-header block-header-default">
                                <a className="btn btn-light" style={{ fontFamily: 'IRANSansfanum' }} href="be_pages_blog_post_manage.html">
                                    <i className="fa fa-arrow-left mr-1" />  ایجاد نمنه کار
                                </a>
                                <div className="block-options">
                                    <div className="custom-control custom-switch custom-control-success">
                                        <input type="checkbox" onChange={e => setStatus(e.target.checked)} value={status} className="custom-control-input" id="dm-post-add-active" checked={status} />
                                        <label className="custom-control-label" htmlFor="dm-post-add-active">فعال</label>
                                    </div>
                                </div>
                            </div>
                            <div className="block-content">
                                <div className="row justify-content-center push">
                                    <div className="col-md-10">
                                        <div className="form-group">
                                            <label htmlFor="dm-post-add-title">عنوان</label>

                                            <input type="text"
                                                className="form-control"
                                                id="dm-post-add-title"
                                                name="title"
                                                value={title}
                                                onChange={e => setTitle(e.target.value)}
                                                placeholder="عنوان نمونه کار را وراد کنید ..."
                                            />

                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="dm-post-add-title">مشتری</label>
                                            <input type="text"
                                                className="form-control"
                                                id="dm-post-add-title"
                                                name="dm-post-add-title"
                                                value={client}
                                                onChange={e => setClient(e.target.value)}
                                                placeholder="عنوان نمونه کار را وراد کنید ..."
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="dm-post-add-title">آدرس</label>
                                            <input type="text"
                                                className="form-control"
                                                id="dm-post-add-title"
                                                name="dm-post-add-title"
                                                value={address}
                                                onChange={e => setAddress(e.target.value)}
                                                placeholder="عنوان نمونه کار را وراد کنید ..."
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="dm-post-add-excerpt">توضیحات کلی</label>

                                            <CKEditor
                                                data={body}
                                                onChange={evt => setBody(evt.editor.getData())}
                                                config={{

                                                    fontFamily: {
                                                        options: [
                                                            'IRANSansfanum',
                                                        ],
                                                    },
                                                    fontSize: {
                                                        options: [9, 11, 13, "default", 17, 19, 21],
                                                    },
                                                    language: ['fa']

                                                }}
                                            />
                                            <div className="form-text text-muted font-size-sm font-italic"></div>
                                        </div>


                                        <label className="mt-2">تصویر شاخص</label>

                                        <div className="row dropzone p-2">
                                            <input
                                                type="file"
                                                className="dropzone-input"
                                                id="dm-post-add-image"
                                                name="img"
                                                value={img}
                                                onChange={e => imgUpload(e)}
                                                data-toggle="custom-file-input"
                                            />
                                            {

                                                props.files.image.map(item => (

                                                    <div key={item.url} className="uploaded-pics" >
                                                        <div className='image-drup'>
                                                            <div className="img-box">
                                                                <img src={`http://localhost:8000/storage${item.url}`} />
                                                            </div>
                                                            <Button className="remove-btn" variant="danger" size="sm" onClick={e => DeleteImage(item.url)}>
                                                                حذف
                                                            </Button>
                                                        </div>
                                                    </div>
                                                ))
                                            }


                                        </div>




                                        <label className="mt-2"> تصاویر بیشتر</label>

                                        <div className="row dropzone p-2">
                                            <input
                                                type="file"
                                                className="dropzone-input"
                                                id="dm-post-add-image"
                                                name="images"
                                                data-toggle="custom-file-input"
                                                onChangeCapture={e => imagesUpload(e)}
                                                value={image}
                                                multiple

                                            />
                                            {

                                                props.files.images.map(item => (

                                                    <div key={item.url} className="uploaded-pics" >
                                                        <div className='image-drup'>
                                                            <div className="img-box">
                                                                <img src={`http://localhost:8000/storage${item.url}`} />
                                                            </div>
                                                            <Button className="remove-btn" variant="danger" size="sm" onClick={e => DeleteImages(item.id, item.url)}>
                                                                حذف
                                                            </Button>
                                                        </div>
                                                    </div>
                                                ))
                                            }


                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="block-content bg-body-light">
                                <div className="row justify-content-center push">
                                    <div className="col-md-10">
                                        <button type="submit" className="btn btn-alt-primary" disabled={btn}>
                                            <i className="fa fa-fw fa-check mr-1" />  ایجاد
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>

            </StyleRoot>

        </>
    );
}

let mapStateToProps = (state) => {
    return {
        files: state.files
    }
}
export default connect(mapStateToProps)(Create);