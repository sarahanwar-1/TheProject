const MiniCssExtractPlugin = require("mini-css-extract-plugin"),
      TerserPlugin = require("terser-webpack-plugin"),
      path = require("path"),
      common = require("./reko2/webpack.common.js");
const { merge } = require("webpack-merge"),
      CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = merge(common, {
    mode: "production",
    devtool: "hidden-source-map", // Production source map for debugging
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
            },
        ]
    },
    output: {
        filename: 'bundle.[contenthash].js', // Add contenthash for caching
        path: path.resolve(__dirname, 'dist'),
        libraryTarget: 'var',
        library: 'Client',
        clean: true, // Clean dist folder before production build
    },
    optimization: {
        minimize: true, // Enable minification for production
        minimizer: [
            new CssMinimizerPlugin(),
            new TerserPlugin(), // Add Terser for JS minification
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'style.[contenthash].css' // Add contenthash to CSS for better caching
        })
    ]
})
