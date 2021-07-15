const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('policy_defination', {
    company_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'company_defination',
        key: 'id_company'
      }
    },
    id_policy: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    name_policy: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    description_policy: {
      type: DataTypes.STRING(400),
      allowNull: true
    },
    note_policy: {
      type: DataTypes.STRING(400),
      allowNull: true
    },
    is_enable_policy: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'policy_defination',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_policy" },
        ]
      },
      {
        name: "fk_policy_defination_company_defination",
        using: "BTREE",
        fields: [
          { name: "company_id" },
        ]
      },
    ]
  });
};
