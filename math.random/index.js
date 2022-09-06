//тут вроде бы получилось, но, как и в задании в имя-фамилия-отчество, кажется, что мой вариант решения, как у дауненка, который все делает мелкими шагами, хотя наверное это можно сделать оной строчкой =)

const btnGenerate = document.getElementById('generate');

        function generateRandom() {
            const arrRandom = [];
            for (let i = 0; i < 10; i++)
                arrRandom[i] = Math.floor(Math.random() * 21 - 10);
            console.log(arrRandom);
            document.querySelector('input').value = arrRandom;

            arrRandom.sort(function (a, b) {
                return a - b;
            });
            console.log(arrRandom);

            //минимальное
            minNumber = arrRandom.shift();
            console.log(minNumber);

            document.getElementById('minNumber').value = minNumber;

            //максимальное
            maxNumber = arrRandom.pop();
            console.log(maxNumber);

            document.getElementById('maxNumber').value = maxNumber;

            //сумма элементов
            const sumNumbers = arrRandom.map(i => x += i, x = 0).reverse()[0];
            console.log(sumNumbers);

            document.getElementById('sumNumbers').value = sumNumbers;

            //среднее арифметическое
            const middleMath = sumNumbers / 10;
            console.log(middleMath);

            document.getElementById('middleMath').value = middleMath;

            //произведение элементов
            let multNumbers = 1;
            for (let i = 0; i < arrRandom.length; i++) {
                multNumbers *= arrRandom[i];
            }

            console.log(multNumbers);

            document.getElementById('multNumbers').value = multNumbers;
        }

        btnGenerate.addEventListener('click', generateRandom);