import React, { Component } from "react";
import EditorJs from "react-editor-js";
import { useHistory } from "react-router-dom";

import BlogPostService from '../services/blogPost.service'

import { routes } from "../constants";
import { colors } from "../styles";
import { EDITOR_JS_TOOLS } from "../editorConstants";

const styles = {
    submit: {
        backgroundColor: colors.red,
        color: 'white',
        padding: '12px 20px',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
    },
    row: {
        paddingTop: 10,
    }
}


class RichTextEditor extends Component {

    async handleSave() {
        let history = useHistory();
        const savedData = await this.editorInstance.save();
        if(BlogPostService.save(savedData)) {
        history.push(routes.home);
        }
    }


    render() {
        return (
        <>
        <EditorJs
            instanceRef={instance => this.editorInstance = instance}
            tools={EDITOR_JS_TOOLS}
            data={{
            blocks: [],
            }}
        />

        <div className="row"
            onClick={() => this.handleSave()}
            style={styles.row}
        >
            <input type="submit" value="Save" style={styles.submit}/>
        </div>

        </>
        );
    }
}


export default RichTextEditor;