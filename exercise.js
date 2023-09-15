function calculator() {
  let value = prompt(`Pilih Menu:
1.Penjumlahan
2.Pengurangan
3.Pembagian
4.Perkalian
5.Pangkat 2
6.Akar Pangkat 2
7.Akar Pangkat 3`);
  function penjumlahan(a, b) {
    return parseFloat(a) + parseFloat(b);
  }
  function pengurangan(a, b) {
    return a - b;
  }
  function pembagian(a, b) {
    if (b == 0) {
      return "Tidak bisa dibagi dengan nol!";
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

  alert("SELAMAT DATANG DI CALCULATOR TERCINTA");

  let num1;
  let num2;

  if (value == 0) {
    alert("PILIH YANG ADA DI MENU BANG!!!!");
    calculator();
  } else if (value > 0 && value < 5) {
    num1 = prompt("Masukan angka pertama:");
    num2 = prompt("Masukan angka kedua:");
  } else {
    num1 = prompt("Masukan angka:");
  }

  let result;

  switch (value) {
    case "1":
      result = penjumlahan(num1, num2);
      alert(`hasil penjumlahan dari ${num1} + ${num2} = ${result}`);
      break;
    case "2":
      result = pengurangan(num1, num2);
      alert(`hasil pengurangan dari ${num1} - ${num2} = ${result}`);
      break;
    case "3":
      result = pembagian(num1, num2);
      alert(`hasil pembagian dari ${num1} / ${num2} = ${result}`);
      break;
    case "4":
      result = perkalian(num1, num2);
      alert(`hasil perkalian dari ${num1} X ${num2} = ${result}`);
      break;
    case "5":
      result = pangkat(num1, num2);
      alert(`hasil pangkat 2 dari ${num1} = ${result}`);
      break;
    case "6":
      result = akarPangkat(num1, num2);
      alert(`hasil akar pangkat 3 dari ${num1} = ${result}`);
      break;
    case "7":
      result = akarPangkat3(num1, num2);
      alert(`hasil akar pangkat 3 dari ${num1} = ${result}`);
      break;
    default:
      result = "PILIH YANG ADA DI MENU BANG! GAUSAH ANEH ANEH DEH AH.";
      break;
  }
  const valConfirm = confirm("Coba lagi ga bang");
  if (valConfirm == true) {
    calculator();
  } else {
    alert("Thankyou sudah pakai saya puhhh");
  }
}

calculator();
