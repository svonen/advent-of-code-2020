export function calculate_total_jot_diff(adapters: number[]):number|undefined{
    let adapter = 0;
    let total_one_dif = 0
    let total_thre_dif = 1
    let sortet_adapters = adapters.sort(function(a, b){return a-b});
    let dif = 0
    //console.log(sortet_adapters)
    for (let i = 0; i < adapters.length; i++){
        dif = sortet_adapters[i] - adapter
        adapter = sortet_adapters[i]
        if (dif === 1) total_one_dif++
        else if (dif ===3) total_thre_dif++
    }
    return total_one_dif * total_thre_dif
}

export function find_all_arrangements (adapters: number[]):number|undefined{
    let sortet_adapters = adapters.sort(function(a, b){return a-b}).reverse();
    let adapter = sortet_adapters[0]+3;
    let last_dif = 3
    let all_dif = []
    let last_dif3 = 0
    let last_dif4 = 0
    let dif = 0
    let total_revomable = 0
    let tmp = 0
    console.log(sortet_adapters)
    for (let i = 0; i < adapters.length; i++){
        dif = adapter - sortet_adapters[i]
        all_dif.push(dif) 
        if (dif === 1 && last_dif ===1) total_revomable++
        if (dif === 1 && last_dif ===1 &&last_dif4 === 1 && last_dif3 === 1) tmp++
        last_dif4 = last_dif3
        last_dif3 = last_dif
        last_dif = dif
        adapter = sortet_adapters[i]
    }
    console.log(all_dif)
    console.log(tmp)
    return 7**(tmp)*2**(total_revomable-tmp*3)
}
