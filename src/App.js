import './App.css';
import './Admin.css';
import SideBar from './Components/Partials/Sidebar';
import Header from './Components/Partials/Header';
import Aside from './Components/Partials/Aside';
import Footer from './Components/Partials/Footer';
import Index from './Components'
import { useState } from 'react';
import Login from './Components/auth/Login';
import { useHistory } from "react-router-dom";


function App() {

    let history = useHistory();


    let [enable, setEnableSidebar] = useState(true);
    let [enableLeft, setEnableLeftSidebar] = useState(true);
    let [DarkAndWhithSideBar, setDarkAndWhithSideBar] = useState(true);
    let [token, setToken] = useState(false);

    let enableSideBar = (type) => {
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
    if (!token) {
        history.push('/login')
        return <Login />
    }

    return (
        <>
            <div id="page-container" className=
                {`enable-page-overlay
                sidebar-r side-scroll
                 page-header-fixed main-content-narrow
                rtl-support ${enable ? 'side-trans-enabled sidebar-o sidebar-o-xs' : 'side-trans-enabled'}
                  ${!enableLeft ? 'side-trans-enabled side-overlay-o ' : ''}
                  ${DarkAndWhithSideBar ? 'sidebar-dark' : 'page-header-dark'}`}

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
    )
}

export default App;