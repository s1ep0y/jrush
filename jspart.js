const outlines = '__________________________________________________________'

var usersData = ['Виталий Иванович', 'Иннокентий Петрович', 'Александр Александрович', 'Игорь Олегович', 'Евгений Петрович', 'Игнат Денисович', 'Сергей Александрович', 'Семён Петрович'];

console.log(outlines)

var query = 'Александрович';
var matchingUsers = 0;


usersData.forEach(element => {
    let isok = (() => element.indexOf(query))
    if (isok () != -1) {
        matchingUsers++
    }
});
console.log(matchingUsers)

console.log(outlines)

// /* Техническое задание

// Напиши программу, которая будет собирать статистику из пользовательских данных.

// Массив с данными записан в переменную usersData.

// Найди все элементы массива с данными, в которых содержится определённая строка. Эта искомая строка записана в переменную query.

// Количество подходящих элементов (пользователей), которые подходят под критерий, запиши в переменную matchingUsers.

// Чтобы проверить наличие строки в элементе массива, используй команду indexOf().

// */

// var fibonacciNumbers = [1, 1];
// var numbersQuantity = 7;

// const fib = ((arr)=>{
    
//     fibonacciNumbers[arr.length] = arr[arr.length-1] + arr[arr.length-2] 
// })

// while ( numbersQuantity>0) {
//     fib(fibonacciNumbers);
//     numbersQuantity --
// }
// console.log(fibonacciNumbers)
// /* Техническое задание

// Напиши программу, которая считает числа Фибоначчи и последовательно записывает эти числа в массив.

// Массив записан в переменную fibonacciNumbers. Первые два числа уже находятся в этом массиве.

// Вам нужно дополнить массив: найти следующие числа в последовательности и записать каждое из них по порядку в массив.

// Количество новых чисел в массиве ограничено. В переменной numbersQuantity указано сколько чисел нужно добавить в массив. Это значение не включает в себя два числа, которые изначально даны в массиве.

// */

//__________________________________________________________________________________________________________________________________________________________________________________________________________________

var indicators = ['сила', 'гибкость', 'выносливость', 'скорость', 'ловкость'];
var levels = [8, 15, 9, 12, 11];
var trainingTime = 30;



if (trainingTime < 30 || trainingTime == 30) {
    levels[indicators.indexOf('скорость')] = levels[indicators.indexOf('скорость')] + 3
    levels[indicators.indexOf('ловкость')] = levels[indicators.indexOf('ловкость')] + 3
    
}
if (trainingTime>30 && trainingTime<60 || trainingTime==60) {
    levels[indicators.indexOf('гибкость')] = levels[indicators.indexOf('гибкость')] + 3
}

if (trainingTime>60) {
    levels[indicators.indexOf('сила')] = levels[indicators.indexOf('сила')] + 2
    levels[indicators.indexOf('выносливость')] = levels[indicators.indexOf('выносливость')] + 2
}

console.log(levels)
console.log(outlines)


console.log(outlines)
/* Техническое задание

Напиши программу, которая будет следить за моими спортивными показателями.

В переменную indicators записан массив с моими спортивными характеристиками.

В массив levels записаны уровни каждого показателя. Каждый элемент этого массива соответствует по индексу элементу массива indicators.

В зависимости от времени тренировки, прокачиваются разные показатели. Время тренировки указано в минутах и записано в переменную trainingTime.

Если тренировка длится до 30 минут включительно, увеличивай скорость и ловкость на 3.

Если тренировка от 30 минут (не включая это значение) до одного часа (включая это значение), увеличивай гибкость на 3.

Если тренировка длится больше одного часа (не включая это значение), увеличивай силу и выносливость на 2.

*/
//__________________________________________________________________________________________________________________________________________________________________________________________________________________


var numbers = [12,12,15,7,1,15]
var uniqueNumbers = [];


uniqueNumbers = numbers.filter((elem) => numbers.indexOf(elem) === numbers.lastIndexOf(elem));
    

console.log(uniqueNumbers)


console.log(outlines)
// боженька дал нам стрелочные функции, которые я использую почти для всего, кроме их прямого назначения


// 
/* Техническое задание

Напишите программу, которая создаёт массив уникальных значений (тех, что не повторяются), взятых из первого массива.

Исходный массив записан в переменную numbers.

Переберите массив и последовательно добавьте уникальные значения в массив uniqueNumbers. Для добавления новых элементов в массив можете использовать метод
array.push().



*/


//__________________________________________________________________________________________________________________________________________________________________________________________________________________




var numbers = [1, 3, 5, 7, 9, 11];
numbers = numbers.reverse()
console.log(numbers)

console.log(outlines)
/* Техническое задание

Напишите программу, которая меняет массив так, чтобы его элементы шли в обратном порядке, задом наперёд.

Массив записан в переменную numbers.

Обратите внимание, что вам нужно поменять порядок элеменов в массиве numbers. Создавать другую переменную для новой версии массива не нужно.

*/
//__________________________________________________________________________________________________________________________________________________________________________________________________________________

