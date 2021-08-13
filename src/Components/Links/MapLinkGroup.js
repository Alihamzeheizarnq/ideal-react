import { connect } from "react-redux";
import { Modal, Button } from 'react-bootstrap'
import { useState } from "react";
import Links from "../../Api/Links";
import actions from './../../actions';
import { toast } from 'react-toastify';
import validators from '../fa'


function CreateLinkGroup(props) {

    const [show, setShow] = useState(false);
    const [edit, setEdit] = useState(false);
    const [name, setName] = useState(props.name);
    const handleClose = () => setShow(false);
    const handleCloseEdit = () => setEdit(false);
    let hanleDelete = () => {
        setShow(true)
    }

    let hanleDeleteEdit = () => {
        setEdit(true)
    }




    let SuccessModal = (id) => {
        Links.linkDelete(id, (data) => {
            props.dispatch(actions.DeleteLink(id));
            setShow(false);
            toast.warning('اطلاعات با موفقیت حذف گردید')
        })
    }
    let SuccessModalEdit = (e, id) => {
        e.preventDefault();

        validators.purgeFields();

        if (validators.allValid()) {
            Links.LinkEdit(id, name, (data) => {
                props.dispatch(actions.EditLink(id, name));
                setEdit(false);
                toast.success('اطلاعات با موفقیت ویرایش گردید')

            })
        } else {
            for (const property in validators.errorMessages) {
                toast.error(validators.errorMessages[property]);
            }
        }


    }


    return (
        <>

            <tr>
                <th className="text-center" scope="row">{props.id}</th>
                <td className="font-w600">
                    <a href="be_pages_generic_profile.html">{props.name}</a>
                </td>
                <td className="text-center">
                    <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-success js-tooltip-enabled"
                            data-toggle="tooltip" title data-original-title="Edit"
                            onClick={e => hanleDeleteEdit(props.id)}


                        >
                            <i className="fa fa-pencil-alt" />
                        </button>
                        <button type="button" className="btn btn-sm btn-danger js-tooltip-enabled"
                            ata-toggle="tooltip" title data-original-title="Delete"
                            onClick={e => hanleDelete(props.id)}
                        >
                            <i className="fa fa-times" />
                        </button>
                    </div>
                </td>
            </tr>
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
                        {validators.message('name', name, 'required|min:3')}

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


export default connect()(CreateLinkGroup);