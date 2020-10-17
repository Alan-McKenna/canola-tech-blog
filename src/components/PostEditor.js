import React from "react";
import EditorJs from "react-editor-js";

import { EDITOR_JS_TOOLS } from "../editorConstants";

function PostEditor({ setEditorInstance }) {
    return (
        <>
        <EditorJs
            instanceRef={instance => setEditorInstance(instance)}
            tools={EDITOR_JS_TOOLS}
            data={{
            blocks: [],
            }}
        />
        </>
    );
}


export default PostEditor;