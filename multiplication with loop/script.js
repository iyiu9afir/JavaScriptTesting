// var x = math(5,6);
// function math(x,y){
//     return x*y;
// }
// document.getElementById("js").innerHTML = x;

// function inputValidation(){
//     var x = document.getElementById("number").value;
//     let text;
//     if (isNaN(x) || x<1 || x>20){
//         text="not valid"
//     } else{
//         text = "valid"
//     }
//     document.getElementById("output").innerHTML=text
// }

function multiply() {
  var getValue1 = document.getElementById("number1").value;
  var getValue2 = document.getElementById("number2").value;
  var showResult1 = document.getElementById("result1");
  var showResult2 = document.getElementById("result2");
  var i;
  var text;
  if (
    isNaN(getValue1) ||
    getValue1 < 1 ||
    getValue1 > 20 ||
    isNaN(getValue2) ||
    getValue2 < 1 ||
    getValue2 > 20
  ) {
    text = "not valid";
  } else {
    text = "output";
    for (i = 1; i <= 10; i++) {
      showResult1.innerHTML += `${getValue1} x ${i} = ${getValue1 * i} <br/>`;
      showResult2.innerHTML += `${getValue2} x ${i} = ${getValue2 * i} <br/>`;
    }
  }
  document.getElementById("warning").innerHTML = text;
}

// var math = 9;
// for(var i =1;i<=10;i++){
//     document.write(`${math} X ${i} = ${math*i} <br/>`)
// }
