export function find_sum_of_instructions(instructions : string [][]): number | undefined{
    let index = 0;
    let finished_acc: number [] = [];
    let finished_jmp: number [] = [];
    let finished_nop: number [] = [];
    let finished_op: number [] = [];
    let end_reached = false
    let accumulator = 0
    while(true){
        if (finished_op.includes(index)) break
        finished_op.push(index)
        let operation_type = instructions[index][0]
        let value: number = Number(instructions[index][1]);
        switch (operation_type) {
            case "acc": {
                finished_acc.push(value)
                accumulator += value;
                index++;
                break;
            }
            case "jmp": {
                finished_jmp.push(value)
                index += value;
                
                break;
            }
            case "nop": {
                    finished_nop.push(value)
                    index++;
                break;
            }
        }
        //console.log(index, " ", value, " ", accumulator, " ", finished_op)
        
    }
    return accumulator
}

export function run_correct_operation(instructions : string [][]): number | undefined{
    let accumulated = 0;
    let correct = 0;
    for (let i = 0; i<instructions.length; i++){

        let operation_type = instructions[i][0]
        switch (operation_type) {
            case "acc": {break;}
            case "jmp": {
                instructions[i][0] = "nop"
                if(terminates_correctly(instructions)[0]){
                    correct = 1
                    accumulated = terminates_correctly(instructions)[1]
                }
                else{instructions[i][0] = "jmp"}
                break;
            }
            case "nop": {
                instructions[i][0] = "jmp"
                if(terminates_correctly(instructions)[0]){
                    accumulated = terminates_correctly(instructions)[1]
                    correct = 1
                }
                else{instructions[i][0] = "nop"}
                break;
            }       
        }
        if (correct) {break}
    }
    return accumulated
}

function terminates_correctly (instructions : string [][]): number []{
    let index = 0;
    let finished_op: number [] = [];
    let end_reached = false
    let accumulator = 0
    while(true){
        if (finished_op.includes(index)) break
        finished_op.push(index)
        let operation_type = instructions[index][0]
        let value: number = Number(instructions[index][1]);
        switch (operation_type) {
            case "acc": {
                accumulator += value;
                index++;
                break;
            }
            case "jmp": {
                index += value;
                break;
            }
            case "nop": {
                    index++;
                break;
            }
        }
        if(index === instructions.length){
            end_reached=true
            break
        }
    }
    return [Number(end_reached), accumulator]
}