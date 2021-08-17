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

    let [loding, setLoding] = useState(true);


    useEffect(() => {
        Links.linkIndex((data) => {
            props.dispatch(actions.SetGropeLink(data.data));
            setLoding(false);
        })
    }, [])

    let setState = (data) => {
        if (data) {
            props.dispatch(actions.SetGropeLink(data));
            Links.LinkSortable(data, (data) => {
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
                                    loding ?
                                        (

                                            <div className="spinner-border" role="status" style={{ padding: '18px', margin: '5px' }}>
                                                <span className="sr-only">Loading...</span>
                                            </div>


                                        )
                                        :
                                        <ReactSortable tag="tbody" list={props.links} setList={setState}>
                                            {props.links.map((item) => (
                                                <MapLinkGroup {...item} />

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