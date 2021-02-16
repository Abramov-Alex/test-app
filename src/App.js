import './App.css';

function App() {

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

    // const randSimbol = ["Молоко", 77, 11, "Мед", -88];
    // function check(randSimbol) {
    //     for (let i = 0; i < randSimbol.length; i++) {
    //         if (isNaN(randSimbol[i])) {
    //             console.log(`${randSimbol[i]} - строка`)
    //         } else {
    //             console.log(`${randSimbol[i]} - число`)
    //         }
    //     }
    // }
    // check(randSimbol)

    // const randSimbol = [10.5, 15, 112, 77.6];
    // function check() {
    //     for (let i = 0; i < randSimbol.length; i++) {
    //         randSimbol[i] = randSimbol[i].toFixed(2)
    //         console.log(randSimbol[i])
    //     };
    // }
    // check()

    // const numberArray = [34.82, 12.90, 17.01, 78.51];
    // function check(numberArray, metod) {
    //     for (let i = 0; i < numberArray.length; i++) {
    //         if (metod === 'round') {
    //             numberArray[i] = Math.round(numberArray[i])
    //             console.log(numberArray[i])
    //         } else if (metod === 'ceil') {
    //             numberArray[i] = Math.round(numberArray[i])
    //             console.log(numberArray[i])
    //         } else if (metod === 'floor') {
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

    return (
        <>

        </>
    );
}

export default App;
