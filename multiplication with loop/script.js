function multiply() {
  let getValue1 = Number(document.getElementById("number1").value);
  let getValue2 = Number(document.getElementById("number2").value);
  let showResult = document.getElementById("results");
  showResult.innerHTML = "";
  if (getValue1 > getValue2) {
    [getValue1, getValue2] = [getValue2, getValue1];
  }
  if (
    isNaN(getValue1) ||
    getValue1 < 1 ||
    getValue1 > 20 ||
    isNaN(getValue2) ||
    getValue2 < 1 ||
    getValue2 > 20
  ) {
    let text = "Not Valid!";
    document.getElementById("warning").innerHTML = text;
    document.getElementById("success").innerHTML = "";
  } else {
    text = "Proceed";
    for (let i = getValue1; i <= getValue2; i++) {
      let tableHTML = `<div class="table-part">`;
      for (let j = 1; j <= 10; j++) {
        tableHTML += `${i} x ${j} = ${i * j} <br/>`;
      }
      tableHTML += "</div>";
      showResult.innerHTML += tableHTML;
    }
    document.getElementById("warning").innerHTML = "";
    document.getElementById("success").innerHTML = text;
  }
}
