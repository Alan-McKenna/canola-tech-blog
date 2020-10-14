const config = {
    development: {
        headerTitle: "canola-tech",
        blog_service: { 
            protocol: "http://",
            domain: "127.0.0.1:3001",
            get: {route: "/post", method: "GET" },
            post: {route: "/post", method: "POST" },
            put: {route: "/post", method: "PUT" },
            delete: {route: "/post", method: "DELETE" },
        },
        auth_service: { 
            protocol: "http://",
            domain: "127.0.0.1:5000",
            login: {route: "/token", method: "POST" },
            register: {route: "/user", method: "POST" },
            checkJwt: {route: "/token", method: "GET" },
        },
        routes: { 
            home: "/" ,
            about: "/about",
            contact: "/contact",
            blog:"/blog",
            post: "/blog/post",
            createPost: "/blog/post/create",
            admin: "/admin",
            auth: "/auth",
        },
        navLinks: [
            { name: "Home", url: "/" },
            { name: "About", url: "/about" },
            { name: "Contact", url: "/contact" },
            { name: "Blog", url: "/blog" },
            // for dev only
            { name: "Create Post", url: "/blog/post/create" },
            { name: "Admin", url: "/admin" },
        ]
    },
    production: {
        protocol: "http://",
        domain: "www.alanmckenna.site/canola-tech"
    }
}

export default config;
