import { createReadStream } from "fs";
import csv from "csv-parser";
import path from "path";
import {calculate_total_jot_diff,find_all_arrangements} from "./jolts"

const data_sequence: number[] = [];
createReadStream(path.join(__dirname, "input.txt"))
    .pipe(csv({ headers: false }))
    .on("data", (data) => {
        data_sequence.push(Number(data[0]));
    })
    .on("end", () => {
        //console.log(data_sequence);
        console.log("total jolt diff : ", calculate_total_jot_diff(data_sequence))
        console.log("found sequences  : ", find_all_arrangements(data_sequence))
    });