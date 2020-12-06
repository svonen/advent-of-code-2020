export function count_answers(answers : string[][]): number | undefined{
    let total_yes: number = 0;
    for (let i = 0; i<answers.length; i++){
        let anwered_chr: string[] = []
        let combined_yes:number = 0
        for (let j = 0; j < answers[i].length; j++){
            for (let k = 0; k < answers[i][j].length; k++){
                if (!anwered_chr.includes(answers[i][j][k])){
                    anwered_chr.push(answers[i][j][k])
                    combined_yes++
                }
            }
        }
        total_yes += combined_yes
    }
    return total_yes
}

export function count_answers2(answers : string[][]): number | undefined{
    let total_yes: number = 0;
    for (let i = 0; i<answers.length; i++){
        let anwered_chr: string[] = []
        let combined_yes: number[] = []
        for (let j = 0; j < answers[i].length; j++){

            for (let k = 0; k < answers[i][j].length; k++){
                if (!anwered_chr.includes(answers[i][j][k])){
                    anwered_chr.push(answers[i][j][k])
                    combined_yes.push(1)
                }
                else{
                    let index = anwered_chr.indexOf(answers[i][j][k])
                    combined_yes[index]++
                }
            }
        }
        for (let chr = 0; chr < anwered_chr.length; chr++){
            if(combined_yes[chr]===answers[i].length){
                total_yes ++
            }
        }
        console.log (anwered_chr,combined_yes,answers[i].length)
    }
    return total_yes
}