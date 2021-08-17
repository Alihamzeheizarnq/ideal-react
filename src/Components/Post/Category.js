
import Nestable from 'react-nestable';
// import 'react-nestable/dist/styles/index.css';
function Category() {

    const items = [
        { id: 0, text: 'علی' },
        { id: 1, text: 'علی' },
        { id: 2, text: 'علی' },
        { id: 3, text: 'علی' },
     
        { id: 4, text: 'Lisa' }
    ];

    const renderItem = ({ item }) => { console.log(item);   return item.text};

    const Example = () => (
        <Nestable
            items={items}
            renderItem={renderItem}
        />
    )
    return (
        <>
            <div className="content content-full content-boxed" >


                <Example />

            </div>
        </>
    )
}


export default Category;