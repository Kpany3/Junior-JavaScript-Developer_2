function getMove() {
    var startMove = document.getElementById('startMove').value;//получаем введенное значение
    const rowChees = [1, 2, 3, 4, 5, 6, 7, 8];
    const cellChees = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    if (startMove.length > 2) {//проверяем длину строки
        alert('Введите значение в формате B2');
        return;
    }

    if (+startMove[0]) {//проверяем что первым идет буква а не число
        alert('Первым символом должны быть буква');
        return;
    }
    startMove = startMove.toUpperCase(); //делаем заглавной букву
    if (!(rowChees.includes(+startMove[1]))) {//поиск введной цифры в массиве
        alert('Число должно быть целове и в диапазоне от 1 до 8 включительно');
        return;
    }

    if (!(cellChees.includes(startMove[0]))) {//поиск введенной буквы в массиве
        alert('Буква должна быть в диапазоне латинского алфавита от A до H');
        return;
    }
    var rowIndex = rowChees.indexOf(+startMove[1]);//порядковый номер цифры в массиве
    var cellIndex = cellChees.indexOf(startMove[0]);//порядковый номер буквы в массиве
    var probablyMove = []; //массив с возможными ходами

    //далее возможные изменения индексов на доске относительно начало хода, по вертикали на 1 и 2 пункта, и по горизонтали тоже 1 и 2 пункта
    var rowIndexUp1 = rowIndex + 1;
    var rowIndexUp2 = rowIndex + 2;
    var rowIndexDown1 = rowIndex - 1;
    var rowIndexDown2 = rowIndex - 2;
    var cellIndexUp1 = cellIndex + 1;
    var cellIndexUp2 = cellIndex + 2;
    var cellIndexDown1 = cellIndex - 1;
    var cellIndexDown2 = cellIndex - 2;

    if (rowChees[rowIndexUp2]) {//проверяем есть ли в массиве элемент с вычисленным порядковы номером
        if (cellChees[cellIndexUp1]) {//проверяем есть ли в массиве элемент с вычисленным порядковы номером
            probablyMove.push(cellChees[cellIndexUp1] + rowChees[rowIndexUp2]);//вставляем в массив возможный ход
        }
        if (cellChees[cellIndexDown1]) {//проверяем есть ли в массиве элемент с вычисленным порядковы номером
            probablyMove.push(cellChees[cellIndexDown1] + rowChees[rowIndexUp2]);//вставляем в массив возможный ход
        }
    }

    if (rowChees[rowIndexDown2]) {//проверяем есть ли в массиве элемент с вычисленным порядковы номером
        if (cellChees[cellIndexUp1]) {//проверяем есть ли в массиве элемент с вычисленным порядковы номером
            probablyMove.push(cellChees[cellIndexUp1] + rowChees[rowIndexDown2]);//вставляем в массив возможный ход
        }
        if (cellChees[cellIndexDown1]) {//проверяем есть ли в массиве элемент с вычисленным порядковы номером
            probablyMove.push(cellChees[cellIndexDown1] + rowChees[rowIndexDown2]);//вставляем в массив возможный ход
        }
    }

    if (cellChees[cellIndexUp2]) {//проверяем есть ли в массиве элемент с вычисленным порядковы номером
        if (rowChees[rowIndexUp1]) {//проверяем есть ли в массиве элемент с вычисленным порядковы номером
            probablyMove.push(cellChees[cellIndexUp2] + rowChees[rowIndexUp1]);//вставляем в массив возможный ход
        }
        if (rowChees[rowIndexDown1]) {//проверяем есть ли в массиве элемент с вычисленным порядковы номером
            probablyMove.push(cellChees[cellIndexUp2] + rowChees[rowIndexDown1]);//вставляем в массив возможный ход
        }
    }

    if (cellChees[cellIndexDown2]) {//проверяем есть ли в массиве элемент с вычисленным порядковы номером
        if (rowChees[rowIndexUp1]) {//проверяем есть ли в массиве элемент с вычисленным порядковы номером
            probablyMove.push(cellChees[cellIndexDown2] + rowChees[rowIndexUp1]);//вставляем в массив возможный ход
        }
        if (rowChees[rowIndexDown1]) {//проверяем есть ли в массиве элемент с вычисленным порядковы номером
            probablyMove.push(cellChees[cellIndexDown2] + rowChees[rowIndexDown1]);//вставляем в массив возможный ход
        }
    }

    document.getElementById('result').innerHTML = probablyMove;//вывод результата в блок
    alert("Возможные ходы: " + probablyMove);// модальное окно

}
