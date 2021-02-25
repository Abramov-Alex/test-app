import './App.css';

function AppJS() {

    // let cars = ['Audi', 'Ford', 'Mazda', 'Honda']
    // let speed = [100, 150, 200, 250]
    // document.write(cars[0], speed[0] + '<p>')

    // let fruit = ['апельсин', 'банан', 'груша']
    // console.log(fruit);
    // console.log(fruit.length);
    // const endFruit = 'яблоко'
    // const startFruit = 'грейпфрут'
    // fruit.push(endFruit)
    // fruit.unshift(startFruit)
    // console.log(fruit);
    // console.log(fruit.length);
    // console.log(fruit.pop());
    // console.log(fruit.shift());
    // console.log(fruit);

    // const friends = [" Алексей", " Вячеслав", " Григорий", " Настя", " Николай", " Павел", " Любовь", " Егор", " Лэйла"];
    // for (let i = friends.indexOf(friends[2]); i <= 6; i++) {
    //     console.log(friends[i])
    // }

    // for (let i = 1; i < 8; i++) {
    //     console.log(`${i} в квадрате = ${i*i}`)
    // }

    // const age = prompt('Сколько Вам лет?')
    // if (age >= 20) {
    //     alert('Вы взрослый')
    // } else if (age === '') {
    //     alert('Вы не ввели возраст')
    // } else {
    //     alert('Вы молодой')
    // }

    // let age = prompt('Сколько Вам лет?')
    // let year = prompt('Какой год?')
    // for (age; age > 0; age--,year--) {
    //     console.log(age, year)
    // }

    // let string = prompt('напишите слово')
    // function text(string) {
    //     return string.length
    // }
    // const res = text(string)
    // console.log(res)

    // const userAnswer = prompt('Да или нет?')
    // const answer = 'да'
    // if (userAnswer.toLowerCase() === answer) {
    //     console.log('ok')
    // } else {
    //     console.log('error')
    // }

    // const mySite = 'https://webpupil.ru'
    // function check(myString) {
    //     if (myString.indexOf('http://') === -1) {
    //         console.log('error');
    //     } else {
    //         console.log('ok');
    //     }
    // }
    // check(mySite)

    // const myStr = "Хороший день сегодня";
    // const day = myStr.slice(8, 12)
    // console.log(day)

    // const forTesting = "8 пингвинов и 9 карасей";
    // function test() {
    //     const reg = /\d/
    //     const res = forTesting.search(reg)
    //     if (res === 0) {
    //         console.log('ok')
    //     } else {
    //         console.log('error')
    //     }
    // }
    // test(forTesting)

    // const text = 'Иван вчера потерял свою кредитку, ее номер 1178-9087-2384-8787. Поэтому он пошел в банк и описал ситуацию. Там пошли ему навстречу и выдали новую кредитку под номером: 1103-8899-0811-1722'
    // const cardNumber = /[0-3]{4}-\d{4}-\d{4}-\d{4}/g
    // const search = text.match(cardNumber)
    // console.log(search)

    // const tel = "8/927/31/10/765";
    // const sign = "-";
    // function numberReplace() {
    //     const reg = /\//g
    //     const replace = tel.replace(reg, sign)
    //     console.log(replace)
    // }
    // numberReplace()

    // const randSymbol = ["Молоко", 77, 11, "Мед", -88];
    // function check(randSymbol) {
    //     for (let i = 0; i < randSymbol.length; i++) {
    //         if (isNaN(randSymbol[i])) {
    //             console.log(`${randSymbol[i]} - строка`)
    //         } else {
    //             console.log(`${randSymbol[i]} - число`)
    //         }
    //     }
    // }
    // check(randSymbol)

    // const randSymbol = [10.5, 15, 112, 77.6];
    // function check() {
    //     for (let i = 0; i < randSymbol.length; i++) {
    //         randSymbol[i] = randSymbol[i].toFixed(2)
    //         console.log(randSymbol[i])
    //     };
    // }
    // check()

    // const numberArray = [34.82, 12.90, 17.01, 78.51];
    // function check(numberArray, method) {
    //     for (let i = 0; i < numberArray.length; i++) {
    //         if (method === 'round') {
    //             numberArray[i] = Math.round(numberArray[i])
    //             console.log(numberArray[i])
    //         } else if (method === 'ceil') {
    //             numberArray[i] = Math.round(numberArray[i])
    //             console.log(numberArray[i])
    //         } else if (method === 'floor') {
    //             numberArray[i] = Math.round(numberArray[i])
    //             console.log(numberArray[i])
    //         }
    //     }
    // }
    // check(numberArray, 'round')
    // check(numberArray, 'ceil')
    // check(numberArray, 'floor')

    // const cars = ['Honda', 'Mazda', 'Audi', 'Ford']
    // const upperCars = cars.map(car => {
    //     return car.toUpperCase()
    // })
    // console.log(upperCars)

    // const randomArray = new Array(10);
    // function check(from, to, rand) {
    //     for (let i = 0; i < rand.length; i++) {
    //         rand[i] = Math.floor((Math.random() * (to - from + 1)) + from);
    //         console.log(rand[i])
    //     }
    //     console.log(rand)
    // }
    // check(40, 50, randomArray)

    // const date = new Date()
    // const date2 = new Date(1000 * 60 * 60 * 24);
    // let hours = date.getHours()
    // if (hours < 10) {
    //     hours = '0' + hours
    // }
    // let minutes = date.getMinutes()
    // if (minutes < 10) {
    //     minutes = '0' + minutes
    // }
    // let seconds = date.getSeconds()
    // if (seconds < 10) {
    //     seconds = '0' + seconds
    // }
    // console.log(`${hours}:${minutes}:${seconds}`)
    // console.log(date)
    // console.log(date2)

    //------------------------------------------------------------------------

    // const arr = ['1', '3', '2', '4']
    // const res = arr.map((el) => parseInt(el)).filter((num) => num % 2)
    // console.log(res)
    // console.log(arr)

    // const arr = ['1', '3', '2', '4']
    // for (let num in arr) {
    //     console.log(num)
    // }
    // const res = arr.map((el) => parseInt(el)).filter((numb) => (numb%2))
    // console.log(res)

    // function count(start = 10, end = 0) {
    //     console.log(`Начиная с ${start} по ${end}`)
    // }
    // count(22, 11)

    // const count = (start = 10, end = 0) => console.log(`Начиная с ${start} по ${end}`)
    // count(22, 11)

    // function max(a, b, ...numbers) {
    //     console.log(a, b, numbers);
    // }
    // max(1, 2, 0, 3, 4);

    // const dict = {
    //     duck: 'quack',
    //     dog: 'woff',
    //     mouse: 'quack'
    // };
    // const {duck, ...other} = dict;
    // console.log(other)

    // function Animal(name, voice) {
    //     this.name = name;
    //     this.voice = voice;
    // }
    // Animal.prototype.say = function () {
    //     console.log(this.name, 'say', this.voice);
    // }
    // const dog = new Animal('dog', 'woof');
    // const cat = new Animal('cat', 'meow');
    // dog.say();
    // cat.say();

    // class Animal {
    //     constructor(name, voice) {
    //         this.name = name;
    //         this.voice = voice;
    //     }
    //     say() {
    //         console.log(this.name, 'say', this.voice);
    //     }
    // }
    // class Bird extends Animal {
    //     constructor(name, voice, canFly) {
    //         super(name, voice);
    //         this.canFly = canFly;
    //     }
    // }
    // const dog = new Animal('dog', 'woof');
    // const cat = new Animal('cat', 'meow');
    // const duck = new Animal('duck', 'quack', true);
    // dog.say();
    // cat.say();
    // duck.say();


    return (
        <>

        </>
    );
}

export default AppJS;
