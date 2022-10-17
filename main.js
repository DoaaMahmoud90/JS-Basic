console.log('1. Print 1 - 135');
for(let i =1; i<=135 ; i ++){
  console.log(i);
}
console.log('2. Print Odd Numbers 1 - 135');
for(let i =1; i<=135 ; i=i+2){
  console.log(i);
}
let sum = 0;
console.log('3. Sum of Printed Numbers');
for(let i =0; i<=135 ; i++){
  sum = sum+i;
  console.log(`Number is: ${i} Sum: ${sum}`);
}
console.log('5. Find Max');
let X =[9, 0, 1,-5, 10, -2, 15];
let max = X[0];
for(let i=0; i<X.length; i++){
  if(X[i] > max){
    max = X[i];
  }
}
console.log(`The maximum value of this array is: ${max}`);
console.log('6. Get Average');
let sum2=0;
for(let i=0; i<X.length; i++){
  sum2 = sum2 + X[i];
}
let avg = sum2 / X.length;
console.log(`The average value is ${avg}`);
console.log('7. Eliminate the Negatives');
for(let i=0; i<X.length; i++){
  if(X[i]<0){
    X[i]=0;
  }
}
for(let i=0; i<X.length; i++){
  console.log(X[i]);
}
console.log('8. Number to String');
let Y =[9, 0, 1,-5, 10, -2, 15];
for(let i=0; i<Y.length; i++){
  if(Y[i]<0){
    Y[i]='Negative Value';
  }
}
for(let i=0; i<Y.length; i++){
  console.log(Y[i]);
}