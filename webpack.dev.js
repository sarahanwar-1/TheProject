const common = require("./webpack.common.js"),
      { merge } = require("webpack-merge"),
      path = require("path");

module.exports = merge(common, {
    mode: "development",
    devtool: "source-map", // Retain the source map for debugging in development
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: ["style-loader", "css-loader", "sass-loader"]
            }
        ]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        libraryTarget: 'var',
        library: 'Client',
        clean: true, // Ensure dist folder is cleaned for each build
    },
    optimization: {
        minimizer: [
            new CssMinimizerPlugin(), // Add minimizer for CSS in development
        ],
        minimize: false, // Turn off minification for development (for faster builds)
    },
})
