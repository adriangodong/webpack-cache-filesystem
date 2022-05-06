const webpack = require("webpack");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

module.exports = (env, argv) => ({
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /(node_modules)/,
                enforce: "pre",
                loader: "ts-loader"
            }
        ]
    },
    entry: "./index.ts",
    plugins: [
        argv.mode === "development"
            ? new ForkTsCheckerWebpackPlugin({
                typescript: {
                    build: true,
                    mode: "write-dts",
                }
            })
            : new webpack.DefinePlugin({})
    ],
    cache: {
        type: "filesystem",
    },
    infrastructureLogging: {
        debug: /webpack\.cache/
    },
});
