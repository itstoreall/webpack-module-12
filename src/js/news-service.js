const apiKey = "f5880e4ea9c14e78adf47ba8e282475f";

// Тут мы храним всю логику 
// (хранение, обработка, обновление)

export default {
   searchQuery: "",
   page: 1,

   fetchArticles() {
      const url = `http://newsapi.org/v2/everything?q=
      ${this.query}&language=en&pageSize=2&page=
      ${this.page}`;
      const options = {
         headers: {
            Authorization: apiKey,
         },
      };

      return fetch(url, options)
         .then(res => res.json())
         .then(({ articles }) => {
            this.incrementPage();

            return articles;
         });
   },

   resetPage() {
      this.page = 1;
   },

   incrementPage() {
      this.page += 1;
   },

   get query() {
      return this.searchQuery;
   },

   set query(value) {
      this.searchQuery = value;
   },
};