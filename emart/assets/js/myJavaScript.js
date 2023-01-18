console.log("잘 되나요?");

function getName(myName) {
  return myName+"님 안녕하세요";
}

function test() {
  let name = window.prompt("이름을 입력하세요");
  document.getElementById("app").innerHTML = getName(name);
}