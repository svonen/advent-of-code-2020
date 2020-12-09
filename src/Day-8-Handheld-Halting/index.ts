import {find_sum_of_instructions, run_correct_operation} from "./game_console";
import { createReadStream } from "fs";
import fs from "fs";
import path from "path";
import { runInThisContext } from "vm";

const instructions = fs
    .readFileSync(path.join(__dirname, "input.txt"),'utf-8')
    .split(/\n/)   
    .map((arr) => arr.split(/\s/)
    .filter(filtered_arr => filtered_arr !== ""))
    console.log(
        "total akkumulated wrong operations", find_sum_of_instructions(instructions),
        "total akkumulated correct operations", run_correct_operation(instructions)
        //all_ID_documents.filter((passport) => is_valid_document(passport, true, true)).length
    );