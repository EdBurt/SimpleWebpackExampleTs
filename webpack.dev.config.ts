import * as path from "path";
import * as webpack from "webpack";
import baseConfig from "./webpack.base.config";
import * as merge from "webpack-merge";

const devOutputDir: string = "dist";

const devConfig: webpack.Configuration = {
    mode: "development",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, devOutputDir)
    }
};

const config: webpack.Configuration = merge(baseConfig, devConfig);

export default config;
