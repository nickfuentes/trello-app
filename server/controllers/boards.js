const Board = require('../models').Board;
const BoardList = require('../models').BoardList

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
            .then(boards => res.status(200).send(boards))
            .catch(error => res.status(400).send(error));
    },

    retrieve(req, res) {
        return Board
            .findById(req.params.boardId, {
                include: [{
                    model: BoardList,
                    as: 'boardLists',
                }],
            })
            .then(board => {
                if (!board) {
                    return res.status(404).send({
                        message: 'Todo Not Found',
                    });
                }
                return res.status(200).send(board);
            })
            .catch(error => res.status(400).send(error));
    },
};