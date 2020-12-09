import { createReadStream } from "fs";
import csv from "csv-parser";
import path from "path";
import {find_invalid,find_weaknes} from "./sequence"

const data_sequence: number[] = [];
createReadStream(path.join(__dirname, "input.txt"))
    .pipe(csv({ headers: false }))
    .on("data", (data) => {
        data_sequence.push(Number(data[0]));
    })
    .on("end", () => {
        //console.log(data_sequence);
        console.log("invalid : ", find_invalid(data_sequence))
        console.log("min/max of found sequence  : ", find_weaknes(data_sequence,258585477))
    });