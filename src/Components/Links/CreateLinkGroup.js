
import { useState } from 'react';
import { toast } from 'react-toastify';
import { connect } from 'react-redux';
import actions from '../../actions';
import Links from '../../Api/Links';

function CreateLinkGroup(props) {

    let [linkGroup, setlinkGroup] = useState('');

    let handelForm = (e) => {
        e.preventDefault()
            Links.linkStore(linkGroup, (data) => {
                props.dispatch(actions.CreateGropeLink(data.name, data.id))
                setlinkGroup('');
                toast.success('عملیات موفق !')
            })

    }

    return (
        <form className="form-inline mb-4" onSubmit={e => { handelForm(e) }}>
            <input type="text"
                className={`form-control mb-2 ml-2 mr-sm-2 mb-sm-0`}
                id="example-if-email"
                name="example-if-email"
                placeholder="نام سرگروه را وارد کنید"
                onChange={e => setlinkGroup(e.target.value)}
                value={linkGroup}

            />
            <label className="sr-only" htmlFor="example-if-password">Password</label>
            <button type="submit" className="btn btn-primary">افزودن</button>
        </form>
    )
}

export default connect()(CreateLinkGroup);