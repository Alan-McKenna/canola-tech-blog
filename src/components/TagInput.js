import React, { useState } from 'react';
import { WithContext as ReactTags } from 'react-tag-input';

    
const _tags = [
    { id: "Thailand", text: "Thailand" },
    { id: "India", text: "India" }
]
const _suggestions = [
    { id: 'USA', text: 'USA' },
    { id: 'Germany', text: 'Germany' },
    { id: 'Austria', text: 'Austria' },
    { id: 'Costa Rica', text: 'Costa Rica' },
    { id: 'Sri Lanka', text: 'Sri Lanka' },
    { id: 'Thailand', text: 'Thailand' }
]

const KeyCodes = {
    comma: 188,
    enter: 13,
};
  
const delimiters = [KeyCodes.comma, KeyCodes.enter];


function TagInput() {
    const [tags, setTags] = useState(_tags)
    const [suggestions, setSuggestions] = useState(_suggestions)
    
    return (
        <div>
            <ReactTags tags={tags}
                suggestions={suggestions}
                handleDelete={this.handleDelete}
                handleAddition={this.handleAddition}
                handleDrag={this.handleDrag}
                delimiters={delimiters} />
        </div>
    );
  }
  
export default TagInput;
