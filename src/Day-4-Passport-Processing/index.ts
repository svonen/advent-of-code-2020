import fs from "fs";
import path from "path";
import {is_valid_document} from "./validation"



const all_ID_documents = fs
    .readFileSync(path.join(__dirname, "input.txt"),'utf-8')
    .split(/\n\s*\n/)   
    .map((arr) => arr.split(/\s/)
    .filter(filtered_arr => filtered_arr !== ""))
    .map((filtered_arr) => {
        const o: { [key: string]: string } = {};
        for (const pair of filtered_arr) {
            const [key, value] = pair.split(":");
            o[key] = value;
        }
        return o;
    });

    console.log(
        "valid passports in North Korea: ",
        all_ID_documents.filter((passport) => is_valid_document(passport, true, true))
            .length
    );