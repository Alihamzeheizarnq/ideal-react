import { connect } from 'react-redux';
import { StyleRoot } from 'radium';
import { useEffect, useState } from 'react';


import animate from './../Partials/animate';
import Breadcrumb from "../Partials/Breadcrumb";
import breadcrumb from "../../breadcrub";
import ApiComment from './../../Api/Comment'
import actions from '../../actions';
import Item from './Item';


function List(props) {
    let [paginate, setPaginate] = useState({ links: [], status: false });
    let [isLoding, setIsLoding] = useState(false);
    useEffect(() => {
        ApiComment.ListComment(props.location.search, (data) => {
            setPaginate(preve => {
                return {
                    ...preve,
                    links: data.meta.links,
                    total: data.meta.last_page,

                    status: true
                }
            })
            setIsLoding(true);
            props.dispatch(actions.ListComment(data))
        })
    }, [])

    let handlePaginate = (url) => {
        if (url) {
            let page = url.split("?").slice(-1).pop()
            props.history.push(props.location.pathname + '?' + page)
            ApiComment.ListComment(page, (data) => {
                setPaginate(preve => {
                    return {
                        ...preve,
                        links: data.meta.links,
                        total: data.meta.last_page,
                        status: true
                    }
                })
                props.dispatch(actions.ListComment(data))
            })
        }
    }
    let header = breadcrumb('comments.index');
    return (
        <>
            <Breadcrumb header={header} />

            <StyleRoot>

                <div className="content content-full" style={animate.bounce}>
                    <div className="block block-rounded">

                        <div className="block-content">
                            <div className="table-responsive">

                                <table className="table table-striped table-hover table-vcenter">
                                    <thead>
                                        <tr>
                                            <th className="text-center">ردیف</th>
                                            <th>عنوان</th>
                                            <th>عکس</th>
                                            <th className="text-center">عملیات</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            !isLoding ? (
                                                <div className='d-flex justify-content-center mt-3'>
                                                    <div className="spinner-grow" role="status">
                                                        <span className="sr-only">Loading...</span>
                                                    </div>
                                                </div>
                                            ) :
                                                props.comments.map((item, index) => <Item history={props.history} key={item.id} {...item} index={index + 1} />)
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
                                                    <a onClick={e => handlePaginate(item.url)} className="page-link" aria-label="Next">
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
        comments: state.comments.comments
    }
}
export default connect(mapStateToProps)(List);