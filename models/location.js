const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('location', {
    unit_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'unit',
        key: 'id_unit'
      }
    },
    city_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'city',
        key: 'id_city'
      }
    },
    tehsil_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'tehsil',
        key: 'id_tehsil'
      }
    },
    id_location: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    name_location: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    code_location: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    address1_location: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    address2_location: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    postal_code_location: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    note_location: {
      type: DataTypes.STRING(400),
      allowNull: true
    },
    is_enable_location: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'location',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_location" },
        ]
      },
      {
        name: "fk_location_city",
        using: "BTREE",
        fields: [
          { name: "city_id" },
        ]
      },
      {
        name: "fk_location_tehsil",
        using: "BTREE",
        fields: [
          { name: "tehsil_id" },
        ]
      },
      {
        name: "fk_location_unit",
        using: "BTREE",
        fields: [
          { name: "unit_id" },
        ]
      },
    ]
  });
};
