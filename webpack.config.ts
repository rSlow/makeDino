import webpack from "webpack"
import {buildWebpack} from "./config/build/buildWebpack";
import {TEnv} from "./config/build/types/types";
import path from "path";


export default (env: TEnv): webpack.Configuration => {
    return buildWebpack({
        mode: env.mode ?? "production",
        port: env.port ?? 3000,
        paths: {
            entry: path.resolve(__dirname, "src", "index.tsx"),
            output: path.resolve(__dirname, "build"),
            html: path.resolve(__dirname, "public", "index.html"),
            src: path.resolve(__dirname, "src")
        },
        platform: env.platform ?? "desktop"
    })
}
