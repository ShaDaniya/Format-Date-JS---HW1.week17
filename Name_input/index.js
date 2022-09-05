//не стала удалять логи, чтобы через месяц я сама смогла с этом разобраться

const nameInput = document.getElementById('nameInput');

        function btnNameInput() {
            //console.log(nameInput.value);
            //console.log(typeof (nameInput.value));

            const fullName = nameInput.value;
            //console.log(fullName);
            const fullNameDeleteSpace = fullName.replace(/^ +| +$|( ) +/g, "$1");
            //console.log(fullNameDeleteSpace);
            const fullNameDeleteNumbers = fullNameDeleteSpace.replace(/[^a-zа-яё\s]/gi, '');
            //console.log(fullNameDeleteNumbers);

            const [surnameName, nameName, middleNameName] = fullNameDeleteNumbers.split(' ');
            //console.log(surnameName, nameName, middleNameName);

            const name = nameName;
            //console.log(nameName);
            const nameToLowerCase = nameName.toLowerCase();
            const nameBig = `${nameToLowerCase[0].toUpperCase()}${nameToLowerCase.slice(1)}`;
            document.getElementById('name').value = nameBig;

            const surname = surnameName;
            //console.log(surnameName);
            const surnameToLowerCase = surnameName.toLowerCase();
            //console.log(surnameToLowerCase);
            const surnameBig = `${surnameToLowerCase[0].toUpperCase()}${surnameToLowerCase.slice(1)}`;
            //console.log(surnameBig);
            document.getElementById('surname').value = surnameBig;

            const middleName = middleNameName;
            //console.log(middleName);
            const middleNameToLowerCase = middleNameName.toLowerCase();
            //console.log(middleNameToLowerCase);
            const middleNameBig = `${middleNameToLowerCase[0].toUpperCase()}${middleNameToLowerCase.slice(1)}`;
            //console.log(middleNameBig);
            document.getElementById('middleName').value = middleNameBig;

        }