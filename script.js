//javascript code

function resultDisplay() {
  const input = document.getElementById("textInput").value;
  const input2 = document.getElementById("secondTextInput").value;
  const operator = document.getElementById("operator").value;

  switch (operator) {
    case "add":
      result = Number(input) + Number(input2);
      break;
    case "sub":
      result = Number(input) - Number(input2);
      break;
    case "multiply":
      result = Number(input) * Number(input2);
      break;
    case "divide":
      result = Number(input) / Number(input2);
      break;
    default:
      result = Number(input) ** Number(input2);
      break;
  }

  let resultTag = document.getElementById("result");
  resultTag.innerHTML = `Result: ${result}`;
}
