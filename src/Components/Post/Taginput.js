import React from 'react';
import { WithContext as ReactTags } from 'react-tag-input';

const KeyCodes = {
    comma: 188,
    enter: [10, 13],
};

const delimiters = [...KeyCodes.enter, KeyCodes.comma];

class Input extends React.Component {
    constructor(props) {
        super(props);

        this.state = props.tags
        this.handleDelete = this.handleDelete.bind(this);
        this.handleAddition = this.handleAddition.bind(this);
        this.handleDrag = this.handleDrag.bind(this);
    }

    handleDelete(i) {
        const { tags } = this.state;
        this.setState({
            tags: tags.filter((tag, index) => index !== i),
        });
        this.props.handleTag(tags.filter((tag, index) => index !== i))

    }

    handleAddition(tag) {
        this.setState(state => ({ tags: [...state.tags, tag] }));
        this.props.handleTag([...this.state.tags, tag])
    }

    handleDrag(tag, currPos, newPos) {
        const tags = [...this.state.tags];
        const newTags = tags.slice();

        newTags.splice(currPos, 1);
        newTags.splice(newPos, 0, tag);

        // re-render
        this.setState({ tags: newTags });
    }

    render() {
        const { tags, suggestions } = this.state;
        return (
            <div className="col-md-6 form-group">
                <label htmlFor="dm-post-add-title">کلمات کلیدی </label>

                <ReactTags tags={tags}
                    suggestions={suggestions}
                    autofocus={false}
                    handleDelete={this.handleDelete}
                    handleAddition={this.handleAddition}
                    handleDrag={this.handleDrag}
                    delimiters={delimiters}
                    placeholder='کلمات کلیدی'
                    classNames={{
                        tags: 'tagsClass',
                        tagInputField: 'form-control w-100 text-right',
                        selected: 'select-btn',
                        tag: 'tagClass',
                        remove: 'removeClass',
                        suggestions: 'suggestionsClass ',
                        activeSuggestion: 'activeSuggestionClass list-group'
                    }}
                />
            </div>
        )
    }
};
export default Input;