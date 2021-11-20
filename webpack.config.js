const webpack = require("webpack");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

module.exports = (env, argv) => ({
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /(node_modules)/,
                enforce: "pre",
                use: [
                    {
                        loader: "ts-loader",
                        options: {
                            transpileOnly: argv.mode === "development",
                        }
                    }
                ]
            }
        ]
    },
    entry: "./index.ts",
    plugins: [
        argv.mode === "development" ? new ForkTsCheckerWebpackPlugin() : new webpack.DefinePlugin({})
    ],
    cache: {
        type: "filesystem",
    },
    infrastructureLogging: {
        debug: /webpack\.cache/
    },
});
