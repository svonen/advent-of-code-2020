import {count_trees} from "./trajectory";
import { createReadStream } from "fs";
import csv from "csv-parser";
import path from "path";

const map: string[] = [];
createReadStream(path.join(__dirname, "input.txt"))
    .pipe(csv({ headers: false }))
    .on("data", (data) => {
        map.push(String(data[0]));
    })
    .on("end", () => {
        console.log(map[10][30]);
        console.log("trees: ",count_trees(map));
    });
