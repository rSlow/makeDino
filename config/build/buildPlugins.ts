import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions, getIsDev} from "./types/types";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import ReactRefreshPlugin from "@pmmmwh/react-refresh-webpack-plugin";

// import {BundleAnalyzerPlugin} from "webpack-bundle-analyzer";

export function buildPlugins({mode, paths}: BuildOptions): webpack.Configuration["plugins"] {
    const isDev = getIsDev(mode)

    const plugins: webpack.Configuration["plugins"] = [
        new HtmlWebpackPlugin({
            template: paths.html
        }),
        new webpack.DefinePlugin({}),
    ]
    if (isDev) {
        plugins.push(
            new webpack.ProgressPlugin(),
            new ForkTsCheckerWebpackPlugin(),
            new ReactRefreshPlugin()
        )
    }
    if (!isDev) {
        plugins.push(
            new MiniCssExtractPlugin({
                filename: "css/[name].[fullhash].css",
                chunkFilename: "css/[id].[fullhash].css",
            }),
            // new BundleAnalyzerPlugin()
        )
    }

    return plugins
}