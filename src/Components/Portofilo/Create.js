import animate from './../Partials/animate';
import { StyleRoot } from 'radium';
import Breadcrumb from "../Partials/Breadcrumb";
import breadcrumb from "../../breadcrub";
import CKEditor from 'ckeditor4-react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';





function Create() {

    let [title, setTitle] = useState('');
    let [client, setClient] = useState('');
    let [address, setAddress] = useState('');
    let [body, setBody] = useState('');
    let [img, setImg] = useState('');
    let [image, setImages] = useState('');





    let imgUpload = (e) => {
        console.log(e.target.value)
    }

    let imagesUpload = (e) => {
        console.log(e)
    }










    let header = breadcrumb('portofilo.create');

    return (
        <>
            <Breadcrumb header={header} />

            <StyleRoot>
                <div className="content content-full content-boxed" style={animate.bounce}>
                    <form action="be_pages_blog_post_add.html" method="POST" encType="multipart/form-data" onsubmit="return false;">
                        <div className="block">
                            <div className="block-header block-header-default">
                                <a className="btn btn-light" style={{ fontFamily: 'IRANSansfanum' }} href="be_pages_blog_post_manage.html">
                                    <i className="fa fa-arrow-left mr-1" />  ایجاد نمنه کار
                                </a>
                                <div className="block-options">
                                    <div className="custom-control custom-switch custom-control-success">
                                        <input type="checkbox" className="custom-control-input" id="dm-post-add-active" name="dm-post-add-active" />
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
                                        <div className="form-group row">
                                            <div className="col-xl-6">
                                                <label>تصویر شاخص</label>
                                                <div className="custom-file">
                                                    <input
                                                        type="file"
                                                        className="custom-file-input"
                                                        id="dm-post-add-image"
                                                        name="img"
                                                        onChange={e => imgUpload(e)}
                                                        data-toggle="custom-file-input"
                                                    />
                                                    <label className="custom-file-label" htmlFor="dm-post-add-image"></label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="form-group row">
                                            <div className="col-xl-6">
                                                <label>تصاویر بیشتر</label>
                                                <div className="custom-file">
                                                    <input
                                                        type="file"
                                                        className="custom-file-input"
                                                        id="dm-post-add-image"
                                                        name="images"
                                                        data-toggle="custom-file-input"
                                                        onChange={e => imagesUpload(e)}

                                                    />
                                                    <label className="custom-file-label" htmlFor="dm-post-add-image"></label>
                                                </div>
                                            </div>
                                        </div>



                            


                                        <div className="row">
                                            <div className="col-md-2 col-sm-2" style={{ width: 'unset' }}>
                                                <div className='image-drup'>
                                                    <img  src="https://images.freeimages.com/images/large-previews/560/a-rose-is-just-a-rose-1399719.jpg" />
                                                    <Button variant="primary" size="sm">
                                                        حذف
                                                    </Button>
                                                </div>
                                            </div> <div className="col-md-2 col-sm-2" style={{ width: 'unset' }}>
                                                <div className='image-drup'>
                                                    <img  src="https://images.freeimages.com/images/large-previews/560/a-rose-is-just-a-rose-1399719.jpg" />
                                                    <Button variant="primary" size="sm">
                                                        حذف
                                                    </Button>
                                                </div>
                                            </div> <div className="col-md-2 col-sm-2" style={{ width: 'unset' }}>
                                                <div className='image-drup'>
                                                    <img  src="https://images.freeimages.com/images/large-previews/560/a-rose-is-just-a-rose-1399719.jpg" />
                                                    <Button variant="primary" size="sm">
                                                        حذف
                                                    </Button>
                                                </div>
                                            </div> <div className="col-md-2 col-sm-2 ml-0" style={{ width: 'unset' }}>
                                                <div className='image-drup'>
                                                    <img  src="https://images.freeimages.com/images/large-previews/560/a-rose-is-just-a-rose-1399719.jpg" />
                                                    <Button variant="primary" size="sm">
                                                        حذف
                                                    </Button>
                                                </div>
                                            </div> <div className="col-md-2 col-sm-2" style={{ width: 'unset' }}>
                                                <div className='image-drup'>
                                                    <img  src="https://images.freeimages.com/images/large-previews/560/a-rose-is-just-a-rose-1399719.jpg" />
                                                    <Button variant="primary" size="sm">
                                                        حذف
                                                    </Button>
                                                </div>
                                            </div>
                                 
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="block-content bg-body-light">
                                <div className="row justify-content-center push">
                                    <div className="col-md-10">
                                        <button type="submit" className="btn btn-alt-primary">
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

export default Create;