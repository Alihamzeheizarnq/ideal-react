function Breadcrumb() {
    return (
        <>
            <div className="bg-body-light">
                <div className="content content-full">
                    <div className="d-flex flex-column flex-sm-row justify-content-sm-between align-items-sm-center">
                        <h1 className="flex-sm-fill font-size-h2 font-w400 mt-2 mb-0 mb-sm-2">صفحه اصلی</h1>
                        <nav className="flex-sm-00-auto ml-sm-3" aria-label="breadcrumb">
                            <ol className="breadcrumb breadcrumb-alt">
                                <li className="breadcrumb-item">
                                    <a href="javascript:void(0)">صفحه اصلی</a>
                                </li>
                                <li className="breadcrumb-item">
                                    <a href="javascript:void(0)">مدیریت کاربران</a>
                                </li>
                                <li className="breadcrumb-item active" aria-current="page">ایجاد کاربر</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Breadcrumb;