console.log("잘 되나요?");

let myName = "Jason";

function getName() {
  return myName+"님 안녕하세요";
}

function test() {
  document.getElementById("app").innerHTML = getName();
}