import { useState } from "react";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import actions from "../../actions";
import Menu from "../../Api/Menu";

function CreateMenu(props) {


    let [title, setTitle] = useState('');
    let [link, setLink] = useState('');
    let [type, setType] = useState('dynumic');

    let handelForm = (e) => {
                e.preventDefault();
                let url = link;
                if(type != 'dynumic'){
                    url = '#';
                }

         Menu.CreateMenu(title , url , type, data => {
            props.dispatch(actions.CraeteMenu(data.data.id , data.data.title , data.data.link , data.data.type));
            toast.success(' منو با موفیقت ایجاد شد');
            setTitle('');
            setLink('');

        })

    }

    return (
        <form className="form-inline mb-4" onSubmit={e => { handelForm(e) }}>

            <input type="text"
                className={`form-control mb-2 ml-2 mr-sm-2 mb-sm-0`}
                id="example-if-email"
                name="example-if-email"
                placeholder="عنوان منو را وارد کنید  "
                onChange={e => setTitle(e.target.value)}
                value={title}

            />
         
         {
             type == 'dynumic' ? (
                <input type="text" 
                style={{direction : 'ltr'}}
                className={`form-control mb-2 ml-2 mr-sm-2 mb-sm-0`}
                id="example-if-email"
                name="example-if-email"
                placeholder="لینک منو را وارد کنید  "
                onChange={e => setLink(e.target.value)}
                value={link}

            />
             ) : ''
         }

            <select
                className={`mb-0 ml-2 custom-select`}
                id="example-if-email"
                name="type"
                placeholder="نوع منو را انتخاب کنید"
                onChange={e => setType(e.target.value)}
                value={type}

            >
                <option className="mr-4" value="dynumic">معمولی</option>
                <option className="mr-4" value="post">وبلاگ (ثابت)</option>


            </select>
            <button type="submit" className="btn btn-primary mt-2 m-md-0">افزودن</button>
        </form>
    )
}

export default connect()(CreateMenu);