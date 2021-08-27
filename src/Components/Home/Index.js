import animate from './../Partials/animate';
import { StyleRoot } from 'radium';
import { useEffect, useState } from 'react';
import Vsitor from '../../Api/Vsitor';
import { ideal } from '../../config';

function Home() {

    let [data, setData] = useState({
        category: [],
        portofilos: [],
        posts: [],
        url: [],
        day: 0,
        day_7: 0,
        portofilo_count: 0,
        post_count: 0,
        isLoding: false
    })
    useEffect(() => {
        Vsitor.ListVisitor(data => {
            setData((state) => ({
                category: data.category,
                portofilos: data.portofilo,
                posts: data.posts,
                url: data.url,
                day: data.day,
                day_7: data.day_7,
                portofilo_count: data.portofilo_count,
                post_count: data.post_count,
                isLoding: true
            }))
        })
    }, [])




    return (
        <>
            <StyleRoot>
                {
                    !data.isLoding ? (
                        <div className="content">
                            <div className="spinner-border" role="status"> <span className="sr-only">Loading...</span></div>
                        </div>
                    ) : (
                        <div className="content" style={animate.bounce}>
                            <div className="row row-deck" >
                                <div className="col-6 col-lg-3">
                                    <a className="block block-rounded block-link-shadow text-center" href="be_pages_ecom_orders.html">
                                        <div className="block-content py-5">
                                            <div className="font-size-h3 font-w600 text-primary mb-1">{data.post_count}</div>
                                            <p className="font-w600 font-size-sm text-muted text-uppercase mb-0">
                                                تعداد پست ها
                                            </p>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-6 col-lg-3">
                                    <a className="block block-rounded block-link-shadow text-center" href="javascript:void(0)">
                                        <div className="block-content py-5">
                                            <div className="font-size-h3 font-w600 text-success mb-1">{data.portofilo_count}</div>
                                            <p className="font-w600 font-size-sm text-muted text-uppercase mb-0">
                                                تعداد نمونه کارها
                                            </p>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-6 col-lg-3">
                                    <a className="block block-rounded block-link-shadow text-center" href="javascript:void(0)">
                                        <div className="block-content py-5">
                                            <div className="font-size-h3 font-w600 mb-1">{data.day}</div>
                                            <p className="font-w600 font-size-sm text-muted text-uppercase mb-0">
                                                بازیدکنندگان امروز
                                            </p>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-6 col-lg-3">
                                    <a className="block block-rounded block-link-shadow text-center" href="javascript:void(0)">
                                        <div className="block-content py-5">
                                            <div className="font-size-h3 font-w600 mb-1">{data.day_7}</div>
                                            <p className="font-w600 font-size-sm text-muted text-uppercase mb-0">
                                                بازیدکنندگان هفت روز گذشته
                                            </p>
                                        </div>
                                    </a>
                                </div>

                            </div>

                            <div className="row">


                            <div className="col-xl-6">
                                    <div className="block block-rounded">
                                        <div className="block-header block-header-default">
                                            <h3 className="block-title">  نمونه کار های پربازدید </h3>
                                            <div className="block-options">
                                                <button type="button" className="btn-block-option" data-toggle="block-option" data-action="state_toggle" data-action-mode="demo">
                                                    <i className="si si-refresh" />
                                                </button>
                                            </div>
                                        </div>
                                        <div className="block-content">
                                            <table className="table table-borderless table-striped table-vcenter font-size-sm">
                                                <tbody>

                                                    {
                                                        data.portofilos.map(item => (
                                                            <tr>
                                                                <td className="font-w600 text-center">
                                                                    <a href="be_pages_ecom_order.html">{item.title}</a>
                                                                </td>
                                                                <td className="d-none d-sm-table-cell">
                                                                    <img style={{ maxHeight: '60px' }} src={ideal.url + '/storage' + item.image} />
                                                                </td>

                                                                <td className="font-w600 text-right">{item.count}</td>
                                                            </tr>
                                                        ))
                                                    }


                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>




                                <div className="col-xl-6">
                                    <div className="block block-rounded">
                                        <div className="block-header block-header-default">
                                            <h3 className="block-title">پست های پربازدید</h3>
                                            <div className="block-options">
                                                <button type="button" className="btn-block-option" data-toggle="block-option" data-action="state_toggle" data-action-mode="demo">
                                                    <i className="si si-refresh" />
                                                </button>
                                            </div>
                                        </div>
                                        <div className="block-content">
                                            <table className="table table-borderless table-striped table-vcenter font-size-sm">
                                                <tbody>

                                                    {
                                                        data.posts.map(item => (
                                                            <tr>
                                                                <td className="font-w600 text-center">
                                                                    <a href="be_pages_ecom_order.html">{item.title}</a>
                                                                </td>
                                                                <td className="d-none d-sm-table-cell">
                                                                    <img style={{ maxHeight: '60px' }} src={ideal.url + '/storage' + item.image} />
                                                                </td>

                                                                <td className="font-w600 text-right">{item.count}</td>
                                                            </tr>
                                                            
                                                        ))
                                                    }


                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xl-6">
                                    <div className="block block-rounded">
                                        <div className="block-header block-header-default">
                                            <h3 className="block-title">  دسته بندی های پربازدید </h3>
                                            <div className="block-options">
                                                <button type="button" className="btn-block-option" data-toggle="block-option" data-action="state_toggle" data-action-mode="demo">
                                                    <i className="si si-refresh" />
                                                </button>
                                            </div>
                                        </div>
                                        <div className="block-content">
                                            <table className="table table-borderless table-striped table-vcenter font-size-sm">
                                                <tbody>
                                                    {
                                                        data.category.map(item => (
                                                            <tr>

                                                                <td className="text-center">
                                                                    <a className="font-w600" href="be_pages_ecom_product_edit.html">{item.name}</a>
                                                                </td>
                                                                <td>
                                                                    <a href="be_pages_ecom_product_edit.html">{item.count}</a>
                                                                </td>


                                                            </tr>
                                                        ))
                                                    }



                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>


                                <div className="col-xl-6">
                                    <div className="block block-rounded">
                                        <div className="block-header block-header-default">
                                            <h3 className="block-title">آدرس های پربازدید</h3>
                                            <div className="block-options">
                                                <button type="button" className="btn-block-option" data-toggle="block-option" data-action="state_toggle" data-action-mode="demo">
                                                    <i className="si si-refresh" />
                                                </button>
                                            </div>
                                        </div>
                                        <div className="block-content">
                                            <table className="table table-borderless table-striped table-vcenter font-size-sm">
                                                <tbody>
                                                    {
                                                        data.url.map(item => (
                                                            <tr>
                                                                <td>
                                                                    <a href="be_pages_ecom_product_edit.html">{item.count}</a>
                                                                </td>
                                                                <td className="text-center">
                                                                    <a className="font-w600" href="be_pages_ecom_product_edit.html">{item.url}</a>
                                                                </td>


                                                            </tr>
                                                        ))
                                                    }



                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                  
                            </div>
                        </div>

                    )
                }


            </StyleRoot>

        </>
    );
}

export default Home;