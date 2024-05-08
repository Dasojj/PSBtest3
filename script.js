let n, b, m, t, r;
let foodLeft;
let totalTime = 0;

function appendLog(message) {
    const log = document.getElementById("log");
    const entry = document.createElement("p");
    entry.textContent = message;
    log.appendChild(entry);
}

function feedCats() {
    n = prompt("Введите количество котиков (n):");
    b = prompt("Сколько корма нужно одному котику (b):");
    m = prompt("Вместимость миски (m):");
    t = prompt("Время на поедание корма одним котиком (t, в секундах):");
    r = prompt("Время на наполнение миски (r, в секундах):");

    foodLeft = m;
    feedNextCat(1);
}

function feedNextCat(catNumber) {
    if (catNumber > n) {
        appendLog(`Все котики накормлены. Общее время: ${totalTime} секунд.`);
        return;
    }

    if (foodLeft < b) {
        appendLog(`Бабушка наполняет миску...`);
        setTimeout(() => {
            foodLeft = m;
            appendLog(`Миска наполнена.`);
            feedNextCat(catNumber);
        }, r * 1000);
        totalTime += Number(r);
    } else {
        appendLog(`Котик под номером ${catNumber} подошел к миске.`);
        setTimeout(() => {
            appendLog(`Котик под номером ${catNumber} отошел от миски.`);
            foodLeft -= b;
            totalTime += Number(t);
            feedNextCat(catNumber + 1);
        }, t * 1000);
    }
}
