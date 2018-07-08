const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {  
    entry: {  
        app: './js/index.js'  
  },  

    output: {  
        path: path.resolve(__dirname, 'dist'),  
        filename: 'bundle.js'  
  },
  module: {
    rules: [{
        test: /\.scss$/,
        use: [
            "style-loader", // creates style nodes from JS strings
            "css-loader", // translates CSS into CommonJS
            "sass-loader" // compiles Sass to CSS
        ]
    }]
},
plugins: [
    new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: "[name].css",
        chunkFilename: "[id].css"
    })
]
};
