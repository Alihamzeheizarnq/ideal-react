import animate from './../Partials/animate';
import { StyleRoot } from 'radium';
import Breadcrumb from "../Partials/Breadcrumb";
import breadcrumb from "../../breadcrub";
import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Upload from '../../Api/UploadFile';
import { connect } from 'react-redux';
import actions from '../../actions';
import { toast } from 'react-toastify';
import Input from './Taginput';
import PostCategory from '../../Api/PostCategory';
import Post from '../../Api/Post';
import { CKEditor } from '@ckeditor/ckeditor5-react'
import DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';
import { ckeditor , ideal} from './../../config';

function Edit(props) {

    useEffect(() => {
        PostCategory.ListPostCategory(data => {
            props.dispatch(actions.ListPostCategory(data))

        })
    }, []);

    let [title, setTitle] = useState('');
    let [category_id, setCategory_id] = useState('');
    let [slug, setSlug] = useState('');
    let [body, setBody] = useState('');
    let [img, setImg] = useState('');
    let [status, setStatus] = useState(true);
    let [meta_description, setMeta_description] = useState('');
    let [tags, setTags] = useState({ tags: [] });
    let [meta_title, setMeta_title] = useState('');
    let [image, setImage] = useState('');
    let [btn, setBtn] = useState(false);
    let [loding, setLoding] = useState(false);
    let [listDelete, setListDelete] = useState({ url: [] });


    useEffect(() => {
        Post.ShowPost(props.match.params.id, data => {
            console.log(data);
            setTitle(data.title);
            setCategory_id(data.category_id);
            setSlug(data.slug);
            setBody(data.body);
            setImage(data.image);
            setStatus(data.status);
            setMeta_description(data.meta_description);
            setMeta_title(data.meta_title);
            setTags({ tags: data.tags });

            setLoding(true);
        } , error => {
            if(error.status == 404) props.history.push('/404')

        })
    }, [])


    let handleForm = (e) => {
        e.preventDefault();
        setBtn(true)

        setTimeout(() => {
            setBtn(false)
        }, 5000);


        Post.EditPost(props.match.params.id, { title, category_id, slug, meta_title, meta_description, body, tags: tags.tags, image, status, listDelete }, (data) => {

            if(data.status){
             props.history.push('/posts');
            toast.success('پست با موفقیت ویرایش شد .');

            }
            

        })

    }


    let tagsHanle = (tags) => {
        setTags({ tags })
    }


    let DeleteImage = (url) => {
        setListDelete(old => ({
            url: [...old.url, url]
        }))
        setImage(false);
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
            setListDelete(old => ({
                url: [...old.url, image]
            }))
            Upload.UploadImages(formData, (data) => {


                setImage(data.url)



            })
        })

        setImg('');




    }

    let header = breadcrumb('posts.create');



    let render = (
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
                                        <div className="row">
                                            <div className="col-md-6 form-group">

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
                                            <div className="col-md-6 form-group">
                                                <label htmlFor="dm-post-add-title">دسته بندی</label>

                                                <select type="text"
                                                    className="form-control"
                                                    id="dm-post-add-title"
                                                    name="title"
                                                    value={category_id}
                                                    onChange={e => setCategory_id(e.target.value)}
                                                    placeholder="عنوان نمونه کار را وراد کنید ..."
                                                >
                                                    <option selected>انتخاب کنید</option>

                                                    {
                                                        props.post_category.map(item => (<option key={item.id} value={item.id} >{item.name}</option>))
                                                    }

                                                </select>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6 form-group">

                                                <label htmlFor="dm-post-add-title">آدرس (url)</label>

                                                <input type="text"
                                                    className="form-control"
                                                    id="dm-post-add-title"
                                                    name="title"
                                                    value={slug}
                                                    onChange={e => setSlug(e.target.value)}
                                                    placeholder="عنوان نمونه کار را وراد کنید ..."
                                                />
                                            </div>
                                            <div className="col-md-6 form-group">

                                                <label htmlFor="dm-post-add-title">عنوان سئو</label>

                                                <input type="text"
                                                    className="form-control"
                                                    id="dm-post-add-title"
                                                    name="title"
                                                    value={meta_title}
                                                    onChange={e => setMeta_title(e.target.value)}
                                                    placeholder="عنوان نمونه کار را وراد کنید ..."
                                                />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6 form-group">

                                                <label htmlFor="dm-post-add-title"> توضیحات سئو</label>

                                                <textarea type="text"
                                                    rows="5"
                                                    className="form-control"
                                                    id="dm-post-add-title"
                                                    name="title"
                                                    value={meta_description}
                                                    onChange={e => setMeta_description(e.target.value)}
                                                    placeholder="عنوان نمونه کار را وراد کنید ..."
                                                >
                                                </textarea>
                                            </div>
                                            <Input handleTag={tagsHanle} tags={tags} />
                                        </div>
                                        <div className="form-group text-ckeditor">
                                            <label htmlFor="dm-post-add-excerpt">توضیحات کلی</label>

                                         
                                            
                                            <CKEditor
                                                onReady={editor => {

                                                   
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
                                                image ? (
                                                    <div className="uploaded-pics" >
                                                        <div className='image-drup'>
                                                            <div className="img-box">
                                                                <img src={`${ideal.url}/storage${image}`} />
                                                            </div>
                                                            <Button className="remove-btn" variant="danger" size="sm" onClick={e => DeleteImage(image)}>
                                                                حذف
                                                            </Button>
                                                        </div>
                                                    </div>
                                                ) : ''

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
    let load = (
        <div>
            <Breadcrumb header={header} />

            <div className="content content-full content-boxed">

                <div className="spinner-border text-primary" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>

        </div>
    );

    return loding ? render : load;
}

let mapStateToProps = (state) => {
    return {
        files: state.files,
        post_category: state.post_category.categories
    }
}
export default connect(mapStateToProps)(Edit);