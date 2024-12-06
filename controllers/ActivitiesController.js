const Activities = require("../models/Activities");

module.exports = class ActivitiesController {
  static async createActivity(req, res) {
    const newActivity = {
      UserId: req.body.userId,
      title: req.body.title,
      date: req.body.date,
      time: req.body.time,
      description: req.body.description,
      priority: req.body.priority,
      alert: req.body.alert,
    };

    try {
      await Activities.create(newActivity);

      res.status(200).send({
        message: "Atividade criada com sucesso",
      });
    } catch (err) {
      console.log(err);

      res.status(400).send({
        message: "Houve um erro ao criar uma atividade",
      });
    }
  }
};
