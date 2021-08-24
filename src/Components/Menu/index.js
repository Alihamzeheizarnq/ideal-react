import Nestable from 'react-nestable';
import 'react-nestable/dist/styles/index.css';
import ItemMenu from './ItemMenu';
import breadcrumb from '../../breadcrub';
import Breadcrumb from '../Partials/Breadcrumb';
import { StyleRoot } from 'radium';
import animate from '../Partials/animate';
import CreateMenu from './CreateMenu';
import { connect } from 'react-redux';
import PostCategory from '../../Api/PostCategory';
import actions from '../../actions';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import Menu from '../../Api/Menu';

function Index(props) {

    useEffect(() => {
        Menu.ListMenu(data => {
            console.log(data)
            props.dispatch(actions.ListMenu(data.data))

        })
    }, []);


    const renderItem = ({ item }) => <ItemMenu key={item.id} {...item} />;
    
    const handleItem = ({ items }) => {
        Menu.SortMenu(items, data => {
            props.dispatch(actions.ListMenu(items))
        })
        toast.success('ویرایش موفق!')

    };


    let header = breadcrumb('menus.index')
    return (
        <>
            <Breadcrumb header={header} />
            <StyleRoot>

                <div className="content" style={animate.bounce}>
                    <CreateMenu />
                    <Nestable
                        items={props.menus}
                        renderItem={renderItem}
                        onChange={handleItem}
                    />
                </div>
            </StyleRoot>

        </>
    );




}

let mapStateToProps = state => ({
    menus: state.menus.menus
})
export default connect(mapStateToProps)(Index);