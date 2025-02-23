

function multiply() {
  var getValue1 = document.getElementById("number1").value;
  var getValue2 = document.getElementById("number2").value;
  var showResult1 = document.getElementById("results");
  // var showResult2 = document.getElementById("result2");
  var i;
  var text;
  showResult1.innerHTML="";
  if(getValue1>getValue2){
    [getValue1,getValue2]=[getValue2,getValue1];
  }
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
    for (i = getValue1; i <= getValue2; i++) {
      // showResult1.innerHTML += `${getValue1} x ${i} = ${getValue1 * i} <br/>`;
      // showResult2.innerHTML += `${getValue2} x ${i} = ${getValue2 * i} <br/>`;
      let tableHTML=`<div class="table-part">`
      for(let j=1; j<=10; j++){
        tableHTML+= `${i} x ${j} = ${i*j} <br/>`
      }
      tableHTML+="</div>";
      showResult1.innerHTML+=tableHTML;
    }
  }
  document.getElementById("warning").innerHTML = text;
}


