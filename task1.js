/**Задача №1

В программе объявлены две переменные — price и range. Переменная range может принимать одно из трех строковых значений — month/day/week. Переменная price хранит в себе числовое значение. Необходимо написать программу, которая формирует строку с использованием данных переменных по следующему шаблону: 

<значение price> Р в <эквивалент значения range на русском языке> 

Пример значений переменных: 

let price = 10000 

let range = "day" 

Пример результата:

10000 Р в день */

const price = Number(prompt('íncome'))
const range = prompt('period of time(month,day,week)')

const formattedPrice = price.toLocaleString('ru', {
    style: "currency",
    currency: "RUB"
})
const result =`${formattedPrice} in a ${range}`
console.log(result)




