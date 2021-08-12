import './App.css';
import './Admin.css';
import SideBar from './Components/Partials/Sidebar';
import Header from './Components/Partials/Header';
import Aside from './Components/Partials/Aside';
import Footer from './Components/Partials/Footer';
import Login from './Components/auth/Login';
import Auth from './Api/Login';
import Index from './Components'
import { useEffect, useState } from 'react';
import { Route, Switch, useHistory } from "react-router-dom";
import { connect } from 'react-redux';



function App(props) {

    let theme = props.theme;

    let history = useHistory();
    let [token, setToken] = useState(false);

    useEffect(() => {
        Auth.CheckUser((user) => {
            setToken(true)
        }, (err) => {
            setToken(false)
            history.push('/login')
        })
    }, [])

    let [enable, setEnableSidebar] = useState(true);
    let [enableLeft, setEnableLeftSidebar] = useState(true);
    let [DarkAndWhithSideBar, setDarkAndWhithSideBar] = useState(true);

    let enableSideBar = (e, type) => {
        e.preventDefault()
        switch (type) {
            case 'RightSideBar':
                setEnableSidebar(!enable);
                break;
            case 'LeftSideBar':
                setEnableLeftSidebar(!enableLeft)
                break;
            case 'DarkAndWhithSideBar':
                setDarkAndWhithSideBar(!DarkAndWhithSideBar)
                break;
        }


    }

    let setTok = () => {
        setToken(true)
    }



    let render = (
        <>
            <Switch>
                <Route path="/login" exact >
                    {
                        (<Login setTok={setTok} token={token} />)
                    }

                </Route>
            </Switch>
            <div id="page-container" style={{ display: token ? '' : 'none' }} className=
                {`enable-page-overlay
                sidebar-r side-scroll
                 page-header-fixed main-content-narrow
                rtl-support ${theme.sidebarRight ? 'side-trans-enabled sidebar-o sidebar-o-xs' : 'side-trans-enabled'}
                  ${!theme.sidebarLeft ? 'side-trans-enabled side-overlay-o ' : ''}
                  ${theme.sidebarStyle ? 'sidebar-dark' : 'page-header-dark'}`

                }

            >

                <Aside btn={enableSideBar} />

                <SideBar btn={enableSideBar} />
                <Header btn={enableSideBar} />
                <main id="main-container">
                    <Index />
                </main>
                <Footer />
            </div>
        </>
    );




    return render
}

let MapStateToProps = (state) => ({
    theme : state.theme
})
export default connect(MapStateToProps)(App);