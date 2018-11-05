const boardsController = require('../controllers').boards;
const boardListsController = require('../controllers').boardLists;

module.exports = (app) => {
    app.get('/api', (req, res) => res.status(200).send({
        message: 'Welcome to the Trello API!',
    }));

    app.post('/api/boards', boardsController.create);
    app.get('/api/boards', boardsController.list);
    app.get('/api/boards/:boardId', boardsController.retrieve);

    app.post('/api/boards/:boardId/lists', boardListsController.create);
};