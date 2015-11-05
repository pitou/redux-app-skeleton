var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config.dev');

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true,
    stats: { colors: true },
    //stats: true,
    progress: true,
    debug: true
}).listen(3001, '0.0.0.0', function (err) {
    if (err) { console.log(err); }
    console.log('WebpackDevServer: listening at localhost:3001');
});
