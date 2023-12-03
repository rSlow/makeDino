import {buildPlugins} from "./buildPlugins";
import {buildLoaders} from "./buildLoaders";
import {buildDevServer} from "./buildDevServer";
import {buildResolve} from "./buildResolve";
import webpack from "webpack";
import {BuildOptions, getIsDev} from "./types/types";

export function buildWebpack(options: BuildOptions): webpack.Configuration {
    const isDev = getIsDev(options.mode)

    return {
        mode: options.mode,
        entry: options.paths.entry,
        output: {
            path: options.paths.output,
            clean: true,
            filename: "bundle.[fullhash].js"
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(options)
        },
        resolve: buildResolve(),
        devServer: isDev ? buildDevServer(options) : undefined,
        devtool: isDev ? "inline-source-map" : false
    }
}