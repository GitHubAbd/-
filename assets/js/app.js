let title = document.getElementById("title")
let output = document.getElementById("dordaxamir")
function fl(n) {
    let f1 = 0, f2 = 1, cf = 1;
    for(let i = 1; i <= n; i++){
        cf = f1 + f2;
        f1 = f2;
        f2 =  cf;
    }
    return cf
}
const calcData = {
  firstValue: 0,
};
// function calculator(a, b, operator) {
//   if (operator == "+") return a + b;
//   else if (operator == "-") return a - b;
//   else if (operator == "*") return a * b;
//   else if (operator == "/") return a / b;
// }

window.addEventListener("keyup", (e) => {
  if (e.key == "Enter") {
    calcData.firstValue = +title.value;

  output.innerHTML = fl(calcData.firstValue);

    title.value = "";
  }
});
