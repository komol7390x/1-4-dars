
// const year=parseInt(prompt("Yoshingizni kiriting?"))
// console.log(`Tugilgan yilingiz:  ${2024-year}`)

// const res = parseInt(prompt("Birinchi soni kiriting: "));

// if (res % 3 == 0 && res % 5 == 0) {
//   console.log("FizzBuzz");
// } else if (res % 3 == 0 && res % 5 != 0) {
//   console.log("Fizz");
// } else if (res % 3 != 0 && res % 5 == 0) {
//   console.log("Buzz");
// } else {
//   console.log(res);
// }

const vazn = parseFloat(prompt("Vazningizni kiriitng?"));
const boy = parseInt(prompt("Bo'yingizni kiriting?"));

BMI = vazn / ((boy * boy) / 10000);

if (BMI < 18.5) {
  console.log(BMI + "Sizda vazn kamligi bor,ko'proq ovqatlaning!");
} else if (18.5 <= BMI && BMI < 25) {
  console.log(BMI + " Siz sog'lom vazndasiz");
} else if (25 <= BMI && BMI < 30) {
  console.log(
    BMI + " Sizda ozgina ortiqcha vazn bor, Sport bilan shug'ulaning");
} else if (BMI >= 30) {
  console.log(BMI + " Sizda ortiqcha vazn bor, dietiga etbor bering!");
}
