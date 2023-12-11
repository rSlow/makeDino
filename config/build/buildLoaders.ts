import {ModuleOptions, RuleSetRule as Loader} from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions, getIsDev} from "./types/types";
import ReactRefreshTypeScript from "react-refresh-typescript"
export function buildLoaders({mode}: BuildOptions): ModuleOptions["rules"] {
    const isDev = getIsDev(mode)

    const cssInScssLoader: Loader = {
        loader: "css-loader",
        options: {
            modules: {
                localIdentName: isDev ? "[path][name]__[local]" : "[hash:base64]",
                localIdentHashDigestLength: 8
            }
        },
    }

    const imgLoader: Loader = {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
    }
    const svgLoader: Loader = {
        test: /\.svg$/,
        loader: '@svgr/webpack',
        options: {
            icon: true
        }
    }
    const scssLoader: Loader = {
        test: /\.(sc|sa|c)ss$/,
        use: [
            isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            cssInScssLoader,
            "sass-loader"
        ],

    }
    const tsLoader: Loader = {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
            loader: 'ts-loader',
            options: {
                transpileOnly: isDev,
                getCustomTransformers: () => ({
                    before: [isDev && ReactRefreshTypeScript()].filter(Boolean),
                })
            },
        },
    }
    return [
        svgLoader,
        imgLoader,
        scssLoader,
        tsLoader,
    ]
}