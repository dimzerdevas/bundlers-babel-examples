const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        static: {
            directory: path.join(__dirname, './'), // Path to your public folder
        },
        // compress: true,
        // port: 9000, // Choose any available port
    },
   mode: "production" // Either 'development' or 'production'
};