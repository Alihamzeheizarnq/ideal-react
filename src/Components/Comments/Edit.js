import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { StyleRoot } from 'radium';
import { CKEditor } from '@ckeditor/ckeditor5-react'
import { toast } from 'react-toastify';
import DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';


import { ideal } from '../../config';
import animate from '../Partials/animate';
import Breadcrumb from "../Partials/Breadcrumb";
import breadcrumb from "../../breadcrub";
import { ckeditor } from './../../config';
import Upload from '../../Api/UploadFile';
import ApiComments from '../../Api/Comment';

function Edit(props) {

    let [title, setTitle] = useState('');
    let [body, setBody] = useState('');
    let [img, setImg] = useState('');
    let [imageEdit, setImageEdit] = useState([]);



    useEffect(() => {
        let id = props.match.params.id;
        ApiComments.ShowComment(id, ({ data }) => {
            setTitle(data.name);
            setBody(data.body);
            setImageEdit([data.image]);

        }, error => {
            if (error.status && error.status == 404) props.history.push('/404')
        })

    }, [])

    let handleForm = (e) => {
        e.preventDefault();

        ApiComments.UpdateComment(props.match.params.id, { title, body, image: imageEdit.join('') }, (data) => {
            toast.success('ویرایش با موفقیت انجام شد');
            props.history.push('/comments');
        })

    }

    let DeleteImage = (url) => {
        setImageEdit(state => {
            return state.filter(item => item.url != url)
        })
    }
    let imgUpload = (e) => {
        let files = Array.prototype.slice.call(e.target.files);

        files.map(file => {
            const formData = new FormData();
            formData.append("file",file,file.name);
            Upload.UploadImages(formData, (data) => {
                setImageEdit([data.url])
            })
        })
        setImg('');
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
                                <a className="btn btn-light" style={{ fontFamily: 'IRANSansfanum' }}>
                                    <i className="fa fa-arrow-left mr-1" />    ویرایش
                                </a>

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
                                                                <img src={`${ideal.url}/storage${item}`} />
                                                            </div>
                                                            <Button className="remove-btn" variant="danger" size="sm" onClick={e => DeleteImage(item.url)}>
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
                                        <button type="submit" className="btn btn-alt-primary" >
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