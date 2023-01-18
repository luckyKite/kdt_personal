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

  let myId = window.prompt("id를 입력하세요");
  for(let i in Data) {
    if(myId == Data[i].id) {
      console.log(Data[i].name, Data[i].email);
      document.getElementById("app")
        .innerHTML = `<h1>${Data[1].name}의 이메일은 ${Data[i].emial}입니다.</h1>`;
        break;
    } else {
      console.log("없는 아이디입니다.");
    }
  }
  
}