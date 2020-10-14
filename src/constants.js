
// For Development
export const lorum = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

const blogPostSummary = {
    id: 1,
    title: "Portfolio Website for Backend Developers",
    author: "Alan McKenna",
    date: "October 7, 2020",
    tags: ["Backend", "Career"],
    summary: "People often say “If you’re a developer you NEED to have a website”. I somewhat agree with that, however the reality is that most developers are not frontend engineers. So how do you do it? I started out as a purely backend developer, making RESTful API’s, interacting with databases, authentication and all that fun stuff. […]"
}

export const about = {
    title: "About",
    content: lorum,
}

export const contact = {
    title: "Contact"
}

export const home = {
    title: "Home",
    mostRecentBlogPosts: [
        blogPostSummary,
        blogPostSummary,
        blogPostSummary
    ]
}

export const blog = {
    title: "Blog",
    blogPosts: [
        blogPostSummary,
        blogPostSummary,
        blogPostSummary,
        blogPostSummary,
        blogPostSummary,
        blogPostSummary,
        blogPostSummary,
        blogPostSummary,
        blogPostSummary,
        blogPostSummary
    ]
}

export const createPost = {
    title: "Create Post",
    
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