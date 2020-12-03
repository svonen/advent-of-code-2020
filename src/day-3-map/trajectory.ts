export function count_trees(map: string[]): number | undefined{
    let path: number[][] = [[1,1],[3,1],[5,1],[7,1],[1,2]];
    let totaltrees: number[] = [0,0,0,0,0];
    for (let j = 0; j < path.length; j++){
        let trees = 0;
        let rightsteps = path[j][0];
        let dowsteps = path[j][1];
        for (let i = 0; i < map.length; i+= dowsteps) {
            let cur_row = i;
            let cur_col = i*rightsteps/dowsteps;
            while (cur_col >= map[cur_row].length){
                cur_col -= (map[cur_row].length)
            }
            if (map[cur_row][cur_col] === "#"){
                trees++; 
            }
        }
        totaltrees[j]= trees
    }
    console.log(totaltrees);
    let answer = 1;
    for (let k = 0; k < totaltrees.length; k++)
        answer = answer * totaltrees[k];
    return answer;
}