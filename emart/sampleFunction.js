const Data = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25]
]

const people = [
  {
    id: 1,
    name: 'John Doe',
    email: 'email@email.com',
    item: {
      id: 1,
      name: 'item1',
      price: 1000
    },
    go: view = () => {
      console.log("view");
    }
  },
  {
    id: 2,
    name: 'Mary Smith',
    email: 'mary@email.com'
  },
  {
    id: 3,
    name: 'Kim Doe',
    email: 'Kim@email.com'
  }
]


const myFunction = () => {

  let myId = parseInt(window.prompt("id를 입력하세요"));
  for(let i in Data) {
    if(myId === Data[i].id) {
      console.log(Data[i].name, Data[i].email);
      document.getElementById("app")
        .innerHTML = `<h3>${Data[i].name}의 이메일은 ${Data[i].email}입니다.</h3>`;
      break;
    } else {
      console.log("없는 아이디입니다.");
    }

  }
  
}

for(let i = 0; i < 5; i++) {
  let str = "";
  for(let j = 0; j < 5; j++) {
    let x = Data[4-j][i].toString();
    str += x.padStart(2,'0')+" ";
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

for(let i=0; i<10; i++) {
  if(i === 5) {
    continue;
  } else if(i === 8) {
    break;
  }
  console.log(i);
}

let txt = 'Writing objects: 100% (4/4), 476 bytes | 476.00 KiB/s, done.';
// txt = txt.replace('objects', 'good');
console.log(txt.trim());

console.log(txt.toUpperCase());
console.log(txt);

let numb = "https://www.w3schools.com/js/tryit.asp?filename=tryjs_string_padding3";
let strList = numb.split('/');

console.log(strList);

people.forEach(item => {
 
    let txt = "";
    txt = `
      <p>ID: ${item.id}</p>
      <p>Name: ${item.name}</p>
      <p>Email: ${item.email}</p>
      <hr>
   `;
   document.getElementById("app").innerHTML += txt;
});