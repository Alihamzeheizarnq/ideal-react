import { connect } from "react-redux";
import { Modal, Button } from 'react-bootstrap'
import { useState } from "react";
import { toast } from 'react-toastify';
import { IoMdMove } from 'react-icons/io'
import Links from "../../Api/Links";
import actions from '../../actions';


function CreateLinkGroup(props) {

    const [show, setShow] = useState(false);
    const [edit, setEdit] = useState(false);
    let [linkEdit, setlink] = useState(props.child.link);
    let [titleEdit, setTitle] = useState(props.child.title);
    let [group_idEdit, setGroup_id] = useState(props.child.group_id);
    const handleClose = () => setShow(false);
    const handleCloseEdit = () => setEdit(false);
    let hanleDelete = () => {
        setShow(true)
    }

    let hanleDeleteEdit = () => {
        setEdit(true)
    }

    let SuccessModal = (id) => {
        Links.linkOriginDelete(id, (data) => {
            props.dispatch(actions.DeleteOriginLink(id));
            setShow(false);
            toast.warning('اطلاعات با موفقیت حذف گردید')
        })
    }
    let SuccessModalEdit = (e, id) => {
        e.preventDefault();

            Links.LinkOriginEdit(id, titleEdit , linkEdit , group_idEdit, (data) => {
                props.dispatch(actions.EditLinkOrigin(id, titleEdit , linkEdit , group_idEdit , props.child.group_id));
                setEdit(false);
                toast.success('اطلاعات با موفقیت ویرایش گردید')

            })
    }
    return (
        <>

            <tr key={props.child.id} className="tr-link" style={{backgroundColor : 'rgb(226 226 226)'}}> 
                <td className="text-center"><IoMdMove /></td>
                <td className="font-w600">{props.child.title}</td>

                <td className=" d-sm-table-cell" dir="ltr">
                    <em className="">{props.child.link}</em>
                </td>
                <div className="btn-group">
                    <button type="button" className="btn btn-sm btn-success js-tooltip-enabled"
                        data-toggle="tooltip" title data-original-title="Edit"
                        onClick={e => hanleDeleteEdit()}


                    >
                        <i className="fa fa-pencil-alt" />
                    </button>
                    <button type="button" className="btn btn-sm btn-danger js-tooltip-enabled"
                        ata-toggle="tooltip" title data-original-title="Delete"
                        onClick={e => hanleDelete()}
                    >
                        <i className="fa fa-times" />
                    </button>
                </div>
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
                    <Button variant="primary" onClick={e => SuccessModal(props.child.id)}>بله</Button>
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
                    <form onSubmit={e => SuccessModalEdit(e, props.child.id)}>
    
                        <input type="text"
                            className="form-control mt-1 mb-2 ml-2 mr-sm-2 mb-sm-0 is-invalid"
                            id="example-if-email"
                            name="titleEdit"
                            value={titleEdit}
                            onChange={e => setTitle(e.target.value)}
                            placeholder="نام سرگروه را وارد کنید"
                        />
                        <input type="text"
                            className={`form-control mt-1 mb-2 ml-2 mr-sm-2 mb-sm-0 `}
                            id="example-if-email"
                            name="linkEdit"
                            placeholder=" لینک  را وارد کنید"
                            onChange={e => setlink(e.target.value)}
                            value={linkEdit}

                        />

                        <select
                            className={`mb-0 ml-2 mt-1 custom-select `}
                            id="example-if-email"
                            name="group_idEdit"
                            placeholder="سرگروه را وارد کنید"
                            onChange={e => setGroup_id(e.target.value)}
                            value={group_idEdit}

                        >
                            <option>انتخاب کنید</option>
                            {
                                props.links.map(item => (<option className="mr-4" key={item.id} value={item.id}>{item.name}</option>))
                            }

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
let mapStateToProps = (state) => {
    return {
        links: state.links
    }
}

export default connect(mapStateToProps)(CreateLinkGroup);