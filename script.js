let a = ["level", "radar", "text", "river", "madam", "sales", "mom"];
// let newArray = [];
// for (let i = 0; i < a.length; i++) {
//   let reverseWord = a[i].split("").reverse().join("");
//   if (reverseWord == a[i]) {
//     newArray.push(a[i]);
//   }
// }
// console.log(newArray.length);

let newArray = [];
for (let i = 0; i < a.length; i++) {
  let words = "";
  for (let j = a[i].length - 1; j >= 0; j--) {
    words += a[i][j];
  }
  if (words == a[i]) {
    newArray.push(a[i]);
  }
}
console.log(newArray.length);
