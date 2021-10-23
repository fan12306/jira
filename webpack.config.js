const resolve = dir => require('path').join(__dirname, dir);
module.exports = {
    resolve: {
        extensions: ['.ts', '.tsx', '.js', 'config.js', '.json'],
        alias: {
            "@": resolve('src')
        }
    }
}