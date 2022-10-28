const path = require('path');

module.exports = {
    entry: path.resolve(__dirname,'src/entrypoint.js'),
    output :{
        publicPath:'',
        filename: 'colors.js',
        path : path.resolve(__dirname,'dist'),
        libraryTarget : 'system'
    },
    devtool : 'source-map',
    mode:'development',
    module : {
        rules : [
            {
                test: /\.js$/,
                exclude: /node-modules/,
                use:['babel-loader']
            }
        ]
    },
    devServer:{        
        port:3000,
        hot:"only",
        headers: {
            'Access-Control-Allow-Origin' : '*'
        }
    }
}