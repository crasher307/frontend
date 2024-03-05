### [Задание 1 (тайминг 30 минут)](z1.html)

Вы разрабатываете прототип веб-приложения для чтения новостей. Статьи "хранятся" во внутреннем массиве
(имитируя базу данных). Когда пользователь нажимает на кнопку "Загрузить новости", ваш код должен
имитировать задержку, словно происходит реальная загрузка данных из внешнего источника, а после этой
задержки — отображать новости на странице.

1. Создайте базовую HTML-структуру с кнопкой для загрузки новостей и контейнером для их отображения.
2. Реализуйте функцию fetchNews(), возвращающую промис. Эта функция должна имитировать
   задержку в 2 секунды перед успешным возвращением данных из "виртуальной" базы данных. Для
   добавления интереса: с вероятностью 10% она должна возвращать ошибку вместо данных.
3. При нажатии на кнопку "Загрузить новости" вызывайте функцию fetchNews(), обрабатывая успешное
   выполнение и ошибки с использованием then() и catch().
4. При успешной загрузке отобразите статьи на странице. При ошибке покажите сообщение об ошибке.
5. Добавьте функционал, который отключает кнопку загрузки на время "загрузки" новостей и активирует
   её снова после завершения операции (будь то успешная загрузка или ошибка).

### [Задание 2 (тайминг 35 минут)](z2.html)

Создать интерактивную веб-страницу, где пользователи могут выбирать различные элементы мебели
(например, столы, стулья, диваны) и их параметры (материал, цвет, стиль). Выбранные параметры должны
быть сохранены так, чтобы при повторном посещении сайта пользователь мог видеть свой ранее собранный
комплект мебели.

1. Пользователи могут выбирать из различных типов мебели (например, столы, стулья, диваны).
2. Для каждого типа мебели доступен выбор параметров (цвет, материал, стиль).
3. Предусмотреть кнопку "Сохранить комплект", при нажатии на которую текущий выбор пользователя
   сохраняется в localStorage.
4. При повторном посещении сайта автоматически загружать сохраненные параметры из localStorage и
   отображать ранее созданный комплект.
5. Предусмотреть возможность для пользователя очистить сохраненные настройки через специальную
   кнопку.
6. После нажатия на кнопку "Сохранить" на странице должен отображаться выбранный комплект.
7. При нажатии на кнопку "Очистить" должно появляться сообщение о том, что выбор не сделан и
   предыдущие настройки удалены.

```html
<div>
    <label for="table">Выберите стол:</label>
    <select id="table">
        <option value="oak">Дуб</option>
        <option value="pine">Сосна</option>
        <option value="walnut">Орех</option>
    </select>
</div>

<div>
    <label for="chair">Выберите стул:</label>
    <select id="chair">
        <option value="leather">Кожа</option>
        <option value="fabric">Ткань</option>
        <option value="plastic">Пластик</option>
    </select>
</div>

<div>
    <label for="sofa">Выберите диван:</label>
    <select id="sofa">
        <option value="modern">Современный</option>
        <option value="classic">Классический</option>
        <option value="rustic">Деревенский</option>
    </select>
</div>
<button id="save">Сохранить комплект</button>
<button id="clear">Очистить настройки</button>
<div id="result"></div>
```

### [Задание 3 (тайминг 15 минут)](z3.html)

1. Решить предыдущую задачу, только вместо куки использовать localstorage

### [Задание 4 (тайминг 55 минут)](z4)

Создать интерактивную веб-страницу, которая позволяет пользователям регистрироваться и входить в
систему, используя данные, сохраненные в LocalStorage.
Приложение будет состоять из трёх основных страниц:

1. Страница регистрации:
   - Предлагает пользователю ввести логин и пароль.
   - После ввода данных, они сохраняются в LocalStorage.
   - Пользователь перенаправляется на страницу входа.
2. Страница входа:
   - Предлагает пользователю ввести логин и пароль.
   - Если введенные данные совпадают с данными из LocalStorage, пользователь перенаправляется на страницу приветствия.
   - Если данные не совпадают, выводится сообщение об ошибке.
3. Страница приветствия:
   - Простое приветственное сообщение для авторизованного пользователя.
   - Кнопка "Выйти", при нажатии на которую пользователь возвращается на страницу входа.