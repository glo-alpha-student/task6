'use strict';

let random = Math.ceil(Math.random() * 100);

function process() {

    let ask = +prompt('Угадай число от 1 до 100');

    function counter(num) {
        switch (num === ask) {
            case num > random:
                alert('Загаданное число меньше');
                break;
            case num < random:
                alert('Загаданное число больше');
                break;
            case num === random:
                alert('Поздравляю, Вы угадали!!!');
                break;
            default:
                alert('Введи число!');
                process();
        }

        let confirmThis = confirm('Ввести новый вариант?');

        switch (confirmThis) {
            case true:
                process();
                break;
            default: alert('Игра окончена');
        }

    }
    counter(ask);

}
process();
