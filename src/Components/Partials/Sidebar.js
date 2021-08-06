import { useState } from "react";
import { NavLink } from "react-router-dom";

function SideBar(props) {

    let [SideBarToggle, setSideBarToggle] = useState(false);

    let HandleActiveSidebar = (e) => {
        e.preventDefault();

        let ListClass = document.getElementsByClassName("parent");
        if (e.target.parentElement.classList.contains('parent') || e.target.parentElement.parentElement.classList.contains('parent')) {


            let active = e.target.parentElement.classList.contains('parent')
                ? e.target.parentElement
                : e.target.parentElement.parentElement;
            if (e.target.tagName == 'A' || e.target.tagName == 'SPAN') {

                for (const key in ListClass) {
                    if (ListClass[key].classList && ListClass[key].classList.contains('open')) {
                        if (ListClass[key].id != active.id) {
                            ListClass[key].classList.remove('open')
                        }
                    }
                }
                if (active.classList.contains('open')) {
                    active.classList.remove('open')
                } else {
                    active.classList.add('open')
                }
            }


        }


    }
    return (
        <>
            <nav id="sidebar" aria-label="Main Navigation">
                {/* Side Header */}
                <div className="bg-header-dark">
                    <div className="content-header bg-white-10">
                        {/* Logo */}
                        <a className="font-w600 text-white tracking-wide" href>
                            <span className="smini-visible">
                                D<span className="opacity-75">x</span>
                            </span>
                            <span className="smini-hidden">
                                Dash<span className="opacity-75">mix</span>
                            </span>
                        </a>
                        {/* END Logo */}
                        {/* Options */}
                        <div>
                            {/* Toggle Sidebar Style */}
                            {/* Layout API, functionality initialized in Template._uiApiLayout() */}
                            {/* Class Toggle, functionality initialized in Helpers.coreToggleClass() */}
                            <a className="js-class-toggle text-white-75" data-target="#sidebar-style-toggler" data-class="fa-toggle-off fa-toggle-on"
                                onClick={e => { setSideBarToggle(!SideBarToggle); props.btn('DarkAndWhithSideBar') }} href="javascript:void(0)">
                                <i className={`fa fa-toggle-${SideBarToggle ? 'on' : 'off'}`} id="sidebar-style-toggler" />
                            </a>
                            {/* END Toggle Sidebar Style */}
                            {/* Close Sidebar, Visible only on mobile screens */}
                            {/* Layout API, functionality initialized in Template._uiApiLayout() */}
                            <a className="d-lg-none text-white ml-2" data-toggle="layout" data-action="sidebar_close" href="javascript:void(0)">
                                <i className="fa fa-times-circle" />
                            </a>
                            {/* END Close Sidebar */}
                        </div>
                        {/* END Options */}
                    </div>
                </div>
                {/* END Side Header */}
                {/* Sidebar Scrolling */}
                <div className="js-sidebar-scroll">
                    {/* Side Navigation */}
                    <div className="content-side">
                        <ul className="nav-main" onClick={(e) => HandleActiveSidebar(e)}>
                            <li className={`nav-main-item parent`} id="1">
                                <a className="nav-main-link nav-main-link-submenu" data-toggle="submenu" aria-haspopup="true" aria-expanded="false" href="">
                                    <i className="nav-main-link-icon fa fa-user" />
                                    <span className="nav-main-link-name">مدیریت کاربران</span>
                                </a>
                                <ul className="nav-main-submenu">
                                    <li className="nav-main-item" >
                                        <NavLink to="/users/create" className="nav-main-link" href="javascript:void(0)">
                                            <i className="nav-main-link-icon fa fa-2x fa-chevron-left" />
                                            <span className="nav-main-link-name">ایجاد کاربر</span>
                                        </NavLink>
                                    </li>
                                    <li className="nav-main-item">
                                        <NavLink to="/users" exact className="nav-main-link" href="javascript:void(0)">
                                            <i className="nav-main-link-icon fa fa-2x fa-chevron-left" />
                                            <span className="nav-main-link-name">لیست کاربران </span>
                                        </NavLink>
                                    </li>
                                </ul>
                            </li>
                            <li className={`nav-main-item parent`} id="2">
                                <a className="nav-main-link nav-main-link-submenu" data-toggle="submenu" aria-haspopup="true" aria-expanded="false" href="#">
                                    <i className="nav-main-link-icon fa fa-book-open" />
                                    <span className="nav-main-link-name">مدیریت مقالات</span>
                                </a>
                                <ul className="nav-main-submenu">
                                    <li className="nav-main-item">
                                        <NavLink to="/posts/create" className="nav-main-link" href="javascript:void(0)">
                                            <i className="nav-main-link-icon fa fa-2x fa-chevron-left" />
                                            <span className="nav-main-link-name">ایجاد مقاله  </span>
                                        </NavLink>
                                    </li>
                                    <li className="nav-main-item">
                                        <NavLink to="/posts" exact className="nav-main-link" href="javascript:void(0)">
                                            <i className="nav-main-link-icon fa fa-2x fa-chevron-left" />
                                            <span className="nav-main-link-name">لیست مقالات </span>
                                        </NavLink>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    {/* END Side Navigation */}
                </div>
                {/* END Sidebar Scrolling */}
            </nav>


        </>
    )
}


export default SideBar;