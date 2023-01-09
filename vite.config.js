const {resolve} = require("path");


export default {
    build: {
        rollupOptions: {
            input: {
                home: resolve(__dirname, "index.html"),
                login: resolve(__dirname, "login.html"),
                productInfo: resolve(__dirname, "productInfo.html"),
                products: resolve(__dirname, "products.html"),
                profile: resolve(__dirname, "profile.html"),
                register: resolve(__dirname, "register.html"),
            }
        }
    }
}
