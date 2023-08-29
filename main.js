// var a = [1, 2, 3, 4, 5];
// var b = [5, 6, 7, 8, 9];
// var c = [];
// for (i = 0; i < a.length; i++) {
//     for (j = 0; j < b.length; j++) {
//         if (a[i] == b[j]) {
//             c.push(a[i])
//         }
//     }
// }
// console.log(c);


var array = [1, 5, 6, 5, 5, 5, 7];
var a = [];
var b = [5, 6, 7, 8, 9, 5, 5];
var c = [];
var d = 0;

for (i = 0; i < array.length; i++) {
    let exists = false;
    for (j = i + 1; j < array.length; j++) {
        if (array[i] == array[j]) {
            exists = true;
            break;
        }

    }
    if (!exists) {
        a.push(array[i])
    }
}
// console.log(a);


for (i = 0; i < a.length; i++) {
    for (j = 0; j < b.length; j++) {
        if (a[i] === b[j]) {
            if (a[i] !== c[d - 1]) {
                c[d] = a[i];
                d++
            }
        }
    }
}
console.log(d);
console.log(c);

