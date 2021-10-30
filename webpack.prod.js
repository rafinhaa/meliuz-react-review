const { merge } = require('webpack-merge'); // Serve para combinar configurações dos arquivos webpack.common.js
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // O mini-css-extract-plugin é um plugin que extrai o css do js
const HtmlWebpackPlugin = require('html-webpack-plugin'); // o html-webpack-plugin vem do próprio webpack, e gerencia os modulos de Bundle do html
const common  = require('./webpack.common.js'); // Importa o arquivo webpack.common.js

module.exports = merge(common,{
    mode: 'production', // Define o modo de produção
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
                        loader: MiniCssExtractPlugin.loader, // Extrai o css do js
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
    externals: {
        react : 'React',
        'react-dom' : 'ReactDOM',
        'react-router-dom' : 'ReactRouterDOM',
    },
    plugins: [
        new HtmlWebpackPlugin({ // Define o arquivo que será gerado
            template: './template.prod.html', // Define o arquivo que será usado como template
            overlay: false, // o Overlay é responsável por mostrar o erro no navegador
        }),
        new MiniCssExtractPlugin({ // Define o arquivo que será gerado
            filename: "bundle-[hash].css", // Define o nome do arquivo que será gerado
        }),
    ],
});