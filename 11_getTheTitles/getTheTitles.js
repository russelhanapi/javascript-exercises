const getTheTitles = function (books) {
  const booksArr = books.map((book) => book.title);
  return booksArr;
};

// getTheTitles(books) // ['Book','Book2']
// Do not edit below this line
module.exports = getTheTitles;
