const peso = document.querySelector("#input-peso");
const altura = document.querySelector("#input-altura");
const resImc = document.querySelector(".res");

function calcular() {
  let imc = peso.value / (altura.value * altura.value);
  if (peso.value == "" || altura.value == "") {
    resImc.style.background = "red";
    resImc.innerHTML = "Preencha todos os campos";
  } else if (imc < 18.5) {
    resImc.style.background = "yellow";
    resImc.innerHTML = "Magreza | Obesidade: 0";
  } else if (imc >= 18.5 && imc < 25) {
    resImc.style.background = "green";
    resImc.innerHTML = "Normal | Obesidade: 0";
  } else if (imc >= 25 && imc < 30) {
    resImc.style.background = "yellow";
    resImc.innerHTML = "Sobrepeso | Obesidade: I";
  } else if (imc >= 30 && imc < 40) {
    resImc.style.background = "red";
    resImc.innerHTML = "Obesidade | Obesidade: II";
  } else {
    resImc.style.background = "black";
    resImc.innerHTML = "Obesidade grave | Obesidade: III";
  }
}
