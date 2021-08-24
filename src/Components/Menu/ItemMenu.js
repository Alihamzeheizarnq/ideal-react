import { useState } from 'react';
import { FaPencilAlt, FaTrash } from 'react-icons/fa';
import { Modal, Button } from 'react-bootstrap'
import actions from '../../actions';
import { connect } from 'react-redux';
import PostCategory from '../../Api/PostCategory';
import { toast } from 'react-toastify';
import Menu from '../../Api/Menu';

function ItemCat(props) {

    const [show, setShow] = useState(false);
    const [edit, setEdit] = useState(false);
    const [name, setName] = useState(props.title);
    const [link, setLink] = useState(props.link);
    const [type, setType] = useState(props.type);



    let handleClose = () => {
        setShow(false);
    }
    let handleCloseEdit = () => {
        setEdit(false);
    }
    let SuccessModal = (id) => {
        Menu.DeleteMenu(id, (data) => {

            props.dispatch(actions.DeleteMenu(id));

            setShow(false);
            toast.warning(' منو با موفقیت حذف گردید');


        })
    }

    let SuccessModalEdit = (e, id) => {
        e.preventDefault();
        let url = link;
        if(type != 'dynumic'){
            url = '#';
        }
        Menu.EditMenu(id, name , url , type, (data) => {
            if (data.status) {
                props.dispatch(actions.EditMenu(id, name , url , type));
                setEdit(false)
                toast.success(' منو با موفقیت ویرایش گردید');

            }

        })

    }
    return (
        <>
            <span className="name-menu">{props.title}
                <span style={{ fontSize: '11px' }}>    {props.type != 'dynumic' ? '(ثابت)(وبلاگ)' : ''}
                    <span className="link-title" dir="ltr" style={{ marginRight: '24px', color: 'blue' }}>
                        ({props.link})
                    </span>
                </span>
            </span>
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
                            className="form-control mb-2 ml-2 mr-sm-2 mb-sm-2 is-invalid"
                            id="example-if-email"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            placeholder="عنوان منو را وارد کنید"
                        />
                        {
                            type == 'dynumic' ? (
                                <input type="text"
                                    style={{ direction: 'ltr' }}
                                    className={`form-control mb-2 ml-2 mr-sm-2 mb-sm-2`}
                                    id="example-if-email"
                                    name="example-if-email"
                                    placeholder="لینک منو را وارد کنید  "
                                    onChange={e => setLink(e.target.value)}
                                    value={link}

                                />
                            ) : ''
                        }

                        <select
                            className={`mb-2 ml-2 custom-select`}
                            id="example-if-email"
                            name="type"
                            placeholder="نوع منو را انتخاب کنید"
                            onChange={e => setType(e.target.value)}
                            value={type}

                        >
                            <option className="mr-4" value="dynumic">معمولی</option>
                            <option className="mr-4" value="post">وبلاگ (ثابت)</option>


                        </select>

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