const boardsController = require('../controllers').boards;
const boardListsController = require('../controllers').boardLists;

module.exports = (app) => {
    app.get('/api', (req, res) => res.status(200).send({
        message: 'Welcome to the Trello API!',
    }));

    app.post('/api/boards', boardsController.create);
    app.get('/api/boards', boardsController.list);
    app.get('/api/boards/:boardId', boardsController.retrieve);
    app.put('/api/boards/:boardId', boardsController.update);
    app.delete('/api/boards/:boardId', boardsController.destroy);

    app.post('/api/boards/:boardId/lists', boardListsController.create);
    app.put('/api/boards/:boardId/lists/:boardListId', boardListsController.update);
    app.delete('/api/boards/:boardId/lists/:boardListId', boardListsController.destroy);

    // For any other request method on todo items, we're going to return "Method Not Allowed"
    app.all('/api/boards/:boardId/lists', (req, res) => res.status(405)
        .send({ message: 'Method Not Allowed', }));
};