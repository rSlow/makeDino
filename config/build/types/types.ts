import webpack from "webpack";
import {Configuration as DevServerConfiguration} from "webpack-dev-server";

export interface BuildPaths {
    entry: string,
    output: string,
    html: string,

}

export interface TEnv {
    mode: webpack.Configuration["mode"],
    port: DevServerConfiguration["port"]
}

export interface BuildOptions {
    port?: number,
    paths: BuildPaths,
    mode: webpack.Configuration["mode"]
}

export function getIsDev(mode: webpack.Configuration["mode"]): boolean {
    return mode !== "production"
}