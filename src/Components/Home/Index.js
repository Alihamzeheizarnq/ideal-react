import animate from './../Partials/animate';
import { StyleRoot } from 'radium';

function Home() {




    return (
        <>
            <StyleRoot>

                <div className="content" style={animate.bounce}>
                    <div className="row row-deck" >
                        <div className="col-6 col-lg-3">
                            <a className="block block-rounded block-link-shadow text-center" href="be_pages_ecom_orders.html">
                                <div className="block-content py-5">
                                    <div className="font-size-h3 font-w600 text-primary mb-1">78</div>
                                    <p className="font-w600 font-size-sm text-muted text-uppercase mb-0">
                                        Pending Orders
                                    </p>
                                </div>
                            </a>
                        </div>
                        <div className="col-6 col-lg-3">
                            <a className="block block-rounded block-link-shadow text-center" href="javascript:void(0)">
                                <div className="block-content py-5">
                                    <div className="font-size-h3 font-w600 text-success mb-1">26%</div>
                                    <p className="font-w600 font-size-sm text-muted text-uppercase mb-0">
                                        Profit
                                    </p>
                                </div>
                            </a>
                        </div>
                        <div className="col-6 col-lg-3">
                            <a className="block block-rounded block-link-shadow text-center" href="javascript:void(0)">
                                <div className="block-content py-5">
                                    <div className="font-size-h3 font-w600 mb-1">126</div>
                                    <p className="font-w600 font-size-sm text-muted text-uppercase mb-0">
                                        Orders Today
                                    </p>
                                </div>
                            </a>
                        </div>
                        <div className="col-6 col-lg-3">
                            <a className="block block-rounded block-link-shadow text-center" href="javascript:void(0)">
                                <div className="block-content py-5">
                                    <div className="font-size-h3 font-w600 mb-1">$16.485</div>
                                    <p className="font-w600 font-size-sm text-muted text-uppercase mb-0">
                                        Earnings Today
                                    </p>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xl-6">
                            <div className="block block-rounded">
                                <div className="block-header block-header-default">
                                    <h3 className="block-title">Top Products</h3>
                                    <div className="block-options">
                                        <button type="button" className="btn-block-option" data-toggle="block-option" data-action="state_toggle" data-action-mode="demo">
                                            <i className="si si-refresh" />
                                        </button>
                                    </div>
                                </div>
                                <div className="block-content">
                                    <table className="table table-borderless table-striped table-vcenter font-size-sm">
                                        <tbody>
                                            <tr>
                                                <td className="text-center" style={{ width: 100 }}>
                                                    <a className="font-w600" href="be_pages_ecom_product_edit.html">PID.965</a>
                                                </td>
                                                <td>
                                                    <a href="be_pages_ecom_product_edit.html">Diablo III</a>
                                                </td>
                                                <td className="d-none d-sm-table-cell text-right text-nowrap">
                                                    <div className="text-warning">
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="text-center" style={{ width: 100 }}>
                                                    <a className="font-w600" href="be_pages_ecom_product_edit.html">PID.154</a>
                                                </td>
                                                <td>
                                                    <a href="be_pages_ecom_product_edit.html">Control</a>
                                                </td>
                                                <td className="d-none d-sm-table-cell text-right text-nowrap">
                                                    <div className="text-warning">
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="text-center" style={{ width: 100 }}>
                                                    <a className="font-w600" href="be_pages_ecom_product_edit.html">PID.523</a>
                                                </td>
                                                <td>
                                                    <a href="be_pages_ecom_product_edit.html">Minecraft</a>
                                                </td>
                                                <td className="d-none d-sm-table-cell text-right text-nowrap">
                                                    <div className="text-warning">
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="text-center" style={{ width: 100 }}>
                                                    <a className="font-w600" href="be_pages_ecom_product_edit.html">PID.423</a>
                                                </td>
                                                <td>
                                                    <a href="be_pages_ecom_product_edit.html">Hollow Knight</a>
                                                </td>
                                                <td className="d-none d-sm-table-cell text-right text-nowrap">
                                                    <div className="text-warning">
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="text-center" style={{ width: 100 }}>
                                                    <a className="font-w600" href="be_pages_ecom_product_edit.html">PID.391</a>
                                                </td>
                                                <td>
                                                    <a href="be_pages_ecom_product_edit.html">Sekiro: Shadows Die Twice</a>
                                                </td>
                                                <td className="d-none d-sm-table-cell text-right text-nowrap">
                                                    <div className="text-warning">
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="text-center" style={{ width: 100 }}>
                                                    <a className="font-w600" href="be_pages_ecom_product_edit.html">PID.218</a>
                                                </td>
                                                <td>
                                                    <a href="be_pages_ecom_product_edit.html">NBA 2K20</a>
                                                </td>
                                                <td className="d-none d-sm-table-cell text-right text-nowrap">
                                                    <div className="text-warning">
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="text-center" style={{ width: 100 }}>
                                                    <a className="font-w600" href="be_pages_ecom_product_edit.html">PID.995</a>
                                                </td>
                                                <td>
                                                    <a href="be_pages_ecom_product_edit.html">Forza Motorsport 7</a>
                                                </td>
                                                <td className="d-none d-sm-table-cell text-right text-nowrap">
                                                    <div className="text-warning">
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="text-center" style={{ width: 100 }}>
                                                    <a className="font-w600" href="be_pages_ecom_product_edit.html">PID.761</a>
                                                </td>
                                                <td>
                                                    <a href="be_pages_ecom_product_edit.html">Minecraft</a>
                                                </td>
                                                <td className="d-none d-sm-table-cell text-right text-nowrap">
                                                    <div className="text-warning">
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="text-center" style={{ width: 100 }}>
                                                    <a className="font-w600" href="be_pages_ecom_product_edit.html">PID.860</a>
                                                </td>
                                                <td>
                                                    <a href="be_pages_ecom_product_edit.html">Dark Souls III</a>
                                                </td>
                                                <td className="d-none d-sm-table-cell text-right text-nowrap">
                                                    <div className="text-warning">
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="text-center" style={{ width: 100 }}>
                                                    <a className="font-w600" href="be_pages_ecom_product_edit.html">PID.952</a>
                                                </td>
                                                <td>
                                                    <a href="be_pages_ecom_product_edit.html">Age of Mythology</a>
                                                </td>
                                                <td className="d-none d-sm-table-cell text-right text-nowrap">
                                                    <div className="text-warning">
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="block block-rounded">
                                <div className="block-header block-header-default">
                                    <h3 className="block-title">Latest Orders</h3>
                                    <div className="block-options">
                                        <button type="button" className="btn-block-option" data-toggle="block-option" data-action="state_toggle" data-action-mode="demo">
                                            <i className="si si-refresh" />
                                        </button>
                                    </div>
                                </div>
                                <div className="block-content">
                                    <table className="table table-borderless table-striped table-vcenter font-size-sm">
                                        <tbody>
                                            <tr>
                                                <td className="font-w600 text-center" style={{ width: 100 }}>
                                                    <a href="be_pages_ecom_order.html">ORD.7116</a>
                                                </td>
                                                <td className="d-none d-sm-table-cell">
                                                    <a href="be_pages_ecom_customer.html">Carl Wells</a>
                                                </td>
                                                <td>
                                                    <span className="badge badge-success">Delivered</span>
                                                </td>
                                                <td className="font-w600 text-right">$212,00</td>
                                            </tr>
                                            <tr>
                                                <td className="font-w600 text-center">
                                                    <a href="be_pages_ecom_order.html">ORD.7115</a>
                                                </td>
                                                <td className="d-none d-sm-table-cell">
                                                    <a href="be_pages_ecom_customer.html">Judy Ford</a>
                                                </td>
                                                <td>
                                                    <span className="badge badge-danger">Canceled</span>
                                                </td>
                                                <td className="font-w600 text-right">$471,00</td>
                                            </tr>
                                            <tr>
                                                <td className="font-w600 text-center">
                                                    <a href="be_pages_ecom_order.html">ORD.7114</a>
                                                </td>
                                                <td className="d-none d-sm-table-cell">
                                                    <a href="be_pages_ecom_customer.html">Jack Greene</a>
                                                </td>
                                                <td>
                                                    <span className="badge badge-success">Delivered</span>
                                                </td>
                                                <td className="font-w600 text-right">$584,00</td>
                                            </tr>
                                            <tr>
                                                <td className="font-w600 text-center">
                                                    <a href="be_pages_ecom_order.html">ORD.7113</a>
                                                </td>
                                                <td className="d-none d-sm-table-cell">
                                                    <a href="be_pages_ecom_customer.html">Lori Grant</a>
                                                </td>
                                                <td>
                                                    <span className="badge badge-warning">Processing</span>
                                                </td>
                                                <td className="font-w600 text-right">$213,00</td>
                                            </tr>
                                            <tr>
                                                <td className="font-w600 text-center">
                                                    <a href="be_pages_ecom_order.html">ORD.7112</a>
                                                </td>
                                                <td className="d-none d-sm-table-cell">
                                                    <a href="be_pages_ecom_customer.html">Jose Wagner</a>
                                                </td>
                                                <td>
                                                    <span className="badge badge-success">Delivered</span>
                                                </td>
                                                <td className="font-w600 text-right">$534,00</td>
                                            </tr>
                                            <tr>
                                                <td className="font-w600 text-center">
                                                    <a href="be_pages_ecom_order.html">ORD.7111</a>
                                                </td>
                                                <td className="d-none d-sm-table-cell">
                                                    <a href="be_pages_ecom_customer.html">Thomas Riley</a>
                                                </td>
                                                <td>
                                                    <span className="badge badge-warning">Processing</span>
                                                </td>
                                                <td className="font-w600 text-right">$624,00</td>
                                            </tr>
                                            <tr>
                                                <td className="font-w600 text-center">
                                                    <a href="be_pages_ecom_order.html">ORD.7110</a>
                                                </td>
                                                <td className="d-none d-sm-table-cell">
                                                    <a href="be_pages_ecom_customer.html">Susan Day</a>
                                                </td>
                                                <td>
                                                    <span className="badge badge-success">Delivered</span>
                                                </td>
                                                <td className="font-w600 text-right">$331,00</td>
                                            </tr>
                                            <tr>
                                                <td className="font-w600 text-center">
                                                    <a href="be_pages_ecom_order.html">ORD.7109</a>
                                                </td>
                                                <td className="d-none d-sm-table-cell">
                                                    <a href="be_pages_ecom_customer.html">Adam McCoy</a>
                                                </td>
                                                <td>
                                                    <span className="badge badge-warning">Processing</span>
                                                </td>
                                                <td className="font-w600 text-right">$968,00</td>
                                            </tr>
                                            <tr>
                                                <td className="font-w600 text-center">
                                                    <a href="be_pages_ecom_order.html">ORD.7108</a>
                                                </td>
                                                <td className="d-none d-sm-table-cell">
                                                    <a href="be_pages_ecom_customer.html">Jose Mills</a>
                                                </td>
                                                <td>
                                                    <span className="badge badge-success">Delivered</span>
                                                </td>
                                                <td className="font-w600 text-right">$781,00</td>
                                            </tr>
                                            <tr>
                                                <td className="font-w600 text-center">
                                                    <a href="be_pages_ecom_order.html">ORD.7107</a>
                                                </td>
                                                <td className="d-none d-sm-table-cell">
                                                    <a href="be_pages_ecom_customer.html">Amanda Powell</a>
                                                </td>
                                                <td>
                                                    <span className="badge badge-danger">Canceled</span>
                                                </td>
                                                <td className="font-w600 text-right">$685,00</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </StyleRoot>

        </>
    );
}

export default Home;