import webpack from "webpack";
import {Configuration as DevServerConfiguration} from "webpack-dev-server";

export interface BuildPaths {
    entry: string,
    output: string,
    html: string,
    src: string
}

type BuildPlatform = "mobile" | "desktop"
type Port = DevServerConfiguration["port"]

export interface TEnv {
    mode: webpack.Configuration["mode"],
    port: Port,
    platform: BuildPlatform,
}

export interface BuildOptions {
    port?: Port,
    paths: BuildPaths,
    mode: webpack.Configuration["mode"],
    platform: BuildPlatform,

}

export function getIsDev(mode: webpack.Configuration["mode"]): boolean {
    return mode !== "production"
}