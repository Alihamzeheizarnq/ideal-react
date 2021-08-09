function Login() {

    return (
        <div id="page-container" className="side-trans-enabled" style={{fontFamily: 'IRANSansfanum' ,direction: 'rtl'}}>
            <main id="main-container">
                <div className="row no-gutters justify-content-center bg-body-dark">
                    <div className="hero-static col-sm-10 col-md-8 col-xl-6 d-flex align-items-center p-2 px-sm-0">
                        <div className=" block-transparent block-fx-pop w-100 mb-0 overflow-hidden bg-image" style={{ backgroundImage: 'url("assets/media/photos/photo20@2x.jpg")' }}>
                            <div className="row no-gutters justify-content-center">
                                <div className="col-md-6 order-md-1 bg-white">
                                    <div className="block-content block-content-full px-lg-5 py-md-5 py-lg-6">
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
                                            </div>
                                        </form>
                                    </div>
                                </div>
                             
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>

    )
}


export default Login;