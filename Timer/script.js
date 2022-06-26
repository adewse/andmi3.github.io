// создаём переменную, куда будем заносить результаты вычислений
let res = {};

// создаём переменную для тэга, в который буднм выводить сам результат
let first;

// а это интервал для обновления данных
let interval = setInterval(reload, 1000);

//создаём переменную для входящих данных времени в секундах
let date = {
  'fdtto': `${document.querySelector('span#fdtto').innerText}`;
}

// добавляем функцию как добавления данных, так и их обновления
function reload(){                   

  // это так называемая "отправная точка", то есть 14 декабря 2021 года, имеет постоянное значение, приводим её значение к числовому формату
  date.fdtto = Number(date.fdtto);
  // тут в консоль выводим её значение
  console.log(`Отправная точка: ${date.fdtto}`);

  // а это, собственно секунды с 1 января 1970 года до сегодняшнего дня
  date.realtime = document.querySelectorAll('span.time')[0].innerText;
  // тут так же приводим к числовому формату
  date.realtime = Number(date.realtime);
  // и выводим в консоль значение, но это не обязательно, я её чекал просто
  console.log(`реальное время: ${date.realtime}`);

  // а тут самое интнресное  начинаем подсчёт данных, зная "отправную точку" и сегодняшний момент  функция смешная  Math.trunc (маф труньк) аххахахаххах  в общем она избавляет числа от мноооожества имволов после запятой
  res.years = `${(date.realtime - date.fdtto) / 60 / 60 / 24 / 30 / 12)}`;
  res.month = `${((date.realtime - date.fdtto) / 60 / 60 / 24 / 30)}`;
  res.weeks = `${((date.realtime - date.fdtto) / 60 / 60 / 24 / 7)}`;
  res.days = `${((date.realtime - date.fdtto) / 60 / 60 / 24)}`;
  res.hours = `${((date.realtime - date.fdtto) / 60 / 60)}`;
  res.minutes = `${((date.realtime - date.fdtto) / 60)}`;
  res.seconds = `${(date.realtime - date.fdtto)}`;

  // и здесь, собственно, ищем поле вывода данных и выводим на экран значения
  first = document.querySelector('span#first');
  first.innerText = `\n\nМы вмефти: \n${res.years} год/года/лет\n${res.month} месяц/месяца/месяцев\n${res.weeks} неделю/недели/недель\n${res.days} день/дня/дней\n${res.hours} час/часа/часов\n${res.minutes} минуту/минуты/минут\n${res.seconds} секунду/секунды/секунд`;

}

/*
console.log(date.D);

date.D = Number(date.D);

console.log(date.D);

date.D = date.D - 10;

console.log('-10');

console.log('=');

console.log(date.D);
*/
