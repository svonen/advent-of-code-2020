interface BasicPassport {
    byr: string;
    iyr: string;
    eyr: string;
    hgt: string;
    hcl: string;
    ecl: string;
    pid: string;
    cid: string;
}

export function count_valid_documents(id_documents : string[][]): number | undefined {
    let answer = 0;
    for(let i = 0; i<id_documents.length; i++){
        if (id_documents[i].length === 8) answer++
        else if (id_documents[i].length === 7){
            let test = false
            for (var key of id_documents[i]){
                if (key.includes("cid:")) {
                    test = true
                }
            }
            if (!test) answer++
        } 
    }
    return answer
}

function isBasicPassport(o: any, ignoreCid: boolean): o is BasicPassport {
    let properties = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid", "cid"];
    if (ignoreCid) properties = properties.filter((p) => p !== "cid");
    return properties.every((p) => typeof o[p] === "string");
}
export function is_valid_document(
    o: any,
    ignoreCid: boolean,
    strictValidation = false
): boolean {
    console.log(o)
    let properties = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid", "cid"];
    if (ignoreCid) properties = properties.filter((p) => p !== "cid");
    if (isBasicPassport(o, ignoreCid)) {
        if (!strictValidation) {
            return true;
        } else {
            return (
                isValidYear(Number(o.byr), 1920, 2002) &&
                isValidYear(Number(o.iyr), 2010, 2020) &&
                isValidYear(Number(o.eyr), 2020, 2030) &&
                isValidHeight(o.hgt) &&
                isValidHairColor(o.hcl) &&
                isValidEyeColor(o.ecl) &&
                /^[0-9]{9}$/.test(o.pid)
            );
        }
    } else {
        return false;
    }
}

function valid_byr (byr : number): boolean{
    if (1919 < byr && byr < 2003) return true
    return false
}
function valid_iyr (iyr: number): boolean{
    if (2009 < iyr && iyr < 2021) return true
    return false
}
function valid_eyr (eyr: number): boolean{
    if (2019 < eyr && eyr < 2031) return true
    return false
}
function valid_hgt (hgt: string):boolean{
    if (hgt.slice(-2) === "cm"){
        const height = Number(hgt.slice(0,-2))
        if (height >= 150 &&  height <= 193) return true
    }
    if (hgt.slice(-2) === "in"){
        const height = Number(hgt.slice(0,-2))
        if (height >= 59 &&  height >= 76) return true
    }
    return false
}
function valid_hcl (hcl: string): boolean{
    const prefix = hcl[0];
    if (prefix !== "#") return false;
    return /^[0-9a-f]{6}$/.test(hcl.slice(1));
}
function valid_ecl (ecl: string):boolean{
    let valid_colors = ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"]
    for (var valid_col of valid_colors){
        if (ecl === valid_col) return true
    }    
    return false
}
function valid_pid (pid: string): boolean{
    if (pid.length === 9){
        //validnumber
    }
    return false
}
function isValidYear(year: number, min: number, max: number): boolean {
    return String(year).length === 4 && year >= min && year <= max;
}

function isValidHeight(height: string): boolean {
    const suffix = height.slice(-2);
    const _height = Number(height.slice(0, -2));
    if (isNaN(_height)) return false;
    if (suffix === "cm") {
        return _height >= 150 && _height <= 193;
    } else if (suffix === "in") {
        return _height >= 59 && _height <= 76;
    } else {
        return false;
    }
}

function isValidHairColor(hcl: string): boolean {
    const prefix = hcl[0];
    if (prefix !== "#") return false;
    return /^[0-9a-f]{6}$/i.test(hcl.slice(1));
}

function isValidEyeColor(ecl: string): boolean {
    const valid = ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"];
    return valid.includes(ecl);
}
