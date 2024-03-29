// 1) Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора, найти минимальное число в массиве, решение задание должно состоять из одной строки
console.log(Math.min(...[1, 5, 7, 9]));
// 2) Напишите функцию createCounter, которая создает счетчик и возвращает объект с двумя методами: increment и decrement. Метод increment должен увеличивать значение счетчика на 1, а метод decrement должен уменьшать значение счетчика на 1. Значение счетчика должно быть доступно только через методы объекта, а не напрямую.
const createCounter = (count) => {
  return {
    count: count,
    increment: function () {
      this.count++;
    },
    decrement: function () {
      this.count--;
    },
  };
};
const counter = createCounter(6);
console.log(counter);
counter.increment();
console.log(counter.count);
counter.decrement();
console.log(counter.count);

// 3) Напишите рекурсивную функцию findElementByClass, которая принимает корневой элемент дерева DOM и название класса в качестве аргументов и возвращает первый найденный элемент с указанным классом в этом дереве.
const rootElement = document.getElementById("root");

const findElementByClass = (root, myclass) => {
  const rootElements = [...root.childNodes].filter(
    (item) => item.nodeName !== "#text"
  );
  for (let i = 0; i < rootElements.length; i++) {
    if (rootElements[i].classList.contains(myclass)) {
      return rootElements[i];
    }else if (rootElements[i].childNodes.length > 0) {
      return findElementByClass(rootElements[i],myclass);
    }
  }
};

const targetElement = findElementByClass(rootElement, "five");
console.log(targetElement);
