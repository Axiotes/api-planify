const Activities = require("../models/Activities");
const User = require("../models/User");

module.exports = class ActivitiesController {
  static async userActivities(req, res) {
    const userId = req.userId;
    const date = req.params.date;

    try {
      const activities = await Activities.findAll({
        where: { userId: userId, date: date },
        attributes: [
          "id",
          "title",
          "date",
          "time",
          "description",
          "priority",
          "alert",
        ],
      });

      res.status(200).send({
        message: "",
        activities: activities,
      });
    } catch (err) {
      res.status(400).send({
        message: "Houve um erro acessar atividades",
      });
    }
  }

  static async activity(req, res) {
    const id = req.params.id;
    const userId = req.userId;

    try {
      const activity = await Activities.findOne({
        where: { id: id, userId: userId },
        attributes: [
          "id",
          "title",
          "date",
          "time",
          "description",
          "priority",
          "alert",
        ],
      });

      if (!activity) {
        res.status(400).send({
          message: "Atividade inexistente",
        });
        return;
      }

      res.status(200).send({
        message: "",
        activity: activity,
      });
    } catch (err) {
      res.status(400).send({
        message: "Houve um erro acessar atividades",
      });
    }
  }

  static async createActivity(req, res) {
    const newActivity = {
      userId: req.userId,
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

  static async updateActivity(req, res) {
    const id = req.params.id;
    const updatedActivity = {
      title: req.body.title,
      date: req.body.date,
      time: req.body.time,
      description: req.body.description,
      priority: req.body.priority,
      alert: req.body.alert,
    };

    try {
      await Activities.update(updatedActivity, { where: { id: id } });

      res.status(200).send({
        message: "Atividade atualizada com sucesso",
      });
    } catch (err) {
      console.log(err);

      res.status(400).send({
        message: "Houve um erro ao atualizar sua atividade",
      });
    }
  }

  static async deleteActivity(req, res) {
    const id = req.params.id;
    const userId = req.userId;

    try {
      await Activities.destroy({ where: { id: id, userId: userId } });

      res.status(200).send({
        message: "Atividade removida com sucesso",
      });
    } catch (err) {
      console.log(err);

      res.status(400).send({
        message: "Houve um erro ao remover atividade",
      });
    }
  }
};
