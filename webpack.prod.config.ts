import * as path from "path";
import * as webpack from "webpack";
import baseConfig from "./webpack.base.config";
import * as merge from "webpack-merge";

const prodOutputDir: string = "prodDist";

const prodConfig: webpack.Configuration = {
    mode: "production",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, prodOutputDir)
    }
};

const config: webpack.Configuration = merge(baseConfig, prodConfig);

export default config;
