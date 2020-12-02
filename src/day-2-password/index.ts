import {FindValidPasswords, FindValidPasswords2} from "./passwordpolicy";
import { createReadStream } from "fs";
import csv from "csv-parser";
import path from "path";

const corrupt_password: string[] = [];
createReadStream(path.join(__dirname, "input.txt"))
    .pipe(csv({ headers: false }))
    .on("data", (data) => {
        corrupt_password.push(String(data[0]));
    })
    .on("end", () => {
        console.log(corrupt_password[1]);
        console.log("2n: ", FindValidPasswords2(corrupt_password));
    });
