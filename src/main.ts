


// 1.Запросите у пользователя число, возведите это число во 2-ю степень и выведите на экран.
// let input=parseFloat(prompt('Введите число') as string)
// alert(input*2)

// 2.Запросите у пользователя 2 числа и выведите среднее арифметическое этих чисел
// let input=parseFloat(prompt('Введите число') as string)
// let input2=parseFloat(prompt('Введите число') as string)
// alert((input+input2)/2)

// 3.Запросите у пользователя длину стороны квадрата и выведите площадь такого квадрата.
// let input=parseFloat(prompt('Введите число') as string)
// let input2=parseFloat(prompt('Введите число') as string)
// alert(input*input2)

// 4.Реализуйте конвертор из километров в мили (пользователь вводит километры, программа выводит мили). 1 км = 0,621371 миль. Это значение укажите в коде как константу.
// let input=parseFloat(prompt('Введите число') as string)
// const MILKM=0.621371
// alert(`${input*MILKM}`)


// 5.Реализуйте калькулятор. Пользователь вводит два числа,а программа выводит результаты действий + - * / междуэтими числами.
// let input=parseFloat(prompt('Введите число') as string)
// let input2=parseFloat(prompt('Введите число') as string)
// alert(`sum ${input+input2}
// минус  ${input-input2}
// уможение ${input*input2}`)

// 6.Пользователь вводит значения a и b для формулы a * x + b = 0,а программа считает и выводит значение x.
// let a=parseFloat(prompt('Введите a') as string)
// let b=parseFloat(prompt('Введите b') as string)
// alert(`${-b/a}`)

// 7.Запросите у пользователя текущее время (часы и минуты)и выведите, сколько часов и минут осталось до следующегодня.
// let input=parseFloat(prompt('текущий час') as string)
// let input2=parseFloat(prompt('текущие минуты') as string)
// let h=parseInt(`${(1440-input*60-input2)/60}`)
// alert(`до следующего дня осталось ${h} часов ${60-(input2)} минут`)

// let vop=(prompt('Какое оф.название JS') as string)
// if (vop=='ECMAScript') { 
//   alert( 'Верно!' );
// } else {
//   alert('Не знаете ECMAScript'); 
// }

// let result= (a + b < 4) ? 'Мало' : 'Много'

// let chis=+parseFloat(prompt('Введите число') as string)
// if (chis>0) {
//   alert('1');
// }
// else if (chis<0) {
//  alert('-1');
// }
// else if (chis==0) {
//   alert('0');
// }

// let login = ''
// let message = (login == 'Сотрудник') ? 'Привет' :
//  (login == 'Директор') ? 'Здравствуйте' :
//  (login == '') ? 'Нет логина':
//   '' 
// alert(message)

// !ДЗ 1 неделя
// 1.Запросите у пользователя его имя и выведите в ответ:«Привет, его имя!».
// let b=parseFloat(prompt('Введите ваше имя') as string)
// alert('Привет,'+b)

// 2.Запросите у пользователя год его рождения, посчитайте,сколько ему лет и выведите результат. 
// Текущий год укажите в коде как константу.
// let a=parseFloat(prompt('Введите год вашего рождения') as string)
// const b=2023
// alert(b-a)

// 3.Запросите у пользователя длину стороны квадрата и выведите периметр такого квадрата.
// let a=parseFloat(prompt('Введите длину стороны квадрата') as string)
// alert(a**)

// 4.Запросите у пользователя радиус окружности и выведите площадь такой окружности.   
// let a=parseFloat(prompt('Введите радиус окружности') as string)
// const b=3.14
// let s=a**2*b
// alert (s)

// 5.Запросите у пользователя расстояние в км между двумя городами и за сколько часов он хочет добраться. 
// Посчитайте скорость, с которой необходимо двигаться, чтобы успеть вовремя.
// let s=parseFloat(prompt('Введите расстояние в км') as string)
// let t=parseFloat(prompt('Введите за сколько часов вы хотите добраться') as string)
// let v=s/t
// alert(v)

// 6.Реализуйте конвертор валют. Пользователь вводит доллары, программа переводит в евро. Курс валюты храните в
// константе.
// let s=parseFloat(prompt('Доллары') as string)
// const e=0.90835
// let n=s*e
// alert(n)

// 7. Пользователь указывает объем флешки в Гб. Программа должна посчитать сколько файлов размером 
// в 820 Мб помещается на флешку.
// let a=+parseFloat(prompt('Введите объем флешки в Гб') as string)
// let b=a*1000
// alert(b/820)

// !ДЗ 2 неделя
// 1.Запросить у пользователя его возраст и определить, кем он является: ребенком (0–2), подростком (12–18), 
// взрослым (18_60) или пенсионером (60– ...).
// let age=+parseFloat(prompt('Укажите ваш взраст') as string)
// let message = (age <=2) ? 'ребенок' :
//   (age <= 18) ? 'подросток' :
//   (age <= 60) ? 'взрослый' :
//   'пенсионер';
//   alert(message)

// 2.Запросить у пользователя число от 0 до 9 и вывести ему спецсимвол,
//  который расположен на этой клавише (1–!,2–@, 3–# и т. д).
// let namber=+parseFloat(prompt('Укажите число от 0 до 9') as string)
// if (namber == 1) {
//     alert ('!') ;
// } else if (namber == 2) {
//     alert ('@') ;
// } else if (namber == 3) {
//     alert('№') ;
// }else if (namber == 4) {
//     alert(';') ;
// }else if (namber == 5) {
//     alert('%');
// }else if (namber == 6) {
//     alert(':');
// }else if (namber == 7) {
//     alert('?') ;
// }else if (namber == 8) {
//     alert('*') ;
// }else if (namber == 9) {
//     alert ('9!');
// }




// 3.Запросить у пользователя трехзначное и число и проверить, есть ли в нем одинаковые цифры.
// const num = prompt('3zn chislo') as string
// for (let i=0;i<num.length;i++) {
//     let sovp = 0
//     for(let j=0;j<num.length;j++) {
//         if (num[i]==num[j]) sovp++
//     }
//     if (sovp>1) {
//         alert('est odinakovie')
//         break
//     }
// }