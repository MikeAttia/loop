let vo = 'Hello Every One I hope yoall doing ok.';
let numOfvo = 0;
vo = vo.toLowerCase(0);
for ( i = 0; i <= vo.length; i++) {
    if (vo[i] == 'a' || vo[i] == 'e' || vo[i] == 'i' || vo[i] == 'o' || vo[i] == 'u') {
        numOfvo++;
        console.log(vo[i]);
    };
    }
    console.log('number of vowels ' + numOfvo)