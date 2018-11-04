const Board = require('../models').Board;

module.exports = {
    create(req, res) {
        return Board
            .create({
                title: req.body.title,
            })
            .then(board => res.status(201).send(board))
            .catch(error => res.status(400).send(error));
    },

    list(req, res) {
        return Board
            .findAll({
                include: [{
                    model: BoardList,
                    as: 'boardLists',
                }],
            })
            .then(todos => res.status(200).send(boards))
            .catch(error => res.status(400).send(error));
    },
};