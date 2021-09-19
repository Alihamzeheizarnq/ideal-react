import { useState } from 'react';
import { StyleRoot } from 'radium';
import { CKEditor } from '@ckeditor/ckeditor5-react'
import DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';


import animate from './../Partials/animate';
import Breadcrumb from "../Partials/Breadcrumb";
import breadcrumb from "../../breadcrub";
import { ckeditor } from './../../config';
import Upload from '../../Api/UploadFile';
import actions from '../../actions';
import ApiComment from '../../Api/Comment';
import { ideal } from '../../config';

function Create(props) {

    let [title, setTitle] = useState('');
    let [body, setBody] = useState('');
    let [img, setImg] = useState('');
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

        ApiComment.StoreComment({ title, body, image }, (data) => {
            props.dispatch(actions.AddComment(data));
            props.dispatch(actions.ClearImages());
            setTitle('');
            setBody('');
            toast.success('نمونه کار با موفقیت ایجاد شد .');


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

    let header = breadcrumb('comments.create');



    return (
        <>
            <Breadcrumb header={header} />

            <StyleRoot>
                <div className="content content-full content-boxed" style={animate.bounce}>
                    <form onSubmit={handleForm} method="POST" encType="multipart/form-data" >
                        <div className="block">
                            <div className="block-header block-header-default">
                                <a className="btn btn-light" style={{ fontFamily: 'IRANSansfanum' }} >
                                    <i className="fa fa-arrow-left mr-1" />  ایجاد نمنه کار
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
                                            <label htmlFor="dm-post-add-excerpt"> نظر</label>


                                            <CKEditor
                                                onReady={editor => {
                                                    editor.ui.getEditableElement().parentElement.insertBefore(
                                                        editor.ui.view.toolbar.element,
                                                        editor.ui.getEditableElement()
                                                    );
                                                }}
                                                onError={({ willEditorRestart }) => {
                                    
                                                    if (willEditorRestart) {
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


                                        <label className="mt-2">تصویر </label>

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
                                                                <img src={`${ideal.url}/storage${item.url}`} />
                                                                <Button className="remove-btn" variant="danger" size="sm" onClick={e => DeleteImage(item.url)}>
                                                                    حذف
                                                                </Button>
                                                            </div>
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