var numbers = [3, 5, 15, 6, 2, 1];

const  puzirek = ((arr)=>{
    for (var index = 0; index < arr.length-1; index++) {
        for (var j=0; j<arr.length-1 -index; j++) {
            if (arr[j+1] < arr[j]) {
                let t = arr[j+1]; arr[j+1] = arr[j]; arr[j]=t;
            }   
        }
    }
    return arr
})
console.log(puzirek(numbers))


console.log(outlines)
/* Техническое задание

Напиши сортировку массива выбором.

Массив записан в переменную numbers.

Отсортируй значения в массиве по возрастанию, от самого маленького значения к наибольшему.
//__________________________________________________________________________________________________________________________________________________________________________________________________________________
*/
let zp = 1002000

var calculateSalary = function (money) {
    if (money < 100000 ) {
        return (Math.floor(money*((100-35)/100)))        
    } else{
        return (Math.floor(money*((100-45)/100)))        
    }
};

console.log(calculateSalary(zp))


console.log(outlines)
/* Техническое задание

Мяу! Мне нужна программа, которая от «грязной» зарплаты (зарплата до вычета налогов) посчитает примерную «чистую» зарплату (которая выдаётся на лапы).

Оформи программу в виде функции calculateSalary c одним параметром — величиной грязной зарплаты. Функция должна возвращать чистую зарплату.

Большая точность мне не нужна, просто считаем, что 35% величины грязной зарплаты составляют налоги, а если грязная зарплата больше или равна 100 тысячам, то налоги составляют уже 45%.

*/

//__________________________________________________________________________________________________________________________________________________________________________________________________________________


getYears = ((startYear, lastYear, sum)=>{
    const sumfunc = ((year)=>{
        let start = 0;
        year.toString().split("").forEach(element => {
            let plus = Math.floor(element)
            start = start + plus
        });
        return start
    })
    let arr = []
    for (let index = startYear; index < lastYear || index==lastYear; index++) {
        if (sumfunc(index) == sum) {
            arr.push(index)
        }
        
    }
    return arr;
})

console.log(getYears(2010, 2025, 9))


console.log(outlines)

// console.log(Math.floor(sum.toString().split("")[0]))

// // 2025 год
// // Складываем каждую цифру
// 2 + 0 + 2 + 5 = 9
// // Сумма равна 9, 2025 год нам подходит

// // 2019 год
// 2 + 0 + 1 + 9 = 12
// // Сумма равна 12, 2019 год не годится


/* Техническое задание

Мяу! Напиши программу getYears, которая будет возвращать массив с подходящими датами для Олимпиады.

Функция должна принимать на вход три параметра. Первый параметр — год, с которого нужно начать вести отсчёт (включительно). Второй — год, которым этот отсчёт надо закончить (включительно). Третий — число, которое обозначает сумму цифр в номере года.

Названия параметров могут быть любыми.

Годы в массиве должны быть расположены по возрастанию, от меньшего к большему.

*/




//__________________________________________________________________________________________________________________________________________________________________________________________________________________


getDayOfWeek = ((firstWeekDay, dayForSearh)=>{
    const days = ['понедельник', 'вторник', 'среда' , 'четверг', 'пятница', 'суббота', 'воскресенье']
    const start = days.indexOf(firstWeekDay) - 1
    return days[Math.floor((dayForSearh+start)%7)] 
})

console.log(getDayOfWeek('понедельник', 1))
console.log(getDayOfWeek('четверг', 32))


console.log(outlines)
// .indexOf()
/* Техническое задание

Мяу! Напиши для меня программу-календарь.

Оформи программу в виде функции getDayOfWeek. У неё должно быть два параметра: день недели, на который выпадает первое число месяца, и число, для которого нужно найти день недели в этом месяце.

Функция должна возвращать строку с названием для недели. Название должно быть написано с маленькой буквы в именительном падеже: 'понедельник', 'вторник' и так далее.

*/


calculateRoots = ((a, b ,c)=>{
    let d =(b*b)-(4*a*c)
    if (d<0) {
            return 'Корней нет'
    } else {
        if (d===0) {
            return `Корень равен ${-b/(2*a)}`
        }
    }
    return `Первый корень равен ${(-b+Math.sqrt(d))/(2*a)}, второй корень равен ${(-b-Math.sqrt(d))/(2*a)}`
})

console.log(calculateRoots(1,-2,-3))


console.log(outlines)
/* Техническое задание

Мяу! Напиши функцию calculateRoots, которая будет считать корни через дискриминант.

Формула дискриминанта выглядит так: b * b - 4 * a * c. Функция должна принимать на вход три параметра: a, b, c. Это коэффициенты из формулы дискриминанта.

Если полученное число меньше 0, функция должна возвращать строку 'Корней нет'.

Если результат равен 0, корень в уравнении один. Функция должна возвращать строку 'Корень равен ' + найденный корень. Формула корня в этом случае такая: -b / (2 * a).

А вот если дискриминант больше 0, корня два. Придётся посчитать каждый и добавить результат в строку. Формула для первого корня: (-b + √D) / (2 * a). Формула для второго корня: (-b - √D) / (2 * a). Функция должна возвращать строку 'Первый корень равен ' + первый корень + ', второй корень равен ' + второй корень.

*/

