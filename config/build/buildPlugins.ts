import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions, getIsDev} from "./types/types";

export function buildPlugins({mode, paths}: BuildOptions): webpack.Configuration["plugins"] {
    const isDev = getIsDev(mode)

    const plugins: webpack.Configuration["plugins"] = [
        new HtmlWebpackPlugin({
            template: paths.html
        }),
    ]
    if (isDev) {
        plugins.push(
            isDev && new webpack.ProgressPlugin(),
        )
    }
    if (!isDev) {
        plugins.push(
            new MiniCssExtractPlugin({
                filename: "css/[name].[fullhash].css",
                chunkFilename: "css/[id].[fullhash].css",
            }),
        )
    }

    return plugins
}