import { connect } from "react-redux";
import { useEffect } from "react";
import { bounceInLeft } from 'react-animations';
import Radium, { StyleRoot } from 'radium';
import Breadcrumb from "../Partials/Breadcrumb";
import CreateLinkGroup from "./CreateLinkGroup";
import MapLinkGroup from './MapLinkGroup';
import Links from "../../Api/Links";
import actions from "../../actions";
import breadcrumb from "../../breadcrub";
function LinkGroups(props) {


    useEffect(() => {
        Links.linkIndex((data) => {
            props.dispatch(actions.SetGropeLink(data.data))
        })
    } , [])


    const styles = {
        bounce: {
            animation: 'x 1s',
            animationName: Radium.keyframes(bounceInLeft, 'bounceInLeft')
        }
    }


    let header = breadcrumb('links.group');
    return (
        <>
            <Breadcrumb header={header} />
            <StyleRoot>
                <div className="content">

                    <div className="block block-rounded" style={styles.bounce}>


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
                                <tbody>
                             {
                                 props.links.map(item => (
                                    <MapLinkGroup {...item} />
                                 ))
                             }
                             
                    
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            </StyleRoot>
        </>
    )
}

let MapStateToProps = (state) => ({
    links : state.links,
})
export default connect(MapStateToProps)(LinkGroups);