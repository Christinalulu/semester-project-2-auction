const {resolve} = require('path');

export default {
   build: {
       rollupOptions: {
           input: {
            home: resolve(__dirname, 'index.html'),
            register: resolve(__dirname, 'register.html'),
            login: resolve(__dirname, 'login.html'),
            products: resolve(__dirname, 'products.html'),
            productInfo: resolve(__dirname, 'productInfo.html'),
           },
       },
   },
};
