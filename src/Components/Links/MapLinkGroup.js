import { connect } from "react-redux";
import { Modal , Button } from 'react-bootstrap'
import { useState } from "react";
import Links from "../../Api/Links";
import actions from './../../actions';
import { toast } from 'react-toastify';


function CreateLinkGroup(props) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    let hanleDelete = () => {
        setShow(true)
    }



    let SuccessModal = (id)=>{
        Links.linkDelete(id , (data) => {
            props.dispatch(actions.DeleteLink(id));
            setShow(false);
            toast.warning('اطلاعات با موفقیت حذف گردید')
        })
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
                        <button type="button" className="btn btn-sm btn-danger js-tooltip-enabled"
                            data-toggle="tooltip" title data-original-title="Edit"
                            onClick={e => hanleDelete(props.id)}


                        >
                            <i className="fa fa-pencil-alt" />
                        </button>
                        <button type="button" className="btn btn-sm btn-primary js-tooltip-enabled" data-toggle="tooltip" title data-original-title="Delete">
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




        </>
    )
}


export default connect()(CreateLinkGroup);