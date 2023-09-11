/* 
1. buat function konversi ke template phonenumber (xxx-xxx-xxx)

example -> "123456789" - "123-456-789"

2. buat class train 
    - masinis duduk paling depan 
    - maksimal 10 penumpang 
    - tidak boleh ada penumpang dengan nama penumpang yang sama
    - penumpang mengisi urutan kursi dari depn berurutan
    - penumpang bisa keluar kereta 
    - penumpang baru, mengisi kursi kosong terlebig dahulu sebelum kusrsi ke kebalakang
*/

// 1 //
let number = "081289614450";
function convert(number) {
  let arr = number.split("");
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (res.length == 4 || res.length == 9) {
      res.push("-");
      i--;
    } else {
      res.push(arr[i]);
    }
  }
  return res.join("");
}
// console.log(convert(number));

// 2 //

class Train {
  kursi = [
    "Masinis",
    undefined,
    "Hidayat",
    undefined,
    "Luthfi",
    "Reyhan",
    undefined,
    undefined,
    "Hafiz",
    "Agna",
  ];

  tambahPenumpang(nama, kursi, maximal = 11) {
    if (this.kursi.length == 0) {
      this.kursi.push(nama);
      return this.kursi;
    } else {
      for (let i = 0; i < this.kursi.length; i++) {
        if (this.kursi[i] == undefined) {
          this.kursi[i] = nama;
          return this.kursi;
        } else if (this.kursi.length >= maximal) {
          console.log("penuh bang,cari kereta lain aja");
          return this.kursi;
        } else if (this.kursi[i] == nama) {
          console.log(`${nama} sudah ada di dalam kereta bang`);
          return this.nama;
        } else if (i == this.kursi.length - 1) {
          this.kursi.push(nama);
          return this.kursi;
        }
      }
    }
  }

  buangPenumpang(nama, kursi) {
    for (let i = this.kursi.length - 1; i > 0; i--) {
      if (this.kursi[i] == nama) {
        this.kursi[i] = undefined;
        return this.kursi;
      }
    }
  }
}

let train = new Train();
train.tambahPenumpang("Aman", []);
train.tambahPenumpang("Aman", []);
train.tambahPenumpang("Ezra", []);
train.tambahPenumpang("Thoby", []);
train.tambahPenumpang("Mas Ilham", []);
train.tambahPenumpang("Andre", []);
train.tambahPenumpang("Joni", []);

console.log(train.kursi);
