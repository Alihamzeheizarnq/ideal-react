import { useState } from "react";
import { NavLink } from "react-router-dom";
import { connect } from 'react-redux';
import actions from "../../actions";

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
                        <a className="font-w600 text-white tracking-wide" href="#">
                            <span className="smini-visible">
                                I<span className="opacity-75">T</span>
                            </span>
                            <span className="smini-hidden">
                                IDEAL<span className="opacity-75">IT</span>
                            </span>
                        </a>
                        {/* END Logo */}
                        {/* Options */}
                        <div>
                            {/* Toggle Sidebar Style */}
                            {/* Layout API, functionality initialized in Template._uiApiLayout() */}
                            {/* Class Toggle, functionality initialized in Helpers.coreToggleClass() */}
                            <a className="js-class-toggle text-white-75" data-target="#sidebar-style-toggler" data-class="fa-toggle-off fa-toggle-on"
                                onClick={e => { setSideBarToggle(!SideBarToggle); props.dispatch(actions.DarkAndWhithSideBar()) }} href="#">
                                <i className={`fa fa-toggle-${SideBarToggle ? 'on' : 'off'}`} id="sidebar-style-toggler" />
                            </a>
                            {/* END Toggle Sidebar Style */}
                            {/* Close Sidebar, Visible only on mobile screens */}
                            {/* Layout API, functionality initialized in Template._uiApiLayout() */}
                            <a className="d-lg-none text-white ml-2"
                                onClick={e => props.dispatch(actions.RightSideBar())}
                                data-toggle="layout" data-action="sidebar_close" href="#">
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
                                <a className="nav-main-link nav-main-link-submenu" data-toggle="submenu" aria-haspopup="true" aria-expanded="false" href="#">
                                    <i className="nav-main-link-icon fa fa-user" />
                                    <span className="nav-main-link-name">  داشبورد</span>
                                </a>
                                <ul className="nav-main-submenu">
                                    <li className="nav-main-item" >
                                        <NavLink to="/" className="nav-main-link" href="#">
                                            <i className="nav-main-link-icon fa fa-2x fa-chevron-left" />
                                            <span className="nav-main-link-name">صفحه اصلی</span>
                                        </NavLink>
                                    </li>

                                </ul>
                            </li>
                            <li className={`nav-main-item parent`} id="1">
                                <a className="nav-main-link nav-main-link-submenu" data-toggle="submenu" aria-haspopup="true" aria-expanded="false" href="#">
                                    <i className="nav-main-link-icon fa fa-user" />
                                    <span className="nav-main-link-name">مدیریت لینک فوتر</span>
                                </a>
                                <ul className="nav-main-submenu">
                                    <li className="nav-main-item" >
                                        <NavLink to="/links/groups" className="nav-main-link" href="#">
                                            <i className="nav-main-link-icon fa fa-2x fa-chevron-left" />
                                            <span className="nav-main-link-name">مدیریت سرگروه ها</span>
                                        </NavLink>
                                    </li>
                                    <li className="nav-main-item">
                                        <NavLink to="/links" exact className="nav-main-link" href="#">
                                            <i className="nav-main-link-icon fa fa-2x fa-chevron-left" />
                                            <span className="nav-main-link-name">مدیریت لینک ها</span>
                                        </NavLink>
                                    </li>
                                </ul>
                            </li>
                            <li className={`nav-main-item parent`} id="2">
                                <a className="nav-main-link nav-main-link-submenu" data-toggle="submenu" aria-haspopup="true" aria-expanded="false" href="#">
                                    <i className="nav-main-link-icon fa fa-book-open" />
                                    <span className="nav-main-link-name"> نمونه کارها</span>
                                </a>
                                <ul className="nav-main-submenu">
                                    <li className="nav-main-item">
                                        <NavLink to="/portofilo/create" className="nav-main-link" href="#">
                                            <i className="nav-main-link-icon fa fa-2x fa-chevron-left" />
                                            <span className="nav-main-link-name">ایجاد نمونه کار  </span>
                                        </NavLink>
                                    </li>
                                    <li className="nav-main-item">
                                        <NavLink to="/portofilo"  exact className="nav-main-link" href="#">
                                            <i className="nav-main-link-icon fa fa-2x fa-chevron-left" />
                                            <span className="nav-main-link-name">لیست نمونه کار ها </span>
                                        </NavLink>
                                    </li>
                                </ul>
                            </li>

                            <li className={`nav-main-item parent`} id="3">
                                <a className="nav-main-link nav-main-link-submenu" data-toggle="submenu" aria-haspopup="true" aria-expanded="false" href="#">
                                    <i className="nav-main-link-icon fa fa-user" />
                                    <span className="nav-main-link-name">مدیریت  وبلاگ</span>
                                </a>
                                <ul className="nav-main-submenu">
                                    <li className="nav-main-item" >
                                        <NavLink to="/posts/categories" className="nav-main-link" href="#">
                                            <i className="nav-main-link-icon fa fa-2x fa-chevron-left" />
                                            <span className="nav-main-link-name">دسته بندی</span>
                                        </NavLink>
                                    </li>
                                    <li className="nav-main-item" >
                                        <NavLink to="/posts" exact className="nav-main-link" href="#">
                                            <i className="nav-main-link-icon fa fa-2x fa-chevron-left" />
                                            <span className="nav-main-link-name">لیست پست ها</span>
                                        </NavLink>
                                    </li>
                                    <li className="nav-main-item">
                                        <NavLink to="/posts/create" exact className="nav-main-link" href="#">
                                            <i className="nav-main-link-icon fa fa-2x fa-chevron-left" />
                                            <span className="nav-main-link-name">ایجاد پست</span>
                                        </NavLink>
                                    </li>
                                </ul>
                                <li className={`nav-main-item parent`} id="4">
                                    <a className="nav-main-link nav-main-link-submenu" data-toggle="submenu" aria-haspopup="true" aria-expanded="false" href="#">
                                        <i className="nav-main-link-icon fa fa-user" />
                                        <span className="nav-main-link-name">مدیریت  منو ها</span>
                                    </a>
                                    <ul className="nav-main-submenu">
                                        <li className="nav-main-item" >
                                            <NavLink to="/menus" className="nav-main-link" href="#">
                                                <i className="nav-main-link-icon fa fa-2x fa-chevron-left" />
                                                <span className="nav-main-link-name">لیست و ایجاد منو</span>
                                            </NavLink>

                                        </li>
                                    </ul>
                                </li>
                                <li className={`nav-main-item parent`} id="5">
                                    <a className="nav-main-link nav-main-link-submenu" data-toggle="submenu" aria-haspopup="true" aria-expanded="false" href="#">
                                        <i className="nav-main-link-icon fa fa-user" />
                                        <span className="nav-main-link-name">تنظیمات</span>
                                    </a>
                                    <ul className="nav-main-submenu">
                                        <li className="nav-main-item" >
                                            <NavLink to="/setting" className="nav-main-link" href="#">
                                                <i className="nav-main-link-icon fa fa-2x fa-chevron-left" />
                                                <span className="nav-main-link-name">مدیریت تنظیمات</span>
                                            </NavLink>

                                        </li>
                                    </ul>
                                </li>
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


export default connect()(SideBar);