import './App.css';
import './Admin.css';
import SideBar from './Components/Partials/Sidebar';
import Header from './Components/Partials/Header';
import Aside from './Components/Partials/Aside';
import Footer from './Components/Partials/Footer';
import Index from './Components'
import { useEffect, useState } from 'react';
import Login from './Components/auth/Login';
import { useHistory } from "react-router-dom";
import Auth from './Api/Login';



function App() {

    let history = useHistory();
    let [token, setToken] = useState(true);

    useEffect(() => {
        Auth.CheckUser((user) => {
            setToken(false)
        })
    },[])

    let [enable, setEnableSidebar] = useState(true);
    let [enableLeft, setEnableLeftSidebar] = useState(true);
    let [DarkAndWhithSideBar, setDarkAndWhithSideBar] = useState(true);

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

    let setTok = () => {
        setToken(false)
    }
    if (token) {
        history.push('/login')
        return <Login setTok={setTok} />
    }else{
        history.push(history.location.pathname)

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