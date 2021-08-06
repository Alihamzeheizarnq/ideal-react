import { useState } from "react";
import Breadcrumb from "../Partials/Breadcrumb";
import { fadeInUp } from 'react-animations';
import Radium, { StyleRoot } from 'radium';
function Users() {

    let [header, setHeader] = useState({
        title: 'لیست کاربران',
        breadcrumb: [
            { title: 'صفحه اصلی', link: '#', active: false },
            { title: 'مدیریت کاربران', link: '/users', active: false },
            { title: 'لیست کاربران', link: '#', active: true },
        ]
    })




    const styles = {
        bounce: {
            animation: 'x 1s',
            animationName: Radium.keyframes(fadeInUp, 'fadeInUp')
        }
    }
    return (
        <>
            <Breadcrumb header={header} />

            <StyleRoot>
                <div className="content" >

                    <div className="block block-rounded" style={styles.bounce}>
                        <div className="block-header block-header-default">
                            <h3 className="block-title">
                                Title <small>Get Started</small>
                            </h3>
                            <div className="block-options pl-0 pr-3">
                                <button type="button" className="btn-block-option" data-toggle="block-option" data-action="fullscreen_toggle" />
                                <button type="button" className="btn-block-option" data-toggle="block-option" data-action="pinned_toggle">
                                    <i className="si si-pin" />
                                </button>
                                <button type="button" className="btn-block-option" data-toggle="block-option" data-action="state_toggle" data-action-mode="demo">
                                    <i className="si si-refresh" />
                                </button>
                                <button type="button" className="btn-block-option" data-toggle="block-option" data-action="content_toggle" />
                                <button type="button" className="btn-block-option" data-toggle="block-option" data-action="close">
                                    <i className="si si-close" />
                                </button>
                            </div>
                        </div>
                        <div className="block-content">
                            <p>
                                لیست کاربران
                            </p>
                        </div>
                    </div>
                </div>
            </StyleRoot>

        </>
    )
}



export default Users;