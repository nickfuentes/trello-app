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

    update(req, res) {
        return BoardList
            .find({
                where: {
                    id: req.params.boardListId,
                    boardId: req.params.boardId,
                },
            })
            .then(boardList => {
                if (!boardList) {
                    return res.status(404).send({
                        message: 'BoardList Not Found',
                    });
                }

                return boardList
                    .update(req.body, { fields: Object.keys(req.body) })
                    .then(updatedBoardList => res.status(200).send(updatedBoardList))
                    .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    },

    destroy(req, res) {
        return BoardList
            .find({
                where: {
                    id: req.params.boardListId,
                    boardId: req.params.boardId,
                },
            })
            .then(boardList => {
                if (!boardList) {
                    return res.status(404).send({
                        message: 'BoardList Not Found',
                    });
                }

                return boardList
                    .destroy()
                    .then(() => res.status(200).send({ message: 'List Succesfully Deleted!' }))
                    .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    },
};