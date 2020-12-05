import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from "constants"
import { runInThisContext } from "vm";

export function find_missing_seat(seats: any): number | undefined{
    let boarding_IDs = []

    for (let i = 0; i < seats.length; i++){
        //console.log(i, " ",find_row(seats[i].slice(0,7)), " ", find_col(seats[i].slice(-3)))
        boarding_IDs.push(seat_ID(find_row(seats[i].slice(0,7)),find_col(seats[i].slice(-3))))
    }
    boarding_IDs = boarding_IDs.sort((A,B)=>A-B)
    for (let j = 0; j < boarding_IDs.length; j++){
        if (boarding_IDs[j+1] !== boarding_IDs[j]+1)
            return boarding_IDs[j]+1
    }
    return Math.max(...boarding_IDs)
}

function convert_to_binery (seat: string): [number,number,number]{
    var seat_0b: number = 0b1111111111;
    var tmp: number = 0b1;
    var row = 0;
    var col = 0;
    for (let i = 0; i < seat.length; i++){
        //console.log(seat_0b, " ", seat[i], " " ,tmp) 
        if (seat[i]=== "F" || seat[i]=== "L"){
            seat_0b = (seat_0b^tmp) 
        }
        if (i === 6) row = seat_0b-896
        tmp =  (tmp << 1)       
    }
    col = seat_0b >>> 7
    return [seat_0b,row,col]
}
function find_row (seat_ID: string): number{
        var seat_0b: number = 0b1111111;
        var tmp: number = 0b1000000;
        for (let i = 0; i < seat_ID.length; i++){
            if (seat_ID[i]=== "F"){
                seat_0b = (seat_0b^tmp) 
            }
            tmp =  (tmp >>> 1)       
        }
        return seat_0b
}
function find_col (seat_ID: string): number{
    var seat_0b: number = 0b111;
    var tmp: number = 0b100;
    for (let i = 0; i < seat_ID.length; i++){
        if (seat_ID[i]=== "L"){
            seat_0b = (seat_0b^tmp) 
        }
        tmp =  (tmp >>> 1)       
    }
    return seat_0b
}
function seat_ID (row: number, col: number): number{
    return row * 8 + col 
}