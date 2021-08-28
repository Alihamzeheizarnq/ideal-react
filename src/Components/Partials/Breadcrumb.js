import { NavLink } from "react-router-dom"
import { Helmet } from 'react-helmet'

function Breadcrumb(props) {
    return (
        <>

            <Helmet>
                <title>ایده آل | {props.header.title}</title>
            </Helmet>
            <div className="bg-body-light">
                <div className="content content-full">
                    <div className="d-flex flex-column flex-sm-row justify-content-sm-between align-items-sm-center">
                        <h1 className="flex-sm-fill font-size-h2 font-w400 mt-2 mb-0 mb-sm-2">{props.header.title}</h1>
                        <nav className="flex-sm-00-auto ml-sm-3" aria-label="breadcrumb">
                            <ol className="breadcrumb breadcrumb-alt">

                                {
                                    props.header.breadcrumb.map(item => {
                                        if (!item.active) {
                                            return (
                                                <li className="breadcrumb-item" key={item.title}>

                                                    <NavLink to={item.link}>{item.title}</NavLink>
                                                </li>
                                            )


                                        } else {
                                            return (
                                                <li className="breadcrumb-item active" key={item.title}>
                                                    {item.title}
                                                </li>
                                            )

                                        }

                                    }


                                    )

                                }


                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Breadcrumb;