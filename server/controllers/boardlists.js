const BoardList = require('../models').BoardList;

module.exports = {
    create(req, res) {
        return BoardList
            .create({
                title: req.body.title,
                boardId: req.params.boardId,
            })
            .then(boardList => res.status(201).send(boardList))
            .catch(error => res.status(400).send(error));
    },
};