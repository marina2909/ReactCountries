var webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    output: {
    	path: 'dist',
        filename: 'bundle.js'
    },
    module: {
    	loaders: [
    		{
    			test: /\.js$/,
    			exclude: /(node_modules)/,
    			loader: 'babel-loader'
    		},
            {
                test: /\.json$/,
                exclude: /(node_modules)/,
                loader: 'json-loader'
            },
            {   test: /\.css$/, 
                loader: 'style-loader!css-loader' 
            },
            {   test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, 
                loader: "file-loader" 
            },
            {   test: /\.(woff|woff2)$/, 
                loader:"url-loader?prefix=font/&limit=5000" },
            {   test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, 
                loader: "url-loader?limit=10000&mimetype=application/octet-stream" },
            {   test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, 
                loader: "url-loader?limit=10000&mimetype=image/svg+xml" 
            }
    	]
    }
};

