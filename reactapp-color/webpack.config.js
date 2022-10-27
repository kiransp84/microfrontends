const path = require('path');
console.log('Hello',__dirname);
module.exports = {
    entry: path.resolve(__dirname,'src/colors.js'),
    output :{
        filename: 'colors.js',
        path : path.resolve(__dirname,'dist')
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
        static: path.join(__dirname, 'public/'),
        devMiddleware : {            
            publicPath : '/dist/'
        },
        port:3000,
        hot:"only"
    }
}