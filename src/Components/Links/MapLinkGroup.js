

function CreateLinkGroup(props) {



    return (
        <tr>
            <th className="text-center" scope="row">{ props.id }</th>
            <td className="font-w600">
                <a href="be_pages_generic_profile.html">{ props.name }</a>
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
    )
}

export default CreateLinkGroup;