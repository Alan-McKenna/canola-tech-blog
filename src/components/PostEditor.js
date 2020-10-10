import React, { useState } from "react";
import EditorJs from "react-editor-js";
import { useHistory } from "react-router-dom";

import BlogPostService from '../services/blogPost.service.js'

import { routes } from "../constants";
import { button } from "../styles";
import { EDITOR_JS_TOOLS } from "../editorConstants";


const styles = {
    submit: button,
    row: {
        paddingTop: 10,
    }
}


function RichTextEditor() {
    const [ editorInstance, setEditorInstance ] = useState("");
    
    // const history = useHistory();

    async function handleSave() {
        const savedData = await editorInstance.save();
        if(BlogPostService.save(savedData)) {
            // history.push(routes.home);
        }
    }


    return (
        <>
        <EditorJs
            instanceRef={instance => setEditorInstance(instance)}
            tools={EDITOR_JS_TOOLS}
            data={{
            blocks: [],
            }}
        />

        <div className="row"
            onClick={() => handleSave()}
            style={styles.row}
        >
            <input type="submit" value="Save" style={styles.submit}/>
        </div>

        </>
    );
}


export default RichTextEditor;