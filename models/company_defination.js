const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('company_defination', {
    organization_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'organization_defination',
        key: 'id_organization'
      }
    },
    id_company: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    name_company: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    is_enable_company: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    note_company: {
      type: DataTypes.STRING(400),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'company_defination',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_company" },
        ]
      },
      {
        name: "fk_company_defination_organization_defination",
        using: "BTREE",
        fields: [
          { name: "organization_id" },
        ]
      },
    ]
  });
};
