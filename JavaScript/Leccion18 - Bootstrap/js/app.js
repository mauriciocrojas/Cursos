console.log("Calculator app");

function sumar() {
  const forma = document.getElementById("forma");
  let operandoA = forma["operandoA"];
  let operandoB = forma["operandoB"];
  let resultado = parseInt(operandoA.value) + parseInt(operandoB.value);
  if (isNaN(resultado)) {
    resultado = "La operación no incluye números";
  }
  document.getElementById("resultado").innerHTML = `Resultado: ${resultado}`;
}


function restar() {
    const forma = document.getElementById("forma");
    let operandoA = forma["operandoA"];
    let operandoB = forma["operandoB"];
    let resultado = parseInt(operandoA.value) - parseInt(operandoB.value);
    if (isNaN(resultado)) {
      resultado = "La operación no incluye números";
    }
    document.getElementById("resultado").innerHTML = `Resultado: ${resultado}`;
  }