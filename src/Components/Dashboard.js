


function Dashboard() {
    return (
        <>
              <div className="block block-rounded">
                            <div className="block-header block-header-default">
                                <h3 className="block-title">
                                    Title <small>Get Started</small>
                                </h3>
                                <div className="block-options pl-0 pr-3">
                                    <button type="button" className="btn-block-option" data-toggle="block-option" data-action="fullscreen_toggle" />
                                    <button type="button" className="btn-block-option" data-toggle="block-option" data-action="pinned_toggle">
                                        <i className="si si-pin" />
                                    </button>
                                    <button type="button" className="btn-block-option" data-toggle="block-option" data-action="state_toggle" data-action-mode="demo">
                                        <i className="si si-refresh" />
                                    </button>
                                    <button type="button" className="btn-block-option" data-toggle="block-option" data-action="content_toggle" />
                                    <button type="button" className="btn-block-option" data-toggle="block-option" data-action="close">
                                        <i className="si si-close" />
                                    </button>
                                </div>
                            </div>
                            <div className="block-content">
                                <p>
                                    Create your own awesome project!
                                </p>
                            </div>
                        </div>
        </>
    )
}



export default Dashboard;