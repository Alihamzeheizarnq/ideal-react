import { useState } from "react";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import actions from "../../actions";
import PostCategory from "../../Api/PostCategory";

function CreateCateory(props) {


    let [category, setCategory] = useState('');
    let [slug, setSlug] = useState('');


    let handelForm = (e) => {
        e.preventDefault();
        PostCategory.CreatePostCategory(category, slug, data => {
            props.dispatch(actions.CreatePostCategory(data.id, data.name, data.slug));
            toast.success('دسته بندی با موفیقت ایجاد شد');
            setCategory('');
            setSlug('');

        })

    }

    return (
        <form className="form-inline mb-4" onSubmit={e => { handelForm(e) }}>

            <input type="text"
                className={`form-control mb-2 ml-2 mr-sm-2 mb-sm-0`}
                id="example-if-email"
                name="example-if-email"
                placeholder="نام دسته بندی  را وارد کنید"
                onChange={e => setCategory(e.target.value)}
                value={category}

            />

            <input type="text"
                className={`form-control  mb-2 ml-2 mr-sm-2 mb-sm-0`}
                id="example-if-email"
                name="example-if-email"
                placeholder="آدرس (slug)"
                onChange={e => setSlug(e.target.value)}
                value={slug}

            />

            <button type="submit" className="btn btn-primary">افزودن</button>

        </form>
    )
}

export default connect()(CreateCateory);