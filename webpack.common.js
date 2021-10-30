const path = require('path'); // path é o caminho da raiz do projeto
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // plugin para limpar o diretório de build

module.exports = { // exporta o objeto de configuração
    entry: './src/main/index.tsx', // arquivo de entrada
    output: { // configuração de saída
        path: path.join(__dirname, './dist'), // o path.join é para juntar os caminhos
        filename: 'bundle-[hash].js', // nome do arquivo de saída com hash, o hash é gerado automaticamente
        publicPath: '/', // caminho para o webpack dev server
    },
    resolve: { // responsável por mapear as extensões dos arquivos
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.scss'], // extensões  de JS e TS
        alias: { // alias para o caminho do projeto
            '@': path.join(__dirname, 'src'),
        }
    },
    plugins: [ // plugins para o webpack
        new CleanWebpackPlugin(), // plugin para limpar o diretório de build
    ]
}