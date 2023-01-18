const Data = [
  {
    id: 1,
    name: 'John Doe',
    email: 'email@mail.com'
  },
  {
    id: 2,
    name: 'Mary Smith',
    email: 'mary@mail.com'
  },
  {
    id: 1,
    name: 'Kim Doe',
    email: 'kim@mail.com'
  }
]

console.log(Data[1].name, Data[1].email);

const myFunction =  () => {

  let myName = window.prompt("이름을 입력하세요");
  Data[0].name = myName;
  console.log(Data[0].name);
  document.getElementById("app").innerHTML = `<h1>${Data[0].name}</h1>`;
}