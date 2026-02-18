// // Oblect --> Array, Function

// const students = ["Bmw", "Bugatti","Posche", "Pagani", "Mers musr", "Cobalt", "Golf"]
// console.log(students[0]); // index orqali ulanish
// console.log(students.length); // array uzunligini qaytaradi
// console.log(students[students.length - 1]); // arrayning oxirgi elementini qaytaradi



// // Index yordamida array elementlarini o'zgartirish
// students[4] = "Gentra"
// console.log(students);

const strings = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]

// for loop - takrorlash operatorlari

for(key of strings) {
    console.log(key * 9999999999999999999999999);
}

for(key of strings) {
    if(key % 2 == 1) console.log(key, ' toq son');
    else console.log(key, 'juft son');
}

// modul %
console.log(5 % 2);
