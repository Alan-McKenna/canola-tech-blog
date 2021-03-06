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
            getPublicKey: {route: "/key", method: "GET" },
        },
        contact_service: { 
            protocol: "http://",
            domain: "alanmckenna.site",
            send: {route: "/send", method: "POST" },
        },
        routes: { 
            home: "/" ,
            about: "/about",
            contact: "/contact",
            blog:"/blog",
            post: "/blog/post",
            createPost: "/create/blog/post",
            updatePost: "/update/blog/post",
            adminPosts: "/admin/blog/posts",
            admin: "/admin",
            auth: "/auth",
            logout: "/logout",
            profile: "/profile",
        },
        navBarLinks: [
            { name: "Home", url: "/", protected: false },
            { name: "About", url: "/about", protected: false },
            { name: "Contact", url: "/contact", protected: false },
            { name: "Blog", url: "/blog", protected: false },
            { name: "Profile", url: "/profile", protected: true },
            // for dev only
            { name: "Admin", url: "/admin", protected: true },
        ],
        adminToolbarLinks: [
            { name: "Dashboard", url: "/admin" },
            { name: "Posts", url: "/admin/blog/posts" },
            { name: "New Post", url: "/create/blog/post" },
        ]
    },
    production: {
        protocol: "http://",
        domain: "www.alanmckenna.site/canola-tech"
    }
}

export default config;
