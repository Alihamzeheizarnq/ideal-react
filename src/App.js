import './App.css';
import './Admin.css';
import SideBar from './Components/Partials/Sidebar';
import Header from './Components/Partials/Header';
import Aside from './Components/Partials/Aside';
import Breadcrumb from './Components/Partials/Breadcrumb';
import Footer from './Components/Partials/Footer';
import Index from './Components'
import { useState } from 'react';

function App() {

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

    return (
        <>
            <div id="page-container" className=
                {`enable-page-overlay
                sidebar-r side-scroll
                 page-header-fixed main-content-narrow
                rtl-support ${enable ? 'side-trans-enabled sidebar-o' : ''}
                  ${!enableLeft ? 'side-trans-enabled side-overlay-o' : ''}
                  ${!DarkAndWhithSideBar ? 'sidebar-dark' : 'page-header-dark'}`}

            >
                <Aside btn={enableSideBar} />

                <SideBar btn={enableSideBar} />
                <Header btn={enableSideBar} />
                <main id="main-container">
                    <Breadcrumb />
                    <div className="content">
                        <Index />
                    </div>
                </main>
                <Footer />
            </div>


        </>
    )
}

export default App;