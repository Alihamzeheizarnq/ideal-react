import animate from './../Partials/animate';
import { StyleRoot } from 'radium';
import Breadcrumb from "../Partials/Breadcrumb";
import breadcrumb from "../../breadcrub";
import { useEffect, useState } from 'react';
import ApiPortofilo from './../../Api/Portofilo'
import { connect } from 'react-redux';
import actions from '../../actions';
function List(props) {

    let [paginate, setPaginate] = useState({ links: [], status: false });

    useEffect(() => {
        ApiPortofilo.ListPortofilo(props.location.search, (data) => {

            setPaginate(preve => {
                return {
                    ...preve,
                    links: data.meta.links,
                    total : data.meta.last_page,
                    status: true
                }
            })
            props.dispatch(actions.ListPortofilo(data))
        })
    }, [])

    let handlePaginate = (url) =>{
        if(url){
            let page = url.split("?").slice(-1).pop()
            props.history.push(props.location.pathname + '?' + page)
            ApiPortofilo.ListPortofilo(page, (data) => {
                setPaginate(preve => {
                    return {
                        ...preve,
                        links: data.meta.links,
                        total : data.meta.last_page,
                        status: true
                    }
                })
                props.dispatch(actions.ListPortofilo(data))
            })

        }
    }
    let header = breadcrumb('portofilo.list');





    return (
        <>
            <Breadcrumb header={header} />

            <StyleRoot>

                <div className="content content-full" style={animate.bounce}>
                    <div className="block block-rounded">
                        <div className="block-header block-header-default">
                            <h3 className="block-title">Borderless Table</h3>
                            <div className="block-options">
                                <div className="block-options-item">
                                    <code>.table-borderless</code>
                                </div>
                            </div>
                        </div>
                        <div className="block-content">
                            <table className="table table-borderless table-vcenter">
                                <thead>
                                    <tr>
                                        <th className="text-center" style={{ width: 50 }}>ردیف</th>
                                        <th>عنوان</th>
                                        <th>عکس</th>
                                        <th className="d-none d-sm-table-cell" >نام مشتری</th>
                                        <th className="d-none d-sm-table-cell" >آدرس</th>
                                        <th className="d-none d-sm-table-cell" >وضعیت</th>
                                        <th className="text-center" style={{ width: 100 }}>عملیات</th>
                                    </tr>
                                </thead>
                                <tbody>



                                    {
                                        props.portofilos.portofilo.map((item, index) => (
                                            <tr>
                                                <th className="text-center" scope="row">{index + 1}</th>
                                                <td className="font-w600">
                                                    <a href="be_pages_generic_profile.html">{item.title}</a>
                                                </td>
                                                <td className="d-none d-sm-table-cell">
                                                    <img style={{ maxHeight: '60px' }} src={`http://localhost:8000/storage${item.image.url}`} />
                                                </td>
                                                <td className="d-none d-sm-table-cell">
                                                    {item.client}
                                                </td>
                                                <td className="d-none d-sm-table-cell">
                                                    {item.address}
                                                </td>
                                                <td className="d-none d-sm-table-cell">
                                                    {
                                                        item.status ?
                                                            <span className="badge badge-success">فعال</span>
                                                            : <span className="badge badge-warning">غیر فعال</span>

                                                    }
                                                </td>
                                                <td className="text-center">
                                                    <div className="btn-group">
                                                        <button onClick={e=> props.history.push(`/portofilo/edit/${item.id}`)} type="button" className="btn btn-sm btn-primary js-tooltip-enabled" data-toggle="tooltip" title data-original-title="Edit">
                                                            <i className="fa fa-pencil-alt" />
                                                        </button>
                                                        <button  type="button" className="btn btn-sm btn-primary js-tooltip-enabled" data-toggle="tooltip" title data-original-title="Delete">
                                                            <i className="fa fa-times" />
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))
                                    }





                                </tbody>
                            </table>
                            <nav aria-label="Page navigation">
                                <ul className="pagination pagination-lg">



                                    {
                                        paginate.total <= 1 && paginate.status  ? '' :
                                            paginate.links.map(item => (

                                            
                                                <li className={`page-item ${item.active ? 'active' : ''}`}>
                                                    <a onClick={e => handlePaginate(item.url)} class="page-link" href="javascript:void(0)" aria-label="Next">
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
        portofilos: state.portofilos
    }
}
export default connect(mapStateToProps)(List);