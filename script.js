'use strict';

let random;

function counter() {

    let ask = prompt('Угадай число от 1 до 100');
    let number = parseInt(ask);

    switch (true) {

        case ask === null:
            alert('Игра окончена');
            break;

        case !number:
            alert('Введи число!');
            counter();
            break;

        case number > random:
            alert('Загаданное число меньше');
            counter();
            break;

        case number < random:
            alert('Загаданное число больше');
            counter();
            break;

        case number === random:
            alert('Поздравляю, Вы угадали!!!');
            break;

    }






}
function process() {

    random = Math.ceil(Math.random() * 100);

    counter();


}
process();