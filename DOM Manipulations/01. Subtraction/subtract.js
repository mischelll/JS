function subtract() {
    document.getElementsByTagName("input")[0].removeAttribute("disabled");
    document.getElementsByTagName("input")[1].removeAttribute("disabled");

    let num1 = Number(document.getElementById("firstNumber").value);
    let num2 = Number(document.getElementById("secondNumber").value);
    let result = document.getElementById("result");

    result.textContent = num1 - num2;
}