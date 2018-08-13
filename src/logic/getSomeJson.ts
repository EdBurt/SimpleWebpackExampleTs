import * as file from "../../staticFiles/neo.json";
import * as queryString from "querystring";

const getJson: Function = () => {
    console.log(file);
    console.log(queryString.stringify(file));
};

export default getJson;
