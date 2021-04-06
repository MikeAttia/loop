let i = 371;
let quot;
let sum = 0;
let newNum=i;
while (newNum > 0) {
    //1-to fitish the last number.
    let reminder = newNum % 10;
    //2-update the number by removing the last digit.
    quot = Math.floor(newNum / 10);
    // 3-add sum of cubes of each digit'
    sum = sum + (reminder*reminder*reminder );
    //4-here the newNum will equal the quotint which is ('37')
    newNum=quot;
 

}
if (sum == i) {
    console.log(i + " is an armstrong number.");

}
else {
    console.log('this is not an armstrong number.');
}




