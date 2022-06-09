const btn = document.getElementById("btn");
const output = document.getElementById("output");

const number = Math.trunc(Math.random() * 100);
let sayac = 0;
faruk();
function faruk() {
  btn.addEventListener("click", () => {
    let input = document.getElementById("input");
    console.log(number);
    while (sayac < 5) {
      console.log(input.value);
      if (Number(input.value) == number) {
        sayac = 5;
        return (output.innerHTML = "Tebrikler,Bildiniz.");
      } else if (input.value < number) {
        sayac = sayac + 1;
        if (sayac == 5) {
          return (output.innerHTML = "Kaybettiniz.");
        } else {
          return (output.innerHTML = "Daha büyük bir sayı seçiniz.");
        }
      } else {
        sayac = sayac + 1;
        if (sayac == 5) {
          return (output.innerHTML = "Kaybettiniz.");
        } else {
          return (output.innerHTML = "Daha küçük bir sayı seçiniz.");
        }
      }
    }
  });
}
