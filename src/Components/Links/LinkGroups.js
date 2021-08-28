import { connect } from "react-redux";
import { useEffect, useState } from "react";
import { StyleRoot } from 'radium';
import Breadcrumb from "../Partials/Breadcrumb";
import CreateLinkGroup from "./CreateLinkGroup";
import MapLinkGroup from './MapLinkGroup';
import Links from "../../Api/Links";
import actions from "../../actions";
import breadcrumb from "../../breadcrub";
import { ReactSortable } from "react-sortablejs";
import animate from './../Partials/animate';


function LinkGroups(props) {

    let [loding, setLoding] = useState(false);


    useEffect(() => {
        if (!props.links.length) {
            Links.linkIndex((data) => {
                props.dispatch(actions.SetGropeLink(data.data)); 
                setLoding(true);
            })
        }else{
            setLoding(true);
        }
    }, [])

    let setState2 = (data) => {
        if (data) {
            props.dispatch(actions.SetGropeLink(data));
            Links.LinkSortable(data, (data) => {
                setLoding(true);
            })
        }
    }

    let header = breadcrumb('links.group');
    return (
        <>
            <Breadcrumb header={header} />
            <StyleRoot>
                <div className="content">

                    <div className="block block-rounded" style={animate.bounce}>


                        <div className="block-header block-header-default">
                            <h3 className="block-title">
                                لیست سرگروه ها
                            </h3>
                            <div className="block-options">
                                <div className="block-options-item">
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 mt-2" >
                            <CreateLinkGroup />
                        </div>
                        <div className="block-content">
                            <table className="table table-bordered table-vcenter">
                                <thead>
                                    <tr>
                                        <th className="text-center" style={{ width: 50 }}>ردیف</th>
                                        <th>نام</th>
                                        <th className="text-center" style={{ width: 100 }}>عملیات</th>
                                    </tr>
                                </thead>

                                {
                                    !loding ? (
                                        <div className='d-flex justify-content-center mt-3 mb-3'>
                                            <div className="spinner-grow" role="status">
                                                <span className="sr-only">Loading...</span>
                                            </div>
                                        </div>
                                    ) :
                                        <ReactSortable tag="tbody" list={props.links} setList={setState2}>
                                            {props.links.map((item) => (
                                                <MapLinkGroup key={item.id} {...item} />

                                            ))}
                                        </ReactSortable>
                                }




                            </table>
                        </div>
                    </div>

                </div>
            </StyleRoot>
        </>
    )
}

let MapStateToProps = (state) => ({
    links: state.links,
})
export default connect(MapStateToProps)(LinkGroups);