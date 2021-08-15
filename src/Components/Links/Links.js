import { connect } from "react-redux";
import { useEffect, useState } from "react";
import { StyleRoot } from 'radium';
import Breadcrumb from "../Partials/Breadcrumb";
import CreateLink from "./CreateLink";
import Links from "../../Api/Links";
import actions from "../../actions";
import breadcrumb from "../../breadcrub";
import { ReactSortable } from "react-sortablejs";
import MapLink from "./MapLink";
import animate from './../Partials/animate';


function LinkGroups(props) {

  let [loding, setLoding] = useState(true);


  useEffect(() => {
    if (!props.links.length) {
      Links.linkIndex((data) => {
        props.dispatch(actions.SetGropeLink(data.data));
      })
    }
  }, [])

  let setState = (data) => {
    if (data) {
      props.dispatch(actions.SortChlid(data));
      Links.LinkSortChild(data, (data) => {
      })
    }

  }


  let handleTable = (e) => {
    if (e.target.tagName == "I") {
      if (e.target.parentElement.parentElement.parentElement.classList.contains('show')) {
        e.target.parentElement.parentElement.parentElement.classList.remove('show')
      } else {
        e.target.parentElement.parentElement.parentElement.classList.add('show')
      }
    }
  }
  let header = breadcrumb('links.group');
  return (
    <>
      <Breadcrumb header={header} />
      <StyleRoot>
        <div className="content">

          <div className="block block-rounded" style={animate.bounce}>


            <div className="block-header block-header-default">
              <h3 className="block-title">
                لیست سرگروه ها
              </h3>
              <div className="block-options">
                <div className="block-options-item">
                </div>
              </div>
            </div>
            <div className="col-lg-8 mt-2" >
              <CreateLink />
            </div>
            <div className="block-content">
              <table className="js-table-sections table table-hover table-vcenter js-table-sections-enabled">
                <thead>
                  <tr>
                    <th style={{ width: 30 }} />
                    <th>نام گروه</th>
                    <th >لینک</th>
                    <th className="d-none d-sm-table-cell">عملیات</th>
                  </tr>
                </thead>
                {
                  props.links.map(item => (
                    <>
                      <tbody className="js-table-sections-header">
                        <tr>
                          <td className="text-center" onClick={e => handleTable(e)}>
                            <i className="fa fa-angle-right text-muted" />
                          </td>
                          <td className="font-w600">
                            <div className="py-1">
                              <a href="be_pages_generic_profile.html">{item.name}</a>
                            </div>
                          </td>

                        </tr>
                      </tbody>
                      {
                        item.links ?
                          (
                            <ReactSortable tag="tbody" list={item.links ? item.links : []} setList={setState}>
                              {item.links.map((child) => (



                                <MapLink child={child} />

                              ))}
                            </ReactSortable>
                          )
                          : ''
                      }




                    </>
                  ))
                }


              </table>

            </div>
          </div>

        </div>
      </StyleRoot>
    </>
  )
}

let MapStateToProps = (state) => ({
  links: state.links,
})
export default connect(MapStateToProps)(LinkGroups);