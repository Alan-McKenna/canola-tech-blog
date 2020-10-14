import React, { useState } from "react";
import EditorJs from "react-editor-js";
import Loader from 'react-loader-spinner'

import BlogPostService from '../services/blogPost.service.js'

import { button } from "../styles";
import { EDITOR_JS_TOOLS } from "../editorConstants";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

const styles = {
    submit: button,
    row: {
        paddingTop: 10,
    }
}


function PostEditor({ title }) {
    const [ editorInstance, setEditorInstance ] = useState("");
    const [ isSaving, setIsSaving ] = useState(false);
    
    // const history = useHistory();

    async function handleSave() {
        setIsSaving(true)
        const savedData = await editorInstance.save();
        const post = {
            title: title,
            tags: [],
            blocks: savedData.blocks,
        }
        if(await BlogPostService.save(post)) {
            setIsSaving(false)
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
        {isSaving
        ?   <Loader type="BallTriangle" color="#00BFFF" height={80} width={80} />
        
        :   <div className="row"
                onClick={() => handleSave()}
                style={styles.row}
            >
                <input type="submit" value="Save" style={styles.submit}/>
            </div>
        }
        </>
    );
}


export default PostEditor;