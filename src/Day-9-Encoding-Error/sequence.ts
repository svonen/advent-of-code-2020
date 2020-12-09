function find_pair (potensials: number[],value: number): number | undefined{
    for(let i = 0; i< potensials.length-1; i++){
        for( let j = i+1; j<potensials.length; j++){
            if(potensials[i]+potensials[j]===value){
                return 1;
            }
        }
    }
    return 0
}

export function find_invalid(sequence: number[]):number|undefined{
    for (let i = 25; i<sequence.length;i++){
        if(!find_pair(sequence.slice(i-25,i),sequence[i])){
            return sequence[i]
        }
    }
    
    return 0
}

export function find_weaknes(sequence: number[],value: number): number | undefined{
    for (let i = 0; i<sequence.length; i++){
        let akkumulatet = sequence[i];
        let index = i;
        let values: number[] = [sequence[i]];
        while (akkumulatet<value){
            index++
            akkumulatet+=sequence[index]
            values.push(sequence[index])
            if (akkumulatet===value){
                return Math.max(...values)+Math.min(...values)
            }
            if (akkumulatet>value){
                break
            }
        }
    }
    return 0
}