//__________________________________________________________________________________________________________________________________________________________________________________________________________________

var calculateDeposit = function (start, percent, howLong, capit) {
    if(!capit){
        return Math.floor((percent/12/100*start)*howLong+start)
    } else{
        let money = start
        for (let index = 0; (index+1) <= howLong; index++) {
            money += percent/12/100*money
        }
        return Math.floor(money)
    }
};
console.log(calculateDeposit(100000, 10, 2, true)) //101673


console.log(outlines)
/* Техническое задание

Мяу! Мне нужно посчитать, сколько я заработаю денег на вкладах с разными условиями. Оформи программу, как функцию calculateDeposit с четырьмя параметрами:

1. начальная сумма депозита;
2. процент годовых (число от 0 до 100);
3. срок вклада в месяцах;
4. с капитализацией процентов или нет (флаг с булевым значением).

Функция должна возвращать итоговую сумму депозита, округлённую до рублей с помощью Math.floor(). Название параметров используй любые.

Если вклад простой, то процент годовых делится на 12 и умножается на срок вклада, а затем начальная сумма увеличивается на посчитанный процент.

Вклад с капитализацией считается сложнее: каждый месяц к сумме депозита прибавляются накопленный за месяц процент годовых (не забывай делить процент на 12), а процент следующего месяца считается уже от увеличенной суммы депозита.

*/

//__________________________________________________________________________________________________________________________________________________________________________________________________________________

getProfitableDeposit = ((start, howLong, percentDefault, percentCapital)=>{

    const defaultget = (()=> Math.floor(percentDefault/12/100*start*howLong+start))

    const capitelGet = (()=>{
        let money = start
        for (let index = 0; (index+1) <= howLong; index++) {
            money += percentCapital/12/100*money
        }
        return Math.floor(money)    
    })

    if (defaultget() > capitelGet()) {
        return `Выбирай обычный вклад. Заработаешь ${defaultget()}`
    } else
    return `Выбирай капитализацию. Заработаешь ${capitelGet()}`
})

console.log(getProfitableDeposit(10000, 9, 7, 6.8))

console.log(outlines)

/* Техническое задание

Мяу! Мне нужна программа getProfitableDeposit для сравнения вкладов. У неё должно быть четыре параметра:

исходный размер депозита;
срок депозита в месяцах;
процентная ставка для депозита с простыми процентами;
процентная ставка для депозита с капитализацией процентов.

Программа должна рассчитать, сколько я заработаю с двух разных вкладов: с обычными процентами и с капитализацией. Затем программа должна сравнить результаты и вернуть подходящую строку:

'Выбирай обычный вклад. Заработаешь ' + доход от вклада.
'Выбирай капитализацию. Заработаешь ' + доход от вклада.

*/

//__________________________________________________________________________________________________________________________________________________________________________________________________________________

const arr = [{"name":"Василий","age":6},{"name":"Виктор","age":4},{"name":"Пётр","age":8},{"name":"Иннокентий","age":1}]

getSortedArray = ((arr, param) => arr.sort((a,b)=>a[param] < b[param] ? -1:1))

console.log(getSortedArray(arr, 'age'))

console.log(outlines)
/*

Создайте функцию getSortedArray. У неё должно быть два параметра. Первый — массив, который нужно отсортировать. Второй — имя ключа в объектах. Именно по значению этого ключа нужно будет делать сортировку.

Функция должна возвращать отсортированный массив объектов.

Значения в массиве должны увеличиваться от меньшего к большему.

*/

//__________________________________________________________________________________________________________________________________________________________________________________________________________________

getData = ((keys, wayIsIt)=>{
    newArr = []
    for (let index = 0; index <= wayIsIt.length-1; index++) {
        let obj = new Object()
        for (let j = 0; j < keys.length; j++) {
            if(wayIsIt[index][j]){
                obj[keys[j]] = wayIsIt[index][j]
            }
        }
        newArr.push(obj)
    }
    return newArr
})

keys = ['имя', 'любимый цвет', 'любимое блюдо'];
thinhs = [
    ['Василий', 'красный', 'борщ'],
    ['Мария'],
    ['Иннокентий', 'жёлтый', 'пельмени', '18', 'Азовское']
];

console.log(getData(keys, thinhs))

console.log(outlines)
/*

Создайте функцию getData. У неё должно быть два параметра. Первый параметр — массив с ключами. Второй — массив с массивами данных.

Функция должна собрать объект для каждого массива значений. Каждый из этих объектов должен быть записан в массив. Именно этот массив с объектами должна вернуть функция getData.

Каждому элементу из массива ключей подходит элемент с таким же индексом в массиве значений.

Есть один нюанс: значений может оказаться больше или меньше, чем ключей.

Если значений не хватает, то создавать пустой ключ не надо. А если значений больше, то их не нужно включать в объект — для них нет ключей.

*/
