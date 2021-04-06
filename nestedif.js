let monthlyPay = 2500;
let interest = monthlyPay / 100;
if (monthlyPay > 0) {

    if (monthlyPay > 0 && monthlyPay <= 500) {
        console.log('your monthly payment is' + (interest * 8 + monthlyPay));
    }
    if (monthlyPay > 500 && monthlyPay <= 1000) {
        console.log('your monthly payment is' + (interest * 6 + monthlyPay));
    }
    if (monthlyPay > 1000 && monthlyPay <= 2000) {
        console.log('your monthly payment is' + (interest * 2 + monthlyPay));
    }
    else if (monthlyPay > 2000) {
        console.log("you are payment is" +' '+ monthlyPay +' '+'Congratulations you have no interest!!!');
    }
}