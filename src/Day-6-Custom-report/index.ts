import fs from "fs";
import path from "path";
import {count_answers2} from "./custom-report"



const allcollected_answers = fs
    .readFileSync(path.join(__dirname, "input.txt"),'utf-8')
    .split(/\n\s*\n/)   
    .map((arr) => arr.split(/\s/)
    .filter(filtered_arr => filtered_arr !== ""))

    console.log(
        "valid passports in North Korea: ", count_answers2(allcollected_answers)
        //all_ID_documents.filter((passport) => is_valid_document(passport, true, true)).length
    );