import { useState } from 'react';
import { FaPencilAlt, FaTrash } from 'react-icons/fa';
import { Modal, Button } from 'react-bootstrap'

function ItemCat(props) {

    const [show, setShow] = useState(false);
    const [edit, setEdit] = useState(false);
    const [name, setName] = useState(props.name);



    let handleClose = () => {
        setShow(false);
    } 
      let handleCloseEdit = () => {
        setEdit(false);
    }
    let SuccessModal = (id)=> {
        console.log(id)
    }

    let SuccessModalEdit = (e ,id)=> {
        e.preventDefault();
        console.log(id)

    }
    return (
        <>
            <span>{props.name}</span>
            <div style={{ display: 'inline', float: 'left' }}>
                <a className="float-right delete-category dd-nodrag"  onClick={e => setEdit(true)}><FaPencilAlt /></a>
                <a className="float-right delete-category dd-nodrag mr-2 text-danger"  onClick={e => setShow(true)}><FaTrash /></a>
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
                            className="form-control mb-2 ml-2 mr-sm-2 mb-sm-0 is-invalid"
                            id="example-if-email"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            placeholder="نام سرگروه را وارد کنید"
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


export default ItemCat;