import { useState } from "react";
import { Modal, Button } from 'react-bootstrap';
import { connect } from "react-redux";
import actions from "../../actions";
import ApiTicket from '../../Api/Ticket';

function Item(props) {

    let [show, setShow] = useState(false);
    let [view, setView] = useState(false);


    let handleView = id => {
        setView(true);

        
    


    }

    let handleDelete = (e) => {

        setShow(true)
    }
    let handleClose = (e , id = null) => {

        setView(false);

        setShow(false);

        if (!props.view && id) {
            ApiTicket.UpdateTicket(id, data => {
                props.dispatch(actions.EditTicket(id));
            })

            ApiTicket.CountTicket(data => {
                props.dispatch(actions.CountTicket(data));
            })

        }
    }
    let SuccessModal = (id) => {
        // ApiPortofilo.DeletePortofilo(id, (data) => {
        //     props.dispatch(actions.DeletePortofilo(id))
        // })
    }
    return (
        <>
            <tr>
                <th className="text-center" scope="row">{props.index}</th>
                <td className="font-w600">
                    <a href="be_pages_generic_profile.html">{props.name}</a>
                </td>

                <td className="d-none d-sm-table-cell">
                    {props.type}
                </td>
                <td className="d-none d-sm-table-cell">
                    {props.phone}
                </td>
                <td className="d-none d-sm-table-cell">
                    {
                        props.view ?
                            <span className="badge badge-success">خوانده شده</span>
                            : <span className="badge badge-warning">خوانده نشده </span>

                    }
                </td>
                <td className="text-center">
                    <div className="btn-group">
                        <button onClick={e => handleView(props.id)} type="button" className="btn btn-sm btn-primary js-tooltip-enabled" data-toggle="tooltip" title data-original-title="Edit">
                            <i className="fa fa-eye" />
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

            <Modal
                show={view}
                onHide={(e) => handleClose(e , props.id)}
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
                            <label> : تلفن</label>
                            <div> {props.phone}</div>
                        </div>
                        <hr />
                        <div>
                            <label> : ایمیل</label>
                            <div>{props.email}</div>
                        </div>
                        <hr />
                        <div>
                            <label> : موضوع</label>
                            <div>{props.type}</div>
                        </div>
                        <hr />
                        <div>
                            <label> : آدرس</label>
                            <div>{props.address}</div>
                        </div>
                        <hr />
                        <div>
                            <label> : توضیحات</label>
                            <div>{props.body}</div>
                        </div>

                    </div>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={e => handleClose(e , props.id)}>
                        لغو
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default connect()(Item);