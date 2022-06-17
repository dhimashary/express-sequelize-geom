const { sequelize } = require('../models');

module.exports = {
  async findStores(req, res) {
    try {
      // distance on meter unit
      const distance = req.query.distance || 1000;
      const result = await sequelize.query(
        `select
        id,
        name,
        ST_DWithin(location,
        ST_MakePoint(107.5904275402039,
        -6.9439994342171225),
        :distance,
        true)
      from
        "Stores"
      where
        ST_DWithin(location,
        ST_MakePoint(107.5904275402039,
        -6.9439994342171225),
        :distance,
      true) = true;`,
        {
          replacements: {
            distance: +distance,
          },
          logging: console.log,
          plain: false,
          raw: false,
          type: sequelize.QueryTypes.SELECT,
        }
      );
      res.status(200).json(result);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  },
};
