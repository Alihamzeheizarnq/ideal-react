function Login() {
    return (
        <div id="page-container" className="side-trans-enabled" style={{ fontFamily: 'IRANSansfanum', direction: 'rtl' }}>
            <main id="main-container">
                <div className="row no-gutters justify-content-center bg-body-dark">
                    <div className="hero-static col-sm-10 col-md-8 col-xl-6 d-flex align-items-center p-2 px-sm-0">
                        <div className=" block-transparent block-fx-pop w-100 mb-0 overflow-hidden bg-image" style={{ backgroundImage: 'url("assets/media/photos/photo20@2x.jpg")' }}>
                            <div className="row no-gutters justify-content-center">
                                <div className="col-md-6 order-md-1 bg-white" style={{ borderRadius: '10px' }}>
                                    <div className="block-content block-content-full px-lg-5 py-md-5 py-lg-5">
                                        <div className="mb-2 text-center">
                                            <a className="link-fx font-w700 font-size-h1" href="index.html">
                                                <span className="text-dark">ideal</span><span className="text-primary">it</span>
                                            </a>
                                            <p className="text-uppercase font-w700 font-size-sm text-muted">صفحه ورود</p>
                                        </div>
                                        <form className="js-validation-signin" action="be_pages_auth_all.html" method="POST" noValidate="novalidate">
                                            <div className="form-group">
                                                <input type="text" className="form-control form-control-alt is-invalid" id="login-username" name="login-username" placeholder="نام کاربری" aria-describedby="login-username-error" />
                                            </div>
                                            <div className="form-group">
                                                <input type="password" className="form-control form-control-alt is-invalid" id="login-password" name="login-password" placeholder="رمز عبور" aria-describedby="login-password-error" aria-invalid="true" />
                                            </div>
                                            <div className="form-group">
                                                <button type="submit" className="btn btn-block btn-hero-primary">

                                                    <i className="fa fa-fw fa-sign-in-alt mr-1" /> ورود
                                                </button>
                                                <div className="text-center mt-2">
                                                    <svg class="pl" width="240" height="240" viewBox="0 0 240 240">
                                                        <circle class="pl__ring pl__ring--a" cx="120" cy="120" r="105" fill="none" stroke="#000" stroke-width="20" stroke-dasharray="0 660" stroke-dashoffset="-330" stroke-linecap="round" />
                                                        <circle class="pl__ring pl__ring--b" cx="120" cy="120" r="35" fill="none" stroke="#000" stroke-width="20" stroke-dasharray="0 220" stroke-dashoffset="-110" stroke-linecap="round" />
                                                        <circle class="pl__ring pl__ring--c" cx="85" cy="120" r="70" fill="none" stroke="#000" stroke-width="20" stroke-dasharray="0 440" stroke-linecap="round" />
                                                        <circle class="pl__ring pl__ring--d" cx="155" cy="120" r="70" fill="none" stroke="#000" stroke-width="20" stroke-dasharray="0 440" stroke-linecap="round" />
                                                    </svg>
                                                </div>
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

    )
}
export default Login;