import { useState } from "react";
import { Modal, Button } from 'react-bootstrap';
import { connect } from "react-redux";
import actions from "../../actions";
import ApiComment from '../../Api/Comment';
import { ideal } from '../../config'

function Item(props) {

    let [show, setShow] = useState(false);
    let [view, setView] = useState(false);



    let handleDelete = (e) => {

        setShow(true)
    }
    let handleClose = (e) => {

        setShow(false)
    }
    let SuccessModal = (id) => {
        ApiComment.DeleteComment(id, (data) => {
            props.dispatch(actions.DeleteComment(id))
        })
    }


    let handleView = (id) => {
        setView(true);

    }
    return (
        <>
            <tr>
                <th className="text-center" scope="row">{props.index}</th>
                <td className="font-w600">
                    <a >{props.name}</a>
                </td>
                <td className="d-sm-table-cell">
                    <img className="image-portopfilo" src={`${ideal.url}/storage${props.image}`} />
                </td>


                <td className="text-center">
                    <div className="btn-group">
                        <button onClick={e => props.history.push(`/comments/edit/${props.id}`)} type="button" className="btn btn-sm btn-primary js-tooltip-enabled" data-toggle="tooltip" title data-original-title="Edit">
                            <i className="fa fa-pencil-alt" />
                        </button>
                        <button type="button" onClick={e => handleDelete(e)} className="btn btn-sm btn-primary js-tooltip-enabled" data-toggle="tooltip" title data-original-title="Delete">
                            <i className="fa fa-times" />
                        </button>
                        <button onClick={e => handleView(props.id)} type="button" className="btn btn-sm btn-primary js-tooltip-enabled" data-toggle="tooltip" title data-original-title="Edit">
                            <i className="fa fa-eye" />
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
                show={view}
                onHide={(e) => handleClose(e, props.id)}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>مشاهده اطلاعات</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div style={{ textAlign: 'right' }}>
                        <div>
                            <label> : نام</label>
                            <div>{props.name}</div>
                        </div>
                        <hr />
                        <div>
                            <label> : توضیحات</label>
                            <div dangerouslySetInnerHTML={{ __html: props.body }}></div>
                        </div>

                    </div>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={e => setView(false)}>
                        لغو
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default connect()(Item);