const Data = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25]
]

for(let i = 0; i < 5; i++) {
  let str = "";
  for(let j = 0; j < 5; j++) {
    str += Data[4-j][i]+" ";
  }
  console.log(str);
}

let sum = 0;
for(let i = 1; i <= 10; i++) {
  sum += i;
}

function sumRecursive(num) {

  if(num === 1) {
    return 1;
  }
  return num + sumRecursive(num-1);

}

console.log("재귀함수",sumRecursive(10000));

console.log(sum);

function sumConsole(num) {
  let sum = 0;
  for(let i = 1; i <= num; i++) {
    sum+=sumRecursive(i);
  }

  console.log(sum);
}

sumConsole(100000);