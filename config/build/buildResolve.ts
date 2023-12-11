import webpack from "webpack";
import {BuildOptions} from "./types/types";

export function buildResolve(options: BuildOptions): webpack.Configuration["resolve"] {
    return {
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
            "@": options.paths.src
        }
    }
}