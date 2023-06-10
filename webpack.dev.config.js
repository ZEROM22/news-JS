const path = require('path');

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.resolve(__dirname, './dist'), //TODO: вернуть contentBase: path.resolve(__dirname, '../dist'),
    },
};
