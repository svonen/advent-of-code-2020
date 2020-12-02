export function FindValidPasswords (passwordDB: string []): number | undefined {
    let answer = 0
    for (var Passwordline of passwordDB){
        let newpasswordline = Passwordline.split(" ");
        let password = newpasswordline[2];
        let policychar = newpasswordline[1][0]
        let tmpminmax = newpasswordline[0].split("-")
        var min: number = +tmpminmax[0];
        var max: number = +tmpminmax[1];
        let occurances = (password.match(new RegExp(policychar, "g")) || []).length
        if (min <= occurances && occurances <= max) {
            answer++
        }
    }
    return answer
}
export function FindValidPasswords2 (passwordDB: string []): number | undefined {
    let answer = 0
    for (var Passwordline of passwordDB){
        let newpasswordline = Passwordline.split(" ");
        let password = newpasswordline[2];
        let policychar = newpasswordline[1][0]
        let tmpminmax = newpasswordline[0].split("-")
        var position1: number = +tmpminmax[0];
        var position2: number = +tmpminmax[1];
        if (password[position1-1] !== password[position2-1] && (password[position1-1] === policychar || password[position2-1] === policychar)) {
            answer++
        }
    }
    return answer
}
