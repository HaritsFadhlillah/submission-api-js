const { addbooksHandler, getAllBooksHandler, getBooksByIdHandler, editBooksByIdHandler, deletedBooksByIdHandler } = require("./handler");

const routes = [
    {
        method: 'POST',
        path: '/books',
        handler: addbooksHandler,
    },
    {
        method:'GET',
        path: '/books',
        handler: getAllBooksHandler,
    },
    {
        method:'GET',
        path: '/books/{bookId}',
        handler: getBooksByIdHandler,
    },
    {
        method:'PUT',
        path: '/books/{bookId}',
        handler: editBooksByIdHandler,
    },
    {
        method:'DELETE',
        path: '/books/{bookId}',
        handler: deletedBooksByIdHandler,
    },
];


module.exports = routes;