import animate from '../Partials/animate';
import { StyleRoot } from 'radium';
import Breadcrumb from "../Partials/Breadcrumb";
import breadcrumb from "../../breadcrub";
import { useEffect, useState } from 'react';
import ApiTickect from '../../Api/Ticket'
import { connect } from 'react-redux';
import actions from '../../actions';
import Item from './Item';
function List(props) {

    let [paginate, setPaginate] = useState({ links: [], status: false });
    let [isLoding, setIsLoding] = useState(false);

    useEffect(() => {
        ApiTickect.ListTicket(props.location.search, (data) => {
            setPaginate(preve => {
                return {
                    ...preve,
                    links: data.meta.links,
                    total: data.meta.last_page,

                    status: true
                }
            })
            setIsLoding(true);
            props.dispatch(actions.ListTicket(data))
        })
    }, [])

    let handlePaginate = (url) => {
        if (url) {
            let page = url.split("?").slice(-1).pop()
            props.history.push(props.location.pathname + '?' + page)
            ApiTickect.ListTicket(page, (data) => {
                setPaginate(preve => {
                    return {
                        ...preve,
                        links: data.meta.links,
                        total: data.meta.last_page,
                        status: true
                    }
                })
                props.dispatch(actions.ListTicket(data))
            })

        }
    }

    let Update = () => {
        setIsLoding(false);

        ApiTickect.ListTicket(props.location.search, (data) => {
            setPaginate(preve => {
                return {
                    ...preve,
                    links: data.meta.links,
                    total: data.meta.last_page,

                    status: true
                }
            })
            setIsLoding(true);
            props.dispatch(actions.ListTicket(data))
        })
    }
    let header = breadcrumb('portofilo.list');





    return (
        <>
            <Breadcrumb header={header} />

            <StyleRoot>

                <div className="content content-full" style={animate.bounce}>
                    <div className="block block-rounded">

<div className="block-header block-header-default" data-radium="true">
    <h3 className="block-title"></h3><div className="block-options">
        <button onClick={e => Update()} type="button" className="btn-block-option" data-toggle="block-option" data-action="state_toggle" data-action-mode="demo">
            <i className="si si-refresh" />
            </button>
            </div></div>
                        <div className="block-content">
                            <div className="table-responsive">
                                <table className="table table-striped table-hover table-vcenter">
                                    <thead>
                                        <tr>
                                            <th className="text-center" style={{ width: 50 }}>ردیف</th>
                                            <th>نام</th>
                                            <th>موضوع</th>
                                            <th className="d-none d-sm-table-cell" >تلفن</th>
                                         
                                            <th className="d-none d-sm-table-cell" >وضعیت</th>
                                            <th className="text-center" style={{ width: 100 }}>عملیات</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                      
                                        {
                                              ! isLoding ? (
                                                <div className='d-flex justify-content-center mt-3'>
                                                <div className="spinner-grow" role="status">
                                                    <span className="sr-only">Loading...</span>
                                                </div>
                                            </div>
                                            ) : 
                                            props.tickets.map((item, index) => <Item history={props.history} key={item.id} {...item} index={index + 1} />)
                                        }





                                    </tbody>
                                </table>
                            </div>
                            <nav aria-label="Page navigation">
                                <ul className="pagination pagination-lg">



                                    {
                                        paginate.total <= 1 && paginate.status ? '' :
                                            paginate.links.map(item => (


                                                <li className={`page-item ${item.active ? 'active' : ''}`} key={item.label}>
                                                    <a onClick={e => handlePaginate(item.url)} className="page-link" href="#" aria-label="Next">
                                                        <span aria-hidden="true">
                                                            {item.label}
                                                        </span>
                                                        <span className="sr-only">Next</span>
                                                    </a>
                                                </li>

                                            ))
                                    }


                                </ul>
                            </nav>
                        </div>
                    </div>

                </div>



            </StyleRoot>

        </>
    );
}

let mapStateToProps = (state) => {
    return {
        tickets: state.tickets.tickets
    }
}
export default connect(mapStateToProps)(List);