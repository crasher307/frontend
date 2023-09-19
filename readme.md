### Разработчик - Frontend разработка. Технологическая специализация

#### Веб-верстка HTML/CSS

<details class="desc" data-number="1"><summary>Урок 1. Лекция. Введение и Основы HTML</summary>

- Что такое HTML и CSS. Как работает интернет. Устройство сайта. Виду сайтов. Основные протоколы. Процесс разработки сайта. Структура HTML-документа. Виды тегов. Спецсимволы. Списки. Гиперссылки. Изображениā. Формы и их элементы.
- [Работа](html_css/lesson_1)

</details>
<details class="desc" data-number="2"><summary>Урок 2. Семинар. Введение и Основы HTML</summary>

- Выполнение практических заданий в соответствии с презентацией к уроку
- [Работа](html_css/lesson_2)
  - Скачать и настроить редактор кода, если этого не сделали на семинаре.
  - Создать пустую папку, придумать название.
  - Создать первую html страницу (index.html).
  - Добавить структуру html документа.
  - Добавить меню сайта (Меню сайта должно быть на каждой странице, оно должно быть одинаковым): ###### a. Главная ###### b. Каталог ###### c. Контакты
  - Создать заголовок h1 с текстом “Главная страница”.
  - Добавить параграф p с произвольным текстом (lorem) (используем расширение emmet уже установленное в vsc, для этого вводим lorem и нажимаем клавишу tab).
  - Создать подзаголовок h2 с текстом “Добро пожаловать на сайт”.
  - Добавить три параграфа p с произвольным текстом (lorem).
  - Рядом с файлом index.html создать папку catalog.
  - Внутри папки catalog создать файл catalog.html.
  - На странице “каталог” добавить структуру html-документа.
  - Добавить меню сайта (такое же, как на главной странице).
  - Добавить Заголовок h1 с текстом “Каталог”.
  - Создать параграф p с произвольным текстом из 150 слов для этого вводим “lorem150” и нажимаем tab.
  - Сделать переходы с главной страницы на страницу каталог, при нажатии на меню сайта и переход со страницы каталог на главную страницу.
  - Создать папку img и разместить ее рядом с index.html.
  - Добавить в папку img произвольные фотографии товаров, по вашей тематике можно выбрать любое фото https://www.freepik.com/search?format=search&orientation=portrait&query=products
  - На странице “Каталог” после заголовка h1 и параграфа p добавить ###### a. Изображение товара ###### b. Название товара ###### c. Описание товара
  - Добавить 3 таких товара на страницу каталога (не следует добавлять более 3-х товаров)

</details>
<details class="desc" data-number="3"><summary>Урок 3. Лекция. Основы CSS</summary>

- На данном уроке мы узнаем основы css и как подключаются стили к проекту. Какие осноные свойства стилей бывают. Посмотрим на практике, как можно добавить стили к проекту. Какие способы объявления css возможны и какой лучше выбрать.
- [Работа](html_css/lesson_3)

</details>
<details class="desc" data-number="4"><summary>Урок 4. Семинар. Основы CSS</summary>

- Выполнение практических заданий в соответствии с презентацией к уроку
- [Работа](html_css/lesson_4)
  - Открыть Домашнюю работу из урока 1.
  - Создать файл стилей style.css, подключить ко всем страницам
  - Задать стиль `a { text-decoration: none; }`
  - Проверить работу стилей на всех страницах.
  - Разделить экран на 2 части, сделать так, чтобы файл стилей располагался справа, а все html-файлы были слева.
  - Для всех ссылок меню задать класс (придумать логичное название класса)<br><br>
    - ```css
      color: cornflowerblue;
      font-size: 16px;
      line-height: 20px;
      ```
  - Проверить отображения стилей на всех страницах проекта.
  - Для всех заголовков h1 на сайте задать класс и к нему стиль<br><br>
    - ```css
      color: #222222;
      font-size: 28px;
      line-height: 36px;
      font-weight: bold;
      ```
  - Для всех параграфов в проекте задать класс. К данному классу задать стили:<br><br>
    - ```css
      font-style: normal;
      font-weight: 300;
      font-size: 18px;
      line-height: 30px;
      color: #7D7987;
      ```
  - Для заголовков h2 задать класс. К данному классу указать стиль:<br><br>
    - ```css
      color: coral;
      font-style: normal;
      font-weight: 700;
      font-size: 36px;
      line-height: 80px;
      ```

