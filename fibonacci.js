i=0;
j=1;
z=0;
console.log(i),
console.log(j);
for(let counter=0;counter <10;counter++){
    z=i+j;
    i=j;
    j=z;
    console.log(z);
}