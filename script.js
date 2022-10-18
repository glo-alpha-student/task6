'use strict';

let random = Math.ceil(Math.random() * 100);


function process() {

    let ask = +prompt('Угадай число от 1 до 100');

    function counter(num) {

        switch (true) {
            case num > random:
                alert('Загаданное число меньше');
                console.log(random);
                break;
            case num < random:
                alert('Загаданное число больше');
                console.log(random);
                break;
            case num === random:
                alert('Поздравляю, Вы угадали!!!');
                console.log(random);
                break;
            default:
                alert('Введи число!');
                process();
        }

        process();
    }

    switch (true) {
        case true:
            counter(ask);
            break;
        default: alert('Игра окончена');
    }

}
process();
