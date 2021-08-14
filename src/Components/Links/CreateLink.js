
import { useEffect, useState } from 'react';
import validator from '../fa';
import { toast } from 'react-toastify';
import { connect } from 'react-redux';
import actions from '../../actions';
import Links from '../../Api/Links';

function CreateLink(props) {


    useEffect(() => {
        if (!props.links.length) {
            Links.linkIndex((data) => {
                props.dispatch(actions.SetGropeLink(data.data));
            })
        }
    }, [])
    let [link, setlink] = useState('');
    let [title, setTitle] = useState('');
    let [group_id, setGroup_id] = useState('');


    let handelForm = (e) => {
        e.preventDefault()

        if (validator.allValid()) {
            Links.LinkOriginStore({ title, link, group_id }, (data) => {
                props.dispatch(actions.CreateLink(data.data.id, data.data.link, data.data.title, data.data.group_id))
                toast.success('عملیات موفق !')

                setlink('');
                setTitle('');
                setGroup_id('');
            })
        } else {
            for (const property in validator.errorMessages) {
                toast.error(validator.errorMessages[property]);
            }

        }

    }

    validator.purgeFields();

    return (
        <form className="form-inline mb-4" onSubmit={e => { handelForm(e) }}>
            {validator.message('title', title, 'required|min:3')}
            {validator.message('link', link, 'required|min:3')}
            {validator.message('group_id', group_id, 'required')}

            <input type="text"
                className={`form-control mb-2 ml-2 mr-sm-2 mb-sm-0 ${validator.fieldValid('title') ? '' : 'is-invalid'}`}
                id="example-if-email"
                name="title"
                placeholder=" عنوان لینک را وارد کنید"
                onChange={e => setTitle(e.target.value)}
                value={title}

            />

            <input type="text"
                className={`form-control mb-2 ml-2 mr-sm-2 mb-sm-0 ${validator.fieldValid('link') ? '' : 'is-invalid'}`}
                id="example-if-email"
                name="link"
                placeholder=" لینک  را وارد کنید"
                onChange={e => setlink(e.target.value)}
                value={link}

            />

            <select
                className={`mb-0 ml-2 custom-select ${validator.fieldValid('group_id') ? '' : 'is-invalid'}`}
                id="example-if-email"
                name="group_id"
                placeholder="سرگروه را وارد کنید"
                onChange={e => setGroup_id(e.target.value)}
                value={group_id}

            >
                <option value="">انتخاب کنید</option>
                {
                    props.links.map(item => (<option className="mr-4" key={item.id} value={item.id}>{item.name}</option>))
                }

            </select>

            <button type="submit" className="btn btn-primary">افزودن</button>
        </form>
    )
}


let MapStateToProps = (state) => {
    return {
        links: state.links
    }
}
export default connect(MapStateToProps)(CreateLink);