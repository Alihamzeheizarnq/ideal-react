import { useState } from "react";
import { Modal, Button } from 'react-bootstrap';
import { connect } from "react-redux";
import actions from "../../actions";
import ApiPortofilo from '../../Api/Portofilo';
import { ideal } from '../../config'

function Item(props) {

    let [show , setShow] = useState(false); 


    let handleDelete = (e) => {

        setShow(true)
    }  
    let handleClose = (e) => {

        setShow(false)
    }
    let SuccessModal =(id) => {
        ApiPortofilo.DeletePortofilo(id , (data) => {
            props.dispatch(actions.DeletePortofilo(id))
        })
    }
    return (
        <>
            <tr>
                <th className="text-center" scope="row">{props.index}</th>
                <td className="font-w600">
                    <a href="be_pages_generic_profile.html">{props.title}</a>
                </td>
                <td className="d-sm-table-cell">
                    <img className="image-portopfilo" src={`${ideal.url}/storage${props.image.url}`} />
                </td>
                <td className="d-none d-sm-table-cell">
                    {props.client}
                </td>
                <td className="d-none d-sm-table-cell">
                    {props.address}
                </td>
                <td className="d-none d-sm-table-cell">
                    {
                        props.status ?
                            <span className="badge badge-success">فعال</span>
                            : <span className="badge badge-warning">غیر فعال</span>

                    }
                </td>
                <td className="text-center">
                    <div className="btn-group">
                        <button onClick={e => props.history.push(`/portofilo/edit/${props.id}`)} type="button" className="btn btn-sm btn-primary js-tooltip-enabled" data-toggle="tooltip" title data-original-title="Edit">
                            <i className="fa fa-pencil-alt" />
                        </button>
                        <button type="button" onClick={e => handleDelete(e)} className="btn btn-sm btn-primary js-tooltip-enabled" data-toggle="tooltip" title data-original-title="Delete">
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

export default connect()(Item);