</details>
<details class="desc" data-number="5"><summary>Урок 5. Лекция. Работа с макетом и создание блочной структуры</summary>

- Что такое макет. Визуальная вёрстка. Как работать с макетом в формате Figma. Особенности строчных и блочных элементов. Формирование блочной модели
- [Работа](html_css/lesson_5)

</details>
<details class="desc" data-number="6"><summary>Урок 6. Семинар. Работа с макетом и cоздание блочной структуры</summary>

- Выполнение практических заданий в соответствии с презентацией к уроку
- [Работа](html_css/lesson_6)
  - Открыть макет сайта [figma](https://www.figma.com/file/mnLY69cYE5cqWM5w6n5hXx/Seo-%26-Digital-Marketing-Landing-Page?node-id=23%3A2)
  - Необходимо представить разбиение часть на блоки (Для тех учеников, которые умеют работать с Figma, разбить представленную на скриншоте часть на блоки, как в семинаре).
  - Создать новую папку.
  - Создать файл index.html.
  - В соответствии с макетом необходимо:
    - Добавить все блоки по сайту
    - Добавить все наполнение блоков (html контент)
    - Все заголовки, параграфы кнопки и изображения Позиционирование задавать не нужно
    - Создать файл стилей style.css:
      - Подключить стили к index.html.
      - Добавить обнуление стилей.
      - Добавить все необходимые отступы margin, padding.
  - Все домашние задания являются повторением того что делается на семинаре, поэтому перед выполнением обязательно посмотрите семинар.

</details>
<details class="desc" data-number="7"><summary>Урок 7. Лекция. Основы позиционирования</summary>

- Свойство display. Flexbox и Grid layout. Позиционирование блоков.
- [Работа](html_css/lesson_7)

</details>
<details class="desc" data-number="8"><summary>Урок 8. Семинар. Основы позиционирования (вебинар) [TODO: доделать работу для семинара]</summary>

- Выполнение практических заданий в соответствии с презентацией к уроку
  - [figma](https://www.figma.com/file/3jcBxpXXVlwvD3bY16lbLW/Landing_Page-(Copy)-(Copy)?node-id=0%3A1&mode=dev) - макет
  - [caniuse](https://caniuse.com/)
  - [flex box froggy](https://flexboxfroggy.com/#ru) - тренажер по флексам
- [Работа](html_css/lesson_8)
  - Мы продолжаем работать с проектом из прошлого урока [figma](https://www.figma.com/file/mnLY69cYE5cqWM5w6n5hXx/Seo-%26-Digital-Marketing-Landing-Page?node-id=186%3A2)
  - В данном домашнем задании мы будем добавлять стилистику и позиционирование для верхнего блока сайта
    - Для всех html-элементов из прошлого урока, вам необходимо задать стили в соответствии с макетом.
    - Расставить все элементы в соответствии с макетом.

</details>

#### Продвинутый HTML + CSS

#### Основы Javascript

#### Продолжение JavaScript

#### JavaScript про ECMAScript

#### Основы Node.js

#### Продвинутый JavaScript

#### JavaScript про API браузеров

#### Фреймворк Vue.js

#### Итоговая аттестация

#### Другое

<details class="desc"><summary>Стили для IDE</summary>

<style>
.desc {
    margin: 0 0 0 1em;
    padding: 0 0 1em;
}
.desc summary {
    margin: 0 0 -1em;
    list-style-position: outside;
    cursor: pointer;
    
}
.desc pre {
    border: 1px solid #37b;
    margin: -1em 0 1.5em;
    padding: 0.3em 0.6em;
}
</style>

</details>