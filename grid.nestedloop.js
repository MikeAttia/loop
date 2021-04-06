/*let value = 1;
for (let row = 1; row <= 4; row++) {
    for (let column = 1; column <= 4; column++) {
        process.stdout.write(value.toString())
        value++;
        
    }
    console.log();
}*/
//************************************************* */
/*let value = 1;
let amountrow=7;
let amountcolumn = 5;
for (row = 1; row <= amountrow; row++) {
    for (column = 1; column <= amountcolumn; column++) {
        process.stdout.write(value.toString())
    }
    value++;
    console.log();
}*/
//***************************************************** */
//let value;
let amountrow = 7;
let amountcolumn = 5;
for (row = 1; row <= amountrow; row++) {
    for (column = 1; column <= amountcolumn; column++) {
        let x=row+', '+column
        process.stdout.write(x.toString());
    }
  // value++;
    console.log();
}



