const config = {
    development: {
        blog_service: { 
            protocol: "http://",
            domain: "127.0.0.1:3001",
            get: "/post" ,
            post: "/post",
            put: "/post",
            delete:"/post",
        },
        auth_service: { 
            protocol: "http://",
            domain: "127.0.0.1:5000",
            login: "/" ,
            register: "/",
            checkJwt: "/",
        }
    },
    production: {
        protocol: "http://",
        domain: "www.alanmckenna.site/canola-tech"
    }
}

export default config;