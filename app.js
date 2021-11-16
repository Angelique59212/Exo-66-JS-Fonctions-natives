// console.log(random());
let first = document.getElementById("entier");
let second = document.getElementById("flottant");
let third = document.getElementById("non-numerique");
let fourth = document.getElementById("random");
let fifth = document.getElementById("trunc");
let sixth = document.getElementById("replace");

let operande=10;
// 1
let result1 = operande * parseInt(first.innerHTML);
console.log(result1);
first.innerHTML = result1.toString();
// 2
let result2 = (operande * parseFloat(second.innerHTML)) + result1;
console.log(result2);
second.innerHTML = result2.toString();
// 3
if (isNaN(parseInt(third.innerHTML))) {
    third.innerHTML = "0";
    console.log(third);
}

// 4
fourth.innerHTML = Math.floor(Math.random() * 100).toString();
console.log(fourth.innerHTML);

// 5
fifth.innerHTML = Math.trunc(parseFloat(fifth.innerHTML)).toString();
console.log(fifth.innerHTML);
// 6
sixth.innerHTML = sixth.innerHTML.replace("world","Dehainaut Angélique");
