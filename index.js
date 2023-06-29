var productsData = {
  category1: [
    { name: 'Товар 1', info: 'Інформація про товар 1' },
    { name: 'Товар 2', info: 'Інформація про товар 2' },
    { name: 'Товар 3', info: 'Інформація про товар 3' }
  ],
  category2: [
    { name: 'Товар 4', info: 'Інформація про товар 4' },
    { name: 'Товар 5', info: 'Інформація про товар 5' },
    { name: 'Товар 6', info: 'Інформація про товар 6' }
  ],
  category3: [
    { name: 'Товар 7', info: 'Інформація про товар 7' },
    { name: 'Товар 8', info: 'Інформація про товар 8' },
    { name: 'Товар 9', info: 'Інформація про товар 9' }
  ]
};

function showProducts(category) {
  var productList = document.getElementById('product-list');
  productList.innerHTML = ''; // Очистити список товарів

  // Додати товари до списку
  productsData[category].forEach(function (product) {
    var li = document.createElement('li');
    li.innerText = product.name;
    li.onclick = function () {
      showProductInfo(product);
    };
    productList.appendChild(li);
  });
}

function showProductInfo(product) {
  var productInfo = document.getElementById('product-info');
  productInfo.innerHTML = ''; // Очистити інформацію про товар

  // Додати інформацію про товар
  var info = document.createElement('p');
  info.innerText = product.info;
  productInfo.appendChild(info);

  // Додати кнопку "купити"
  var buyButton = document.createElement('button');
  buyButton.innerText = 'Купити';
  buyButton.onclick = function () {
    alert('Товар куплений');
    resetProgram();
  };
  productInfo.appendChild(buyButton);
}

function resetProgram() {
  var productList = document.getElementById('product-list');
  var productInfo = document.getElementById('product-info');

  productList.innerHTML = ''; // Очистити список товарів
  productInfo.innerHTML = ''; // Очистити інформацію про товар
}

// Отримуємо кнопку "Купити" за ідентифікатором
const buyButton = document.getElementById('buy-button-1');

// Додаємо обробник подій до кнопки "Купити"
buyButton.addEventListener('click', showOrderForm);

// Функція для показу форми оформлення замовлення
function showOrderForm() {
  // Отримуємо елемент форми за його ідентифікатором
  const orderForm = document.getElementById('order-form');

  // Показуємо форму оформлення замовлення
  orderForm.style.display = 'block';
}

// Отримуємо форму за ідентифікатором
const orderForm = document.getElementById('order-form');

// Додаємо обробник подій до форми
orderForm.addEventListener('submit', handleOrderSubmission);

// Функція для обробки подання замовлення
function handleOrderSubmission(event) {
  event.preventDefault(); // Зупиняємо стандартну поведінку форми

  // Отримуємо значення полів форми
  const name = document.getElementById('name').value;
  const city = document.getElementById('city').value;
  const novaPoshta = document.getElementById('nova-poshta').value;
  const paymentMethod = document.getElementById('payment-method').value;
  const quantity = document.getElementById('quantity').value;
  const comment = document.getElementById('comment').value;

  // Перевіряємо, чи всі обов'язкові поля заповнені
  if (name && city && novaPoshta && paymentMethod && quantity) {
    // Виводимо інформацію про замовлення на сторінку
    const orderInfo = document.getElementById('order-info');
  } else {
    // Виводимо помилку на сторінку, якщо не всі поля заповнені
    const errorInfo = document.getElementById('error-info');
    errorInfo.textContent = 'Будь-ласка, заповніть всі обов';
  }
}
function displayTable() {
  var form = document.getElementById("registrationForm");
  var tableContainer = document.getElementById("tableContainer");

  // Створюємо таблицю
  var table = document.createElement("table");
  var tbody = document.createElement("tbody");

  // Додаємо рядки з даними
  var row1 = createTableRow("Ім'я:", form.firstName.value);
  var row2 = createTableRow("Прізвище:", form.lastName.value);
  var row3 = createTableRow("Дата народження:", form.birthdate.value);
  var row4 = createTableRow("Стать:", form.gender.value);
  var row5 = createTableRow("Місто:", form.city.value);
  var row6 = createTableRow("Адреса:", form.address.value);
  var languages = getSelectedLanguages(form.languages);
  var row7 = createTableRow("Мови, якими володіє:", languages);

  // Додаємо рядки до таблиці
  tbody.appendChild(row1);
  tbody.appendChild(row2);
  tbody.appendChild(row3);
  tbody.appendChild(row4);
  tbody.appendChild(row5);
  tbody.appendChild(row6);
  tbody.appendChild(row7);

  // Додаємо tbody до таблиці
  table.appendChild(tbody);

  // Виводимо таблицю у контейнер
  tableContainer.innerHTML = "";
  tableContainer.appendChild(table);
}

function createTableRow(label, value) {
  var row = document.createElement("tr");
  var labelCell = document.createElement("td");
  var valueCell = document.createElement("td");

  labelCell.textContent = label;
  valueCell.textContent = value;

  row.appendChild(labelCell);
  row.appendChild(valueCell);

  return row;
}

function getSelectedLanguages(checkboxes) {
  var selectedLanguages = [];

  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      selectedLanguages.push(checkboxes[i].value);
    }
  }

  return selectedLanguages.join(", ");
}