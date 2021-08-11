import { useState } from 'react';
import validator from '../fa';
import { ToastContainer, toast } from 'react-toastify';
import Auth from '../../Api/Login';
import 'react-toastify/dist/ReactToastify.css';




function Login(props) {

    let [user, setUser] = useState('');
    let [password, setPassword] = useState('');
    let [loading, setLoading] = useState(false);
    let [btnEnabel, setBtnEnabel] = useState(false);

    let submitForm = (e) => {
        e.preventDefault();

        if (validator.allValid()) {
            setBtnEnabel(true)
            setLoading(true)

            Auth.login(user, password, () => {
                toast.success('ورود با موفقیت انجام شد');
                setTimeout(() => {
                    setBtnEnabel(false)
                    setLoading(false)
                    props.setTok()
                }, 3000)
            })

        }
        else {

            for (const property in validator.errorMessages) {
                toast.error(validator.errorMessages[property]);
            }
            return;
        }
    }


    return (
        <>

            <div id="page-container" className="side-trans-enabled" style={{ fontFamily: 'IRANSansfanum', direction: 'rtl' }}>
                <main id="main-container">
                    <div className="row no-gutters justify-content-center bg-body-dark">
                        <div className="hero-static col-sm-10 col-md-8 col-xl-6 d-flex align-items-center p-2 px-sm-0">
                            <div className=" block-transparent block-fx-pop w-100 mb-0 overflow-hidden bg-image" style={{ backgroundImage: 'url("assets/media/photos/photo20@2x.jpg")' }}>
                                <div className="row no-gutters justify-content-center">
                                    <div className="col-md-6 order-md-1 bg-white" style={{ borderRadius: '10px' }}>
                                        <div className="block-content block-content-full px-lg-5 py-md-5 py-lg-5">
                                            <div className="mb-2 text-center">
                                                <a className="link-fx font-w700 font-size-h1" >
                                                    <span className="text-dark">ideal</span><span className="text-primary">it</span>
                                                </a>
                                                <p className="text-uppercase font-w700 font-size-sm text-muted">صفحه ورود</p>
                                            </div>
                                            <form className="js-validation-signin" action="be_pages_auth_all.html" method="POST" noValidate="novalidate" onSubmit={(e) => submitForm(e)}>
                                                <div className="form-group">
                                                    <input
                                                        type="text"
                                                        className={`form-control form-control-alt ${validator.fieldValid('user') ? '' : 'is-invalid'}`}
                                                        value={user}
                                                        onChange={(e) => setUser(e.target.value)}
                                                        id="login-username"
                                                        name="user"
                                                        placeholder="نام کاربری"
                                                        aria-describedby="login-username-error" />
                                                    <div id="login-username-error" className="invalid-feedback animated fadeIn text-right">
                                                        {validator.message('user', user, 'required|email|min:20')}
                                                    </div>

                                                </div>
                                                <div className="form-group">
                                                    <input type="password" className={`form-control form-control-alt ${validator.fieldValid('password') ? '' : 'is-invalid'}`}
                                                        value={password} onChange={(e) => setPassword(e.target.value)}
                                                        id="login-password" name="password" placeholder="رمز عبور"
                                                        aria-describedby="login-password-error" aria-invalid="true" />
                                                    <div id="login-username-error" className="invalid-feedback animated fadeIn text-right">
                                                        {validator.message('password', password, 'required|min:8')}
                                                    </div>

                                                </div>
                                                <div className="form-group">
                                                    <button type="submit" disabled={btnEnabel} className="btn btn-block btn-hero-primary">

                                                        <i className="fa fa-fw fa-sign-in-alt mr-1" /> ورود
                                                    </button>
                                                    {
                                                        loading ? (
                                                            <div className="text-center mt-2">
                                                                <svg className="pl" width="240" height="240" viewBox="0 0 240 240">
                                                                    <circle className="pl__ring pl__ring--a" cx="120" cy="120" r="105" fill="none" stroke="#000" stroke-width="20" stroke-dasharray="0 660" stroke-dashoffset="-330" stroke-linecap="round" />
                                                                    <circle className="pl__ring pl__ring--b" cx="120" cy="120" r="35" fill="none" stroke="#000" stroke-width="20" stroke-dasharray="0 220" stroke-dashoffset="-110" stroke-linecap="round" />
                                                                    <circle className="pl__ring pl__ring--c" cx="85" cy="120" r="70" fill="none" stroke="#000" stroke-width="20" stroke-dasharray="0 440" stroke-linecap="round" />
                                                                    <circle className="pl__ring pl__ring--d" cx="155" cy="120" r="70" fill="none" stroke="#000" stroke-width="20" stroke-dasharray="0 440" stroke-linecap="round" />
                                                                </svg>
                                                            </div>
                                                        )
                                                            : ''

                                                    }
                                                </div>
                                            </form>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="login-back">
                    </div>
                </main>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                pauseOnHover={true}
                draggable={true}
                progress={undefined}
                rtl={true}
            />
        </>

    )
}
export default Login;