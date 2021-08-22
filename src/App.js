import './App.css';
import './Admin.css';
import Auth from './Api/Login';
import Index from './Components'
import { useEffect, useState } from 'react';
import { Route, Switch, useHistory } from "react-router-dom";
import { connect } from 'react-redux';
import actions from './actions';
import SideBar from './Components/Partials/Sidebar';
import Header from './Components/Partials/Header';
import Aside from './Components/Partials/Aside';
import Footer from './Components/Partials/Footer';
import Login from './Components/auth/Login';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { setHeader } from './Api/Ideal';






function App(props) {


    let history = useHistory();

    let [loding, setLoding] = useState(true);
    useEffect(() => {
        Auth.CheckUser(() => {
            props.dispatch(actions.TokenStatus(true));

                setLoding(false)
        }, () => {
                setLoding(false)
            props.dispatch(actions.TokenStatus(false))
            return history.push('/login')
        })
    }, [])

    useEffect(() => {
     setHeader();
     console.log('IS')

    })


    let theme = props.theme;


    let render = (
        <>
            <div id="page-loader" className={`bg-gd-lake ${loding ? 'show' : ''}`} />

            <Switch>
                <Route path="/login" exact>
                    {
                        (<Login />)
                    }
                </Route>
            </Switch>
            {
                !theme.token || loding ? '' :
                    (
                        <>
                            <div id="page-container" className=
                                {`enable-page-overlay
                                sidebar-r side-scroll
                                page-header-fixed main-content-narrow
                                rtl-support ${theme.sidebarRight ? 'side-trans-enabled sidebar-o sidebar-o-xs' : 'side-trans-enabled'}
                                ${!theme.sidebarLeft ? 'side-trans-enabled side-overlay-o ' : ''}
                                ${theme.sidebarStyle ? 'sidebar-dark' : 'page-header-dark'}`
                                }>
                                <Aside />
                                <SideBar />
                                <Header />
                                <main id="main-container">
                                    <Index />
                                </main>
                                <Footer />
                                <ToastContainer
                                    position="bottom-left"
                                    autoClose={5000}
                                    hideProgressBar={false}
                                    pauseOnHover={true}
                                    draggable={true}
                                    progress={undefined}
                                    rtl={true}
                                />
                            </div>
                        </>
                    )
            }

        </>
    );
    return render
}

let MapStateToProps = (state) => ({
    theme: state.theme
})
export default connect(MapStateToProps)(App);