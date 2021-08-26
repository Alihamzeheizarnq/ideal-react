import { useState } from 'react';
import { FaPencilAlt, FaTrash } from 'react-icons/fa';
import { Modal, Button } from 'react-bootstrap'
import actions from '../../actions';
import { connect } from 'react-redux';
import PostCategory from '../../Api/PostCategory';
import { toast } from 'react-toastify';

function ItemCat(props) {

    const [show, setShow] = useState(false);
    const [edit, setEdit] = useState(false);
    
    const [name, setName] = useState(props.name);
    const [slug, setSlug] = useState(props.slug);


    let handleClose = () => {
        setShow(false);
    }
    let handleCloseEdit = () => {
        setEdit(false);
    }
    let SuccessModal = (id) => {
        PostCategory.DeletePostCategory(id, (data) => {

            props.dispatch(actions.DeletePostCategory(id));

            setShow(false);
            toast.warning('دسته بندی با موفقیت حذف گردید');


        })
    }

    let SuccessModalEdit = (e, id) => {
        console.log(id)
        e.preventDefault();
        PostCategory.EditPostCategory(id, name , slug, (data) => {
            if (data.status) {
                setSlug(data.slug)
                props.dispatch(actions.EditPostCategory(id, name , data.slug));
                setEdit(false)
                toast.success('دسته بندی با موفقیت ویرایش گردید');

            }

        })

    }
    return (
        <>
            <span>{props.name}</span>
            <div style={{ display: 'inline', float: 'left' }}>
                <a className="float-right delete-category dd-nodrag" onClick={e => setEdit(true)}><FaPencilAlt /></a>
                <a className="float-right delete-category dd-nodrag mr-2 text-danger" onClick={e => setShow(true)}><FaTrash /></a>
            </div>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>حذف اطلاعات</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    آیا مطمعن هستید؟
                    اطلاعات به صورت کامل حذف خواهد شد
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        لغو
                    </Button>
                    <Button variant="primary" onClick={e => SuccessModal(props.id)}>بله</Button>
                </Modal.Footer>
            </Modal>
            <Modal
                show={edit}
                onHide={handleCloseEdit}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>ویرایش اطلاعات</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={e => SuccessModalEdit(e, props.id)}>
                        <input type="text"
                            className="form-control mb-2 ml-2 mr-sm-2  is-invalid"
                            id="example-if-email"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            placeholder="نام سرگروه را وارد کنید"
                        />
                        <input type="text"
                            className="form-control mb-2 ml-2 mr-sm-2 mb-sm-0 is-invalid"
                            id="example-if-email"
                            value={slug}
                            onChange={e => setSlug(e.target.value)}
                            placeholder="آدرس (slug)"
                        />

                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleCloseEdit}>
                                لغو
                            </Button>
                            <Button variant="primary" type="submit">بله</Button>
                        </Modal.Footer>
                    </form>



                </Modal.Body>

            </Modal>
        </>
    )
}


export default connect()(ItemCat);