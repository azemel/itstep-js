// TODO:
// - Таймер...
// - IndexedDb для храниния результатов
// - Звук

// Скрывать карточки

// load - как только построится DOM + загрузятся все src ресурсы (картинки, скрипты)
// DOMContentLoaded - как только построится DOM


const N = 2;
const M = 3;
const width = 150;
const height = 200;


// Генерируем массив Длиной N * N, в котором по две копии всех чисел от 0 до N * N / 2
// 0, 1, 2, 3, 4, 5, 6, 7
// 0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5 
// 0, 0, 1, 1, 2, 2, 3, 3 ..

// Отсортировать его случайно.

const generateValues = (n, m) =>
  createArray(index => [Math.floor(index / 2), Math.random()]) (n * m)
  .sort((a, b) => a[1] - b[1])
  .map(a => a[0]);

const generateState = (n, m) => createArray(() => false) (n * m);




let values = [];
let state = [];
// 1 0 0 0
// 1 0 0 0
// 0 0 0 1 
// 0 0 0 1



window.addEventListener("load", () => {
  // 1 - создать грид элемент
  // 2 - создать n*n карточек-div

  values = generateValues(N, M);
  state = generateState(N, M);

  console.log(values);

  const grid = $("div", { 
      className: "grid",
      style: {
        gridTemplateRows: "repeat(" + M + ", " + height + "px)", // repeat(4, 200px)
        gridTemplateColumns: "repeat(" + N + ", " + width + "px)",
      } 
    }, 
    ...createArray(createCard)(N * M)
  );

  document.body.append(grid);

});

const createCard = (index) => {
  const div = $("div", { 
    className: "card card_closed",
    dataset: {
      index: index,
    },
    onclick:  handleClick, // addEventListener("click", () => ...)
  }, 
    $("div", { className: "card__face card__front"}, String(values[index])),
    $("div", { className: "card__face card__back"}),
  );

  // div.dataset.key = "value";

  return div;
}

let pair = [];

const openCard = (cardDiv) => {
  cardDiv.classList.add("card_open");
  cardDiv.classList.remove("card_closed");
  pair.push(cardDiv);
}

const closeCard = (cardDiv) => {
  cardDiv.classList.add("card_closed");
  cardDiv.classList.remove("card_open");
  // pair.splice(pair.indexOf(cardDiv), 1);
}

const extractCardIndex = (cardDiv) => parseInt(cardDiv.dataset.index);

const handleClick = (event) => {
  // открыто ноль карточек - открываем
  // открыта одна - если щелкаем на уже открытую, то ничего, иначе открываем вторую
  // открыто две - закрываем обе открытые, открываем ту на которую щелкнули

  console.log("before", pair, state);

  const cardDiv = event.currentTarget;
  const cardIndex = extractCardIndex(cardDiv);


  // TODO: Не обрабатывать нажатие на карточку, для которой запланировано закртие, 
  // но обрабатывать нажатие на правильную карточку.
  if (state[cardIndex]) {
    return;
  }

  const isOpen = pair.includes(cardDiv); // cardDiv.classList.contains("card_open"); 

  if (!isOpen) {
    openCard(cardDiv)
  }

  if (pair.length === 2) {
    const indexes = pair.map(extractCardIndex);
    const [value1, value2] = indexes.map(index => values[index]);

    console.log(value1, value2, value1 === value2);

    if (value1 === value2) {
      indexes.forEach(index => state[index] = true);
      if (state.every(flag => flag)) {
        console.log("YOU WIN");
      }
      
      pair = [];
    } else {
      // pair.slice().forEach(closeCard);

      const pairToClose = pair.slice();

      setTimeout(() => {
        pairToClose.forEach(cardDiv => {
          const index =  extractCardIndex(cardDiv);
          if (!state[index]) {
            closeCard(cardDiv);
          } 
        });
      }, 600);

      pair = [];
    }

  }

  console.log("after", pair, state);

}



