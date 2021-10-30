const { merge } = require('webpack-merge'); // Serve para combinar configurações dos arquivos webpack.common.js
const HtmlWebpackPlugin = require('html-webpack-plugin'); // o html-webpack-plugin vem do próprio webpack, e gerencia os modulos de Bundle do html
const common  = require('./webpack.common.js'); // Importa o arquivo webpack.common.js

module.exports = merge(common,{
    mode: 'development', // Define o modo de desenvolvimento
    module: { // Configurações do webpack para o modo de desenvolvimento
        rules: [
            {
                test: /\.ts(x?)$/, // Define o tipo de arquivo que será tratado que é tsx, ts
                loader: 'ts-loader', // Define o loader que será usado
                exclude: /node_modules/, // Define o diretório que não será tratado
            },
            {
                test : /\.s(a|c)ss$/, // Define o tipo de arquivo que será tratado que é sass, scss
                use: [ // Define o loader que será usado
                    {
                        loader: 'style-loader', // o style-loader é o responsável minificar o css
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true, // Define que será usado o css-loader para tratar o arquivo
                        }
                    },
                    {
                        loader: 'sass-loader', // Usa o sass-loader para tratar o arquivo sass
                    }
                ]
            },
            {
                test: /\.css$/, // Define o tipo de arquivo que será tratado que é css
                use: [ 'style-loader', 'css-loader' ],
            },
        ],
    },
    devtool: 'inline-source-map', // Define o tipo de mapa de código que será gerado
    devServer: {
        static: './public', // o Alias está permitindo só passar o nome do arquivo, sem o caminho
        historyApiFallback: true, // Define que o servidor irá redirecionar para o arquivo index.html
        port: 3000, // Define a porta que o servidor irá rodar
    },
    plugins: [
        new HtmlWebpackPlugin({ // Define o arquivo que será gerado
            template: './template.dev.html', // Define o arquivo que será usado como template
            overlay: false, // o Overlay é responsável por mostrar o erro no navegador
        }),
    ],
});