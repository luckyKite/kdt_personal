console.log("잘 되나요?");

var name = "홍길동";


function test() {

  var name = window.prompt("이름을 입력하세요");
  console.log("이름은 " + name + "입니다.")
  document.getElementById("app")
    .innerHTML = `<h1>${getName(name)}</h1>`;

}

const getName = function(name) {

  var name = name;
  console.log("이름은 " + name + "입니다.")
  return name + "님 안녕하세요";

} 

const setName = () => {
  console.log("test");
}