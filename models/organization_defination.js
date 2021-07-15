const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('organization_defination', {
    id_organization: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    name_organization: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    is_enable_organization: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    note_organization: {
      type: DataTypes.STRING(400),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'organization_defination',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_organization" },
        ]
      },
    ]
  });
};
