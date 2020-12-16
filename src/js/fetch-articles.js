const apiKey = "f5880e4ea9c14e78adf47ba8e282475f";

// Функция делает запрос, форматирует данные в массив и возвращает его

function fetchArticles(searchQuery) {
   const url = `http://newsapi.org/v2/everything?q=${searchQuery}&language=en`;
   const options = {
      headers: {
         "Authorization": apiKey,
      },
   };

   return fetch(url, options)
      .then(res => res.json())
      .then(({ articles }) => articles)
      .catch(error => console.log(error));
};

export default fetchArticles;