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
            createPost: "/create/blog/post",
            updatePost: "/update/blog/post",
            admin: "/admin",
            auth: "/auth",
            logout: "/logout",
        },
        navLinks: [
            { name: "Home", url: "/", protected: false },
            { name: "About", url: "/about", protected: false },
            { name: "Contact", url: "/contact", protected: false },
            { name: "Blog", url: "/blog", protected: false },
            { name: "Login", url: "/auth", protected: false },
            { name: "Logout", url: "/logout", protected: true },
            // for dev only
            { name: "Admin", url: "/admin", protected: true },
            { name: "Create Post", url: "/create/blog/post", protected: true },
        ]
    },
    production: {
        protocol: "http://",
        domain: "www.alanmckenna.site/canola-tech"
    }
}

export default config;
