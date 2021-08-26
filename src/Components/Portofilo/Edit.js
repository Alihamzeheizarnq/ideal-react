import animate from '../Partials/animate';
import { StyleRoot } from 'radium';
import Breadcrumb from "../Partials/Breadcrumb";
import breadcrumb from "../../breadcrub";
import { CKEditor } from '@ckeditor/ckeditor5-react'
import DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';
import { ckeditor } from './../../config';
import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Upload from '../../Api/UploadFile';
import { connect } from 'react-redux';
import ApiProtofilo from '../../Api/Portofilo';
import { toast } from 'react-toastify';
import ApiPortofilo from '../../Api/Portofilo';

function Edit(props) {

    let [title, setTitle] = useState('');
    let [client, setClient] = useState('');
    let [address, setAddress] = useState('');
    let [body, setBody] = useState('');
    let [img, setImg] = useState('');
    let [image, setImages] = useState('');
    let [status, setStatus] = useState(true);
    let [btn, setBtn] = useState(false);
    let [imageEdit, setImageEdit] = useState([]);
    let [imagesEdit, setImagesEdit] = useState([]);
    let [listDelete, setListDelete] = useState([]);



    useEffect(() => {
        let id = props.match.params.id;

        ApiPortofilo.ShowPortofilo(id, data => {
            setTitle(data.title);
            setClient(data.client);
            setAddress(data.address);
            setBody(data.body);
            setStatus(data.status);
            setImageEdit([data.image]);
            setImagesEdit(data.images);


        })

    }, [])

    let handleForm = (e) => {
        e.preventDefault();
        setBtn(true)

        setTimeout(() => {
            setBtn(false)
        }, 5000);
        let image = '';
        if (imageEdit.length) {
            image = imageEdit[0].url;
        }

        ApiProtofilo.UpdatePortofilo(props.match.params.id, { title, client, address, body, image, images: imagesEdit, status, list_delete: listDelete }, (data) => {
            toast.success('ویرایش با موفقیت انجام شد');
            props.history.push('/portofilo')
        })

    }



    let DeleteImages = (id, url) => {
        setListDelete(state => {
            return [
                ...state,
                { url }
            ]
        })
        setImagesEdit(state => {
            return state.filter(item => item.url != url)
        })

    }
    let DeleteImage = (url) => {
        setListDelete(state => {
            return [
                ...state,
                { url }
            ]
        })
        setImageEdit(state => {
            return state.filter(item => item.url != url)
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
                setImageEdit([data])
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

                setImagesEdit(state => {
                    return [
                        ...state,
                        { url: data.url }
                    ]
                })
            })
        })
        setImages('');
    }
    let header = breadcrumb('portofilo.edit');

    return (
        <>
            <Breadcrumb header={header} />

            <StyleRoot>
                <div className="content content-full content-boxed" style={animate.bounce}>
                    <form onSubmit={handleForm} method="POST" encType="multipart/form-data" >
                        <div className="block">
                            <div className="block-header block-header-default">
                                <a className="btn btn-light" style={{ fontFamily: 'IRANSansfanum' }} href="be_pages_blog_post_manage.html">
                                    <i className="fa fa-arrow-left mr-1" />    ویرایش
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
                                                onReady={editor => {

                                                   
                                                    // Insert the toolbar before the editable area.
                                                    editor.ui.getEditableElement().parentElement.insertBefore(
                                                        editor.ui.view.toolbar.element,
                                                        editor.ui.getEditableElement()
                                                    );


                                                    // this.editor = editor;
                                                }}
                                                onError={({ willEditorRestart }) => {
                                                    // If the editor is restarted, the toolbar element will be created once again.
                                                    // The `onReady` callback will be called again and the new toolbar will be added.
                                                    // This is why you need to remove the older toolbar.
                                                    if (willEditorRestart) {
                                                        // this.editor.ui.view.toolbar.element.remove();
                                                    }
                                                }}
                                                onChange={(event, editor) => {
                                            
                                                 
                                                    setBody(editor.getData());
                                                    
                                                }}
                                                editor={DecoupledEditor}
                                                config={ckeditor}

                                                data={body}
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

                                                imageEdit.map(item => (
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

                                                imagesEdit.map(item => (
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
                                            <i className="fa fa-fw fa-check mr-1" />  به روزرسانی
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
export default connect(mapStateToProps)(Edit);