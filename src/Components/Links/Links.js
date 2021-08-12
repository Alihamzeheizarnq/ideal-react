import { connect } from "react-redux";

import { useState } from "react";
import { bounceInLeft } from 'react-animations';
import Radium, { StyleRoot } from 'radium';
import Breadcrumb from "../Partials/Breadcrumb";
function Link() {

    let [header, setHeader] = useState({
        title: 'لسیت لینک ها',
        breadcrumb: [
            { title: 'صفحه اصلی', link: '#', active: false },
            { title: 'لیست لینک ها', link: '/links', active: false },
        ]
    })


    const styles = {
        bounce: {
            animation: 'x 1s',
            animationName: Radium.keyframes(bounceInLeft, 'bounceInLeft')
        }
    }
    return (
        <>
            <Breadcrumb header={header} />
            <StyleRoot>
                <div className="content">
                    <div className="block block-rounded" style={styles.bounce}>
                        <div className="block-header block-header-default">
                            <h3 className="block-title">Bordered Table</h3>
                            <div className="block-options">
                                <div className="block-options-item">
                                    <code>.table-bordered</code>
                                </div>
                            </div>
                        </div>
                        <div className="block-content">
                            <table className="table table-bordered table-vcenter">
                                <thead>
                                    <tr>
                                        <th className="text-center" style={{ width: 50 }}>#</th>
                                        <th>Name</th>
                                        <th className="d-none d-sm-table-cell" style={{ width: '15%' }}>Access</th>
                                        <th className="text-center" style={{ width: 100 }}>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th className="text-center" scope="row">1</th>
                                        <td className="font-w600">
                                            <a href="be_pages_generic_profile.html">علی حمزه ای</a>
                                        </td>
                                        <td className="d-none d-sm-table-cell">
                                            <span className="badge badge-danger">غیر فعال</span>
                                        </td>
                                        <td className="text-center">
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-sm btn-primary js-tooltip-enabled" data-toggle="tooltip" title data-original-title="Edit">
                                                    <i className="fa fa-pencil-alt" />
                                                </button>
                                                <button type="button" className="btn btn-sm btn-primary js-tooltip-enabled" data-toggle="tooltip" title data-original-title="Delete">
                                                    <i className="fa fa-times" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th className="text-center" scope="row">2</th>
                                        <td className="font-w600">
                                            <a href="be_pages_generic_profile.html">Ryan Flores</a>
                                        </td>
                                        <td className="d-none d-sm-table-cell">
                                            <span className="badge badge-danger">Disabled</span>
                                        </td>
                                        <td className="text-center">
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-sm btn-primary js-tooltip-enabled" data-toggle="tooltip" title data-original-title="Edit">
                                                    <i className="fa fa-pencil-alt" />
                                                </button>
                                                <button type="button" className="btn btn-sm btn-primary js-tooltip-enabled" data-toggle="tooltip" title data-original-title="Delete">
                                                    <i className="fa fa-times" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th className="text-center" scope="row">3</th>
                                        <td className="font-w600">
                                            <a href="be_pages_generic_profile.html">Carl Wells</a>
                                        </td>
                                        <td className="d-none d-sm-table-cell">
                                            <span className="badge badge-warning">Trial</span>
                                        </td>
                                        <td className="text-center">
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-sm btn-primary js-tooltip-enabled" data-toggle="tooltip" title data-original-title="Edit">
                                                    <i className="fa fa-pencil-alt" />
                                                </button>
                                                <button type="button" className="btn btn-sm btn-primary js-tooltip-enabled" data-toggle="tooltip" title data-original-title="Delete">
                                                    <i className="fa fa-times" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th className="text-center" scope="row">4</th>
                                        <td className="font-w600">
                                            <a href="be_pages_generic_profile.html">Judy Ford</a>
                                        </td>
                                        <td className="d-none d-sm-table-cell">
                                            <span className="badge badge-warning">Trial</span>
                                        </td>
                                        <td className="text-center">
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-sm btn-primary js-tooltip-enabled" data-toggle="tooltip" title data-original-title="Edit">
                                                    <i className="fa fa-pencil-alt" />
                                                </button>
                                                <button type="button" className="btn btn-sm btn-primary js-tooltip-enabled" data-toggle="tooltip" title data-original-title="Delete">
                                                    <i className="fa fa-times" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th className="text-center" scope="row">5</th>
                                        <td className="font-w600">
                                            <a href="be_pages_generic_profile.html">Lisa Jenkins</a>
                                        </td>
                                        <td className="d-none d-sm-table-cell">
                                            <span className="badge badge-info">Business</span>
                                        </td>
                                        <td className="text-center">
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-sm btn-primary js-tooltip-enabled" data-toggle="tooltip" title data-original-title="Edit">
                                                    <i className="fa fa-pencil-alt" />
                                                </button>
                                                <button type="button" className="btn btn-sm btn-primary js-tooltip-enabled" data-toggle="tooltip" title data-original-title="Delete">
                                                    <i className="fa fa-times" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th className="text-center" scope="row">6</th>
                                        <td className="font-w600">
                                            <a href="be_pages_generic_profile.html">Jesse Fisher</a>
                                        </td>
                                        <td className="d-none d-sm-table-cell">
                                            <span className="badge badge-warning">Trial</span>
                                        </td>
                                        <td className="text-center">
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-sm btn-primary js-tooltip-enabled" data-toggle="tooltip" title data-original-title="Edit">
                                                    <i className="fa fa-pencil-alt" />
                                                </button>
                                                <button type="button" className="btn btn-sm btn-primary js-tooltip-enabled" data-toggle="tooltip" title data-original-title="Delete">
                                                    <i className="fa fa-times" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            </StyleRoot>
        </>
    )
}

export default connect()(Link);