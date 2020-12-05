import {find_missing_seat} from "./seatfinder";
import { createReadStream } from "fs";
import csv from "csv-parser";
import path from "path";

const taken_seats: string[] = [];
createReadStream(path.join(__dirname, "input.txt"))
    .pipe(csv({ headers: false }))
    .on("data", (data) => {
        taken_seats.push(String(data[0]));
    })
    .on("end", () => {
        console.log(find_missing_seat(taken_seats));
    });