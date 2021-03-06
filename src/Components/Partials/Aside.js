import { memo } from 'react';
import  { connect } from 'react-redux';
import actions from '../../actions';
 
function Aside(props) {

    
    return (
        <>
            <aside id="side-overlay">
                {/* Side Header */}
                <div className="bg-image" style={{ backgroundImage: 'url("assets/media/various/bg_side_overlay_header.jpg")' }}>
                    <div className="bg-primary-op">
                        <div className="content-header">
                            {/* User Avatar */}
                            <a className="img-link ml-1">
                                <img className="img-avatar img-avatar48" src="assets/media/avatars/avatar10.jpg" alt />
                            </a>
                            {/* END User Avatar */}
                            {/* User Info */}
                            <div className="mr-2">
                                <a className="text-white font-w600" >John Doe</a>
                                <div className="text-white-75 font-size-sm">Administrator</div>
                            </div>
                            {/* END User Info */}
                            {/* Close Side Overlay */}
                            {/* Layout API, functionality initialized in Template._uiApiLayout() */}
                            <a onClick={(e) => props.dispatch(actions.LeftSideBar())} className="mr-auto text-white" data-toggle="layout" data-action="side_overlay_close">
                                <i className="fa fa-times-circle" />
                            </a>
                            {/* END Close Side Overlay */}
                        </div>
                    </div>
                </div>
                {/* END Side Header */}
                {/* Side Content */}
                <div className="content-side">
                    {/* Side Overlay Tabs */}
                    <div className="block block-transparent pull-x pull-t">
                        <ul className="nav nav-tabs nav-tabs-block nav-justified pr-0" data-toggle="tabs" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link active">
                                    <i className="fa fa-fw fa-cog" />
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" >
                                    <i className="far fa-fw fa-user-circle" />
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" >
                                    <i className="far fa-fw fa-edit" />
                                </a>
                            </li>
                        </ul>
                        <div className="block-content tab-content overflow-hidden">
                            {/* Settings Tab */}
                            <div className="tab-pane pull-x fade fade-up show active" id="so-settings" role="tabpanel">
                                <div className="block mb-0">
                                    {/* Color Themes */}
                                    {/* Toggle Themes functionality initialized in Template._uiHandleTheme() */}
                                    <div className="block-content block-content-sm block-content-full bg-body">
                                        <span className="text-uppercase font-size-sm font-w700">Color Themes</span>
                                    </div>
                                    <div className="block-content block-content-full">
                                        <div className="row gutters-tiny text-center">
                                            <div className="col-4 mb-1">
                                                <a className="d-block py-3 text-white font-size-sm font-w600 bg-default" data-toggle="theme" data-theme="default">
                                                    Default
                                                </a>
                                            </div>
                                            <div className="col-4 mb-1">
                                                <a className="d-block py-3 text-white font-size-sm font-w600 bg-xwork" data-toggle="theme" data-theme="assets/css/themes/xwork.min.css">
                                                    xWork
                                                </a>
                                            </div>
                                            <div className="col-4 mb-1">
                                                <a className="d-block py-3 text-white font-size-sm font-w600 bg-xmodern" data-toggle="theme" data-theme="assets/css/themes/xmodern.min.css">
                                                    xModern
                                                </a>
                                            </div>
                                            <div className="col-4 mb-1">
                                                <a className="d-block py-3 text-white font-size-sm font-w600 bg-xeco" data-toggle="theme" data-theme="assets/css/themes/xeco.min.css">
                                                    xEco
                                                </a>
                                            </div>
                                            <div className="col-4 mb-1">
                                                <a className="d-block py-3 text-white font-size-sm font-w600 bg-xsmooth" data-toggle="theme" data-theme="assets/css/themes/xsmooth.min.css">
                                                    xSmooth
                                                </a>
                                            </div>
                                            <div className="col-4 mb-1">
                                                <a className="d-block py-3 text-white font-size-sm font-w600 bg-xinspire" data-toggle="theme" data-theme="assets/css/themes/xinspire.min.css">
                                                    xInspire
                                                </a>
                                            </div>
                                            <div className="col-4 mb-1">
                                                <a className="d-block py-3 text-white font-size-sm font-w600 bg-xdream" data-toggle="theme" data-theme="assets/css/themes/xdream.min.css">
                                                    xDream
                                                </a>
                                            </div>
                                            <div className="col-4 mb-1">
                                                <a className="d-block py-3 text-white font-size-sm font-w600 bg-xpro" data-toggle="theme" data-theme="assets/css/themes/xpro.min.css">
                                                    xPro
                                                </a>
                                            </div>
                                            <div className="col-4 mb-1">
                                                <a className="d-block py-3 text-white font-size-sm font-w600 bg-xplay" data-toggle="theme" data-theme="assets/css/themes/xplay.min.css">
                                                    xPlay
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* END Color Themes */}
                                    {/* Sidebar */}
                                    <div className="block-content block-content-sm block-content-full bg-body">
                                        <span className="text-uppercase font-size-sm font-w700">Sidebar</span>
                                    </div>
                                    <div className="block-content block-content-full">
                                        <div className="row gutters-tiny text-center">
                                            <div className="col-6 mb-1">
                                                <a className="d-block py-3 bg-body-dark font-w600 text-dark" data-toggle="layout" data-action="sidebar_style_dark">Dark</a>
                                            </div>
                                            <div className="col-6 mb-1">
                                                <a className="d-block py-3 bg-body-dark font-w600 text-dark" data-toggle="layout" data-action="sidebar_style_light">Light</a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* END Sidebar */}
                                    {/* Header */}
                                    <div className="block-content block-content-sm block-content-full bg-body">
                                        <span className="text-uppercase font-size-sm font-w700">Header</span>
                                    </div>
                                    <div className="block-content block-content-full">
                                        <div className="row gutters-tiny text-center">
                                            <div className="col-6 mb-1">
                                                <a className="d-block py-3 bg-body-dark font-w600 text-dark" data-toggle="layout" data-action="header_style_dark">Dark</a>
                                            </div>
                                            <div className="col-6 mb-1">
                                                <a className="d-block py-3 bg-body-dark font-w600 text-dark" data-toggle="layout" data-action="header_style_light">Light</a>
                                            </div>
                                            <div className="col-6 mb-1">
                                                <a className="d-block py-3 bg-body-dark font-w600 text-dark" data-toggle="layout" data-action="header_mode_fixed">Fixed</a>
                                            </div>
                                            <div className="col-6 mb-1">
                                                <a className="d-block py-3 bg-body-dark font-w600 text-dark" data-toggle="layout" data-action="header_mode_static">Static</a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* END Header */}
                                    {/* Content */}
                                    <div className="block-content block-content-sm block-content-full bg-body">
                                        <span className="text-uppercase font-size-sm font-w700">Content</span>
                                    </div>
                                    <div className="block-content block-content-full">
                                        <div className="row gutters-tiny text-center">
                                            <div className="col-6 mb-1">
                                                <a className="d-block py-3 bg-body-dark font-w600 text-dark" data-toggle="layout" data-action="content_layout_boxed">Boxed</a>
                                            </div>
                                            <div className="col-6 mb-1">
                                                <a className="d-block py-3 bg-body-dark font-w600 text-dark" data-toggle="layout" data-action="content_layout_narrow">Narrow</a>
                                            </div>
                                            <div className="col-12 mb-1">
                                                <a className="d-block py-3 bg-body-dark font-w600 text-dark" data-toggle="layout" data-action="content_layout_full_width">Full Width</a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* END Content */}
                                </div>
                            </div>
                            {/* END Settings Tab */}
                            {/* People */}
                            <div className="tab-pane pull-x fade fade-up" id="so-people" role="tabpanel">
                                <div className="block mb-0">
                                    {/* Section */}
                                    <div className="block-content block-content-sm block-content-full bg-body">
                                        <span className="text-uppercase font-size-sm font-w700">Section</span>
                                    </div>
                                    <div className="block-content">
                                        <p>
                                            ...
                                        </p>
                                    </div>
                                    {/* Section */}
                                </div>
                            </div>
                            {/* END People */}
                            {/* Profile */}
                            <div className="tab-pane pull-x fade fade-up" id="so-profile" role="tabpanel">
                                <div className="block mb-0">
                                    {/* Section */}
                                    <div className="block-content block-content-sm block-content-full bg-body">
                                        <span className="text-uppercase font-size-sm font-w700">Section</span>
                                    </div>
                                    <div className="block-content">
                                        <p>
                                            ...
                                        </p>
                                    </div>
                                    {/* Section */}
                                </div>
                            </div>
                            {/* END Profile */}
                        </div>
                    </div>
                    {/* END Side Overlay Tabs */}
                </div>
                {/* END Side Content */}
            </aside>

        </>
    )
}

let mapStateToProps = (state) => {

} 

export default connect()(memo(Aside));