// eslint-disable-next-line @typescript-eslint/no-var-requires, @typescript-eslint/no-unused-vars
const webpack = require("webpack");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");
// eslint-disable-next-line @typescript-eslint/no-var-requires, @typescript-eslint/no-unused-vars
const CopyPlugin = require("copy-webpack-plugin");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const HtmlWebpackPlugin = require("html-webpack-plugin");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
// eslint-disable-next-line @typescript-eslint/no-var-requires

/** @type {import("webpack").Configuration} */
const config = {
    entry: "./src/index.ts",
    //mode: "development",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].[contenthash].js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: "babel-loader",
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 1
                        }
                    },
                    "postcss-loader"
                ]
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    "sass-loader",
                ],
            },
            {
                test: /\.ts(x)?$/,
                loader: "ts-loader",
                exclude: /node_modules/
            },
            {
                test: /\.png$/,
                type: "asset/resource",/*
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            mimetype: "image/png",
                        }
                    }
                ]*/
            },
            {
                test: /\.svg$/,
                use: "file-loader"
            },
            {
                test: /\.(woff(2)?|tff|otf)$/i,
                type: "asset/resource"
            }
        ]
    },
    plugins: [
        /* new CopyPlugin({
            patterns: [{ from: "src/index.html" }],
        }), */
        new HtmlWebpackPlugin({
            template: "src/index.ejs",
            filename: "index.html",
            title: "KAHPM",
            inject: true
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin(),
        new BundleAnalyzerPlugin({
            analyzerMode: "static",
            openAnalyzer: false,
        }),
    ],
    resolve: {
        extensions: [
            ".tsx",
            ".ts",
            ".js"
        ]
    },
    optimization: {
        runtimeChunk: "single",
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendors",
                    chunks: "all"
                }
            }
        },
        minimize: true,
    },

    /** @type {import("webpack-dev-server").Configuration} */
    devServer: {
        static: {
            directory: path.join(__dirname, "public"),
        },
        devMiddleware: {
            writeToDisk: true,
        },
        compress: true,
        port: 9000,
        hot: true,

        // https: true,
    },
};

module.exports = config;