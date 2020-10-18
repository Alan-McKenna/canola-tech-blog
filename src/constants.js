
// For Development
export const lorum = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

export const about = {
    title: "About",
    content: lorum,
}

export const contact = {
    title: "Contact"
}

export const home = {
    title: "Home"
}

export const blog = {
    title: "Blog",
}

export const createPost = {
    title: "Create Post",
}

export const updatePost = {
    title: "Update Post",
}

export const adminDashboard = {
    title: "Update Post",
}

export const adminPostsView = {
    title: "Posts",
}

export const blogPost = {
    postContent: {
        time: 1602324061268, 
        version: "2.18.0",
        blocks: [
            {
                type: "list",
                data: [
                    "element1",
                    "element2"
                ]
            },
            {
                type: "paragraph",
                data: {
                    text: "text input"
                }
            },
            {
                type: "table",
                data: [
                    [ "column1", "column2" ],
                    [ "field1", "field2" ]
                ]
            },
            {
                type: "warning",
                data: {
                    title: "warning",
                    message: "warning message"
                }
            },
            {
                type: "code",
                data: {
                    code: "code input"
                }
            },
            {
                type: "raw",
                data: {
                    html: "html"
                }
            },
            {
                type: "header",
                data: {
                    text: "header",
                    level: 2
                }
            },
            {
                type: "quote",
                data: {
                    text: "quote",
                    caption: "quote caption",
                    alignment: "left"
                }
            },
            {
                type: "delimiter",
                data: {}
            },
            {
                type: "linkTool",
                data: {
                    link: "",
                    meta: {}
                }
            },
        ],
    }
    
}