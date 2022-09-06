function formatDate(date) {
    const difference = new Date() - date;
    if (difference < 1000) {
        return "прямо сейчас";
    }

    const differenceInSeconds = Math.floor(difference / 1000);
    if (differenceInSeconds < 60) {
        return differenceInSeconds + "сек. назад";
    }

    const differenceInMinutes = Math.floor(difference / 60000);
    if (differenceInMinutes < 60) {
        return differenceInMinutes + "мин. назад";
    }

    else {
        dayDate = date.getDate();
        if (dayDate < 10) {
            dayDate = '0' + dayDate;
        }
    
        monthDate = date.getMonth() + 1;
        if (monthDate < 10) {
            monthDate = '0' + monthDate;
        }

        dayHours = date.getHours();
        if (dayHours < 10) {
            dayHours = '0' + dayHours;
        }

        dayMinutes = date.getMinutes();
        if (dayMinutes < 10) {
            dayMinutes = '0' + dayMinutes;
        }
    
        return `${dayDate}.${monthDate}.${date.getFullYear()}, ${dayHours}:${dayMinutes}`;
    }

}

console.log( formatDate(new Date(new Date - 86400 * 1000)) );


