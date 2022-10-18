'use strict';

let number;

function process(x) {

    let random = Math.ceil(Math.random() * 100);

    function counter() {

        let ask = prompt('Угадай число от 1 до 100');

        x = parseInt(ask);

        switch (true) {

            case ask === null:
                alert('Игра окончена');
                return;

            case !x:
                alert('Введи число!');
                break;

            case x > random:
                alert('Загаданное число меньше');
                break;

            case x < random:
                alert('Загаданное число больше');
                break;

            case x === random:
                alert('Поздравляю, Вы угадали!!!');
                return;

        }
        counter();
    }


    counter();
}
process(number);