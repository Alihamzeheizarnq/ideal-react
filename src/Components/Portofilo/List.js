import animate from './../Partials/animate';
import { StyleRoot } from 'radium';
import Breadcrumb from "../Partials/Breadcrumb";
import breadcrumb from "../../breadcrub";
function List() {



    let header = breadcrumb('portofilo.list');


    return (
        <>
            <Breadcrumb header={header} />

            <StyleRoot>

                <div className="content content-full" style={animate.bounce}>
                    <div className="block block-rounded">
                        <div className="block-header block-header-default">
                            <h3 className="block-title">Borderless Table</h3>
                            <div className="block-options">
                                <div className="block-options-item">
                                    <code>.table-borderless</code>
                                </div>
                            </div>
                        </div>
                        <div className="block-content">
                            <table className="table table-borderless table-vcenter">
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
                                            <a href="be_pages_generic_profile.html">Jack Greene</a>
                                        </td>
                                        <td className="d-none d-sm-table-cell">
                                            <span className="badge badge-success">VIP</span>
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
                                            <a href="be_pages_generic_profile.html">Megan Fuller</a>
                                        </td>
                                        <td className="d-none d-sm-table-cell">
                                            <span className="badge badge-primary">Personal</span>
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
                                            <a href="be_pages_generic_profile.html">Lisa Jenkins</a>
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
                                            <a href="be_pages_generic_profile.html">Albert Ray</a>
                                        </td>
                                        <td className="d-none d-sm-table-cell">
                                            <span className="badge badge-primary">Personal</span>
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
                                            <a href="be_pages_generic_profile.html">Barbara Scott</a>
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
                                        <th className="text-center" scope="row">6</th>
                                        <td className="font-w600">
                                            <a href="be_pages_generic_profile.html">David Fuller</a>
                                        </td>
                                        <td className="d-none d-sm-table-cell">
                                            <span className="badge badge-success">VIP</span>
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
    );
}

export default List;