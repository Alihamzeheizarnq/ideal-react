import Nestable from 'react-nestable';
import 'react-nestable/dist/styles/index.css';
import ItemCat from './ItemCategory';
import breadcrumb from './../../breadcrub';
import Breadcrumb from '../Partials/Breadcrumb';
import { StyleRoot } from 'radium';
import animate from './../Partials/animate';
import CreateCateory from './CreateCategory';
import { connect } from 'react-redux';
import PostCategory from '../../Api/PostCategory';
import actions from '../../actions';

function Category(props) {
  const renderItem = ({ item }) => <ItemCat key={item.id} {...item} />;
  const handleItem = ({items}) => { 
    PostCategory.SortPostCategory(items , data => {
        props.dispatch(actions.ListPostCategory(data))
    })
   };


  let header = breadcrumb('posts.category')
  return (
    <>
      <Breadcrumb header={header} />
      <StyleRoot>
        <div className="content" style={animate.bounce}>
          <CreateCateory />
          <Nestable
            items={props.post_category}
            renderItem={renderItem}
            onChange={handleItem}
          />
        </div>
      </StyleRoot>

    </>
  );




}

let mapStateToProps = state => ({
    post_category : state.post_category.categories
})
export default  connect(mapStateToProps)(Category);