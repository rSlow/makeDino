import {ModuleOptions, RuleSetRule as Loader} from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions, getIsDev} from "./types/types";

export function buildLoaders({mode}: BuildOptions): ModuleOptions["rules"] {
    const isDev = getIsDev(mode)

    const scssLoader: Loader = {
        test: /\.(sc|sa|c)ss$/,
        use: [
            isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            "css-loader",
            "sass-loader"
        ],

    }
    const tsLoader: Loader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }
    return [
        tsLoader,
        scssLoader
    ]
}