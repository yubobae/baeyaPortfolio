const path =require('path');// 디렉토리의 위치를 반환해준다.
console.log(path.resolve(__dirname, 'dist/js'));
module.exports = {
    entry: {
        entry: './src/js/entry.js'
    },
    output: {
         filename: 'bundle.js',
         path: path.resolve(__dirname, 'dist/js')//__dirname 현재 폴더를 의미.
    },
    module:{
        rules: [{
            test: /\.js$/,
            include: [
                path.resolve(__dirname, 'src/js')
            ],
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options:{
                    presets: ['env']
                }
            }
        }]
    },
    devtool: 'source-map',
    mode: 'development'
};