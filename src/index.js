import newsService from "./js/news-service";
import updateArticlesMarkup from "./js/update-articles-markup";
import LoadMoreBtn from "./js/components/load-more-button";
import refs from "./js/refs";
import './styles.css';

const loadMoreBtn = new LoadMoreBtn('button[data-action="load-more"]');

// https://spin.js.org - Библиотека спиннеров

/*

// Опции

const options = {
   method: "GET",
   headers: {
      Accept: "application/json",
   },
};

*/
/*

// jsonplaceholder - Бекенд 1.

// Операция асинхронная
// в зене получаем респонс и мы от сюда возвращаем response.json (результат парса)
fetch("https://jsonplaceholder.typicode.com/users")
   .then(response => response.json())
   .then(data => console.log(data));

*/
/*

// algolia - Бекенд 2.1.

// Корень - http://hn.algolia.com
// Бекпоинт - api/v1/search
// Квери стринг (параметры) - ?query=... (?параметр=значение)

// Используем один параметр (query=html)
fetch("http://hn.algolia.com/api/v1/search?query=html")
   .then(res => res.json())
   .then(data => console.log(data));

*/
/*

// algolia - Бекенд 2.2.

// Используем несколько параметров
// Пары разделяются амперсантом (&)
fetch("http://hn.algolia.com/api/v1/search?query=html&tags=story")
   .then(res => res.json())
   .then(data => console.log(data));

*/
/*

// News API - Бекенд 3.1.

// Использование ключа
fetch("http://newsapi.org/v2/everything?q=bitcoin&language=en&apiKey=f5880e4ea9c14e78adf47ba8e282475f");

*/
/*

// News API - Бекенд 3.2.

// Рефакторинг кода

const apiKey = "f5880e4ea9c14e78adf47ba8e282475f";
const url = `http://newsapi.org/v2/everything?q=bitcoin&language=en&apiKey=${apiKey}`;

fetch(url)
   .then(res => res.json())
   .then(data => console.log(data.articles));

*/
/*

// News API - Бекенд 3.3.

// Ключ в заголовке
// Ошибки ловим в catch

const apiKey = "f5880e4ea9c14e78adf47ba8e282475f";
const url = `http://newsapi.org/v2/everything?q=bitcoin&language=en`;

const options = {
   headers: {
      "Authorization": apiKey,
   },
};

fetch(url, options)
   .then(res => res.json())
   .then(data => console.log(data.articles))
   .catch(error => console.log(error));

*/
/*

// Разметка - Бекенд 4.1.

// Делаем шаблон

const refs = {
   articlesContainer: document.querySelector('.js-articles')
}

const apiKey = "f5880e4ea9c14e78adf47ba8e282475f";
const url = `http://newsapi.org/v2/everything?q=bitcoin&language=en`;

const options = {
   headers: {
      "Authorization": apiKey,
   },
};

fetch(url, options)
   .then(res => res.json())
   .then(({ articles }) => {
      console.log(articles);

      const markup = articlesTpl(articles);
      console.log(markup);
      refs.articlesContainer.insertAdjacentHTML("beforeend", markup);
   })
   .catch(error => console.log(error));

*/
/*

// Search Form - Бекенд 4.2.

const refs = {
   articlesContainer: document.querySelector('.js-articles'),
   searchForm: document.querySelector('.js-search-form')
};

refs.searchForm.addEventListener("submit", event => {
   event.preventDefault();

   const form = event.currentTarget;
   const inputValue = form.elements.query.value
   console.log(inputValue);
});

const apiKey = "f5880e4ea9c14e78adf47ba8e282475f";
const url = `http://newsapi.org/v2/everything?q=bitcoin&language=en`;

const options = {
   headers: {
      "Authorization": apiKey,
   },
};

fetch(url, options)
   .then(res => res.json())
   .then(({ articles }) => {
      console.log(articles);

      const markup = articlesTpl(articles);
      // console.log(markup);
      refs.articlesContainer.insertAdjacentHTML("beforeend", markup);
   })
   .catch(error => console.log(error));

*/
/*

// Search Form - Бекенд 4.3.

// Во время сабмита формы делаем http запрос

const refs = {
   articlesContainer: document.querySelector('.js-articles'),
   searchForm: document.querySelector('.js-search-form')
};

refs.searchForm.addEventListener("submit", event => {
   event.preventDefault();

   const form = event.currentTarget;
   const inputValue = form.elements.query.value

   const apiKey = "f5880e4ea9c14e78adf47ba8e282475f";
   const url = `http://newsapi.org/v2/everything?q=${inputValue}&language=en`;

   const options = {
   headers: {
      "Authorization": apiKey,
   },
};
   
   refs.articlesContainer.innerHTML = "";
   
   fetch(url, options)
   .then(res => res.json())
   .then(({ articles }) => {
      const markup = articlesTpl(articles);
      refs.articlesContainer.insertAdjacentHTML("beforeend", markup);
   })
   .catch(error => console.log(error));
});

*/
// /*

// Search Form - Бекенд 4.4.

// Рефакторинг
// Разделяем логику и представление
// Создаем js/fetch-articles.js
// Создаем update-articles-markup.js



refs.searchForm.addEventListener("submit", searchFormSubmitHanbler);
loadMoreBtn.refs.button.addEventListener("click", fetchArticles);

function searchFormSubmitHanbler(event) {
   event.preventDefault();

   const form = event.currentTarget;
   newsService.query = form.elements.query.value

   clearArticlesContainer();
   newsService.resetPage();
   fetchArticles();
   form.reset();
}

function fetchArticles(){
   loadMoreBtn.disable();

   newsService.fetchArticles().then(articles => {
         updateArticlesMarkup(articles);
         loadMoreBtn.show()
         loadMoreBtn.enable();
      });
};

function clearArticlesContainer() {
   refs.articlesContainer.innerHTML = "";
}

// */
