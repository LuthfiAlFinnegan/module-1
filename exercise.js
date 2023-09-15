function penjumlahan(a, b) {
  return a + b;
}
function pengurangan(a, b) {
  return a - b;
}
function pembagian(a, b) {
  if (b == 0) {
    return "Cannot divide by zero!";
  } else {
    return a / b;
  }
}
function perkalian(a, b) {
  return a * b;
}
function pangkat(a) {
  return a * a;
}
function akarPangkat(a) {
  return Math.sqrt(a);
}
function akarPangkat3(a) {
  return Math.cbrt(a);
}

function calculator() {
  let value = prompt(`Pilih Menu:
1.Penjumlahan
2.Pengurangan
3.Pembagian
4.Perkalian
5.Pangkat 2
6.Akar Pangkat 2
7.Akar Pangkat 3`);
  let num1 = parseFloat(prompt("Enter the first number:"));
  let num2 = parseFloat(prompt("Enter the second number:"));

  let result;

  switch (value) {
    case "Penjumlahan":
      result = penjumlahan(num1, num2);
      break;
    case "Pengurangan":
      result = pengurangan(num1, num2);
      break;
    case "Pembagian":
      result = pembagian(num1, num2);
      break;
    case "Perkalian":
      result = perkalian(num1, num2);
      break;
    case "Pangkat 2":
      result = pangkat(num1, num2);
      break;
    case "Akar Pangkat 2":
      result = akarPangkat(num1, num2);
      break;
    case "Akar Pangkat 3":
      result = akarPangkat3(num1, num2);
      break;

    default:
      result = "PILIH YANG ADA DI MENU BANG! GAUSAH ANEH ANEH DEH AH.";
      break;
  }
  alert(`result: ${result}`);
}

calculator();

