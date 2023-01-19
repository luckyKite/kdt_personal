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

console.log(sum);

function sumConsole(num) {
  let sum = 0;
  for(let i = 1; i <= num; i++) {
    for(let j = 1; j <= i; j++) {
      sum += j;
    }
  }

  console.log(sum);
}

sumConsole(1000);