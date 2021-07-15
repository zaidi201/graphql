// var DataTypes = require("sequelize").DataTypes;
// var _post = require("./post");
// var _user = require("./user");

// function initModels(sequelize) {
//   var post = _post(sequelize, DataTypes);
//   var user = _user(sequelize, DataTypes);

//   post.belongsTo(user, { as: "user", foreignKey: "userId"});
//   user.hasMany(post, { as: "posts", foreignKey: "userId"});

//   return {
//     post,
//     user,
//   };
// }
// module.exports = initModels;
// module.exports.initModels = initModels;
// module.exports.default = initModels;

// const dbConfig = require("../config/config");
// const Sequelize = require("sequelize");

// //db configuration
// const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
//   host: dbConfig.HOST,
//   dialect: dbConfig.dialect,
//   operatorsAliases: 0,

//   pool: {
//     max: dbConfig.pool.max,
//     min: dbConfig.pool.min,
//     acquire: dbConfig.pool.acquire,
//     idle: dbConfig.pool.idle,
//   },
// });

// sequelize
//   .authenticate()
//   .then(() => {
//     console.log("Connection has been established successfully.");
//   })
//   .catch((err) => {
//     console.error("Unable to connect to the database:", err);
//   });

// const db = {};

// db.Sequelize = Sequelize;
// db.sequelize = sequelize;

// //requiring models
// db.user = require("./user")(sequelize, Sequelize);

// db.post = require("./post")(sequelize, Sequelize);

// db.post.belongsTo(db.user, { as: "user", foreignKey: "userId" });
// db.user.hasMany(db.post, { as: "posts", foreignKey: "userId" });

// module.exports = db;
//------------------------------------------------------------------------------------

// var DataTypes = require("sequelize").DataTypes;
// var _city = require("./city");
// var _company_defination = require("./company_defination");
// var _country = require("./country");
// var _department_defination = require("./department_defination");
// var _designation_defination = require("./designation_defination");
// var _designation_type = require("./designation_type");
// var _district = require("./district");
// var _division = require("./division");
// var _factor = require("./factor");
// var _location = require("./location");
// var _mapping_department_locaiton = require("./mapping_department_locaiton");
// var _organization_defination = require("./organization_defination");
// var _policy_defination = require("./policy_defination");
// var _policy_type = require("./policy_type");
// var _state = require("./state");
// var _tehsil = require("./tehsil");
// var _unit = require("./unit");

// function initModels(sequelize) {
//   var city = _city(sequelize, DataTypes);
//   var company_defination = _company_defination(sequelize, DataTypes);
//   var country = _country(sequelize, DataTypes);
//   var department_defination = _department_defination(sequelize, DataTypes);
//   var designation_defination = _designation_defination(sequelize, DataTypes);
//   var designation_type = _designation_type(sequelize, DataTypes);
//   var district = _district(sequelize, DataTypes);
//   var division = _division(sequelize, DataTypes);
//   var factor = _factor(sequelize, DataTypes);
//   var location = _location(sequelize, DataTypes);
//   var mapping_department_locaiton = _mapping_department_locaiton(
//     sequelize,
//     DataTypes
//   );
//   var organization_defination = _organization_defination(sequelize, DataTypes);
//   var policy_defination = _policy_defination(sequelize, DataTypes);
//   var policy_type = _policy_type(sequelize, DataTypes);
//   var state = _state(sequelize, DataTypes);
//   var tehsil = _tehsil(sequelize, DataTypes);
//   var unit = _unit(sequelize, DataTypes);

//   location.belongsTo(city, { as: "city", foreignKey: "city_id" });
//   city.hasMany(location, { as: "locations", foreignKey: "city_id" });
//   department_defination.belongsTo(company_defination, {
//     as: "company",
//     foreignKey: "company_id",
//   });
//   company_defination.hasMany(department_defination, {
//     as: "department_definations",
//     foreignKey: "company_id",
//   });
//   designation_defination.belongsTo(company_defination, {
//     as: "company",
//     foreignKey: "company_id",
//   });
//   company_defination.hasMany(designation_defination, {
//     as: "designation_definations",
//     foreignKey: "company_id",
//   });
//   policy_defination.belongsTo(company_defination, {
//     as: "company",
//     foreignKey: "company_id",
//   });
//   company_defination.hasMany(policy_defination, {
//     as: "policy_definations",
//     foreignKey: "company_id",
//   });
//   unit.belongsTo(company_defination, {
//     as: "company",
//     foreignKey: "company_id",
//   });
//   company_defination.hasMany(unit, { as: "units", foreignKey: "company_id" });
//   state.belongsTo(country, { as: "country", foreignKey: "country_id" });
//   country.hasMany(state, { as: "states", foreignKey: "country_id" });
//   department_defination.belongsTo(department_defination, {
//     as: "parent_deparment",
//     foreignKey: "parent_deparment_id",
//   });
//   department_defination.hasMany(department_defination, {
//     as: "department_definations",
//     foreignKey: "parent_deparment_id",
//   });
//   mapping_department_locaiton.belongsTo(department_defination, {
//     as: "department",
//     foreignKey: "department_id",
//   });
//   department_defination.hasMany(mapping_department_locaiton, {
//     as: "mapping_department_locaitons",
//     foreignKey: "department_id",
//   });
//   designation_defination.belongsTo(designation_defination, {
//     as: "parent_designation",
//     foreignKey: "parent_designation_id",
//   });
//   designation_defination.hasMany(designation_defination, {
//     as: "designation_definations",
//     foreignKey: "parent_designation_id",
//   });
//   designation_defination.belongsTo(designation_type, {
//     as: "designation_type",
//     foreignKey: "designation_type_id",
//   });
//   designation_type.hasMany(designation_defination, {
//     as: "designation_definations",
//     foreignKey: "designation_type_id",
//   });
//   tehsil.belongsTo(district, { as: "district", foreignKey: "district_id" });
//   district.hasMany(tehsil, { as: "tehsils", foreignKey: "district_id" });
//   district.belongsTo(division, { as: "division", foreignKey: "division_id" });
//   division.hasMany(district, { as: "districts", foreignKey: "division_id" });
//   mapping_department_locaiton.belongsTo(location, {
//     as: "location",
//     foreignKey: "location_id",
//   });
//   location.hasMany(mapping_department_locaiton, {
//     as: "mapping_department_locaitons",
//     foreignKey: "location_id",
//   });
//   unit.belongsTo(location, { as: "id_unit_location", foreignKey: "id_unit" });
//   location.hasOne(unit, { as: "id_unit_unit", foreignKey: "id_unit" });
//   company_defination.belongsTo(organization_defination, {
//     as: "organization",
//     foreignKey: "organization_id",
//   });
//   organization_defination.hasMany(company_defination, {
//     as: "company_definations",
//     foreignKey: "organization_id",
//   });
//   factor.belongsTo(policy_defination, {
//     as: "policy",
//     foreignKey: "policy_id",
//   });
//   policy_defination.hasMany(factor, { as: "factors", foreignKey: "policy_id" });
//   factor.belongsTo(policy_type, {
//     as: "policy_type",
//     foreignKey: "policy_type_id",
//   });
//   policy_type.hasMany(factor, { as: "factors", foreignKey: "policy_type_id" });
//   city.belongsTo(state, { as: "state", foreignKey: "state_id" });
//   state.hasMany(city, { as: "cities", foreignKey: "state_id" });
//   division.belongsTo(state, { as: "state", foreignKey: "state_id" });
//   state.hasMany(division, { as: "divisions", foreignKey: "state_id" });
//   location.belongsTo(tehsil, { as: "tehsil", foreignKey: "tehsil_id" });
//   tehsil.hasMany(location, { as: "locations", foreignKey: "tehsil_id" });
//   location.belongsTo(unit, { as: "unit", foreignKey: "unit_id" });
//   unit.hasMany(location, { as: "locations", foreignKey: "unit_id" });

//   return {
//     city,
//     company_defination,
//     country,
//     department_defination,
//     designation_defination,
//     designation_type,
//     district,
//     division,
//     factor,
//     location,
//     mapping_department_locaiton,
//     organization_defination,
//     policy_defination,
//     policy_type,
//     state,
//     tehsil,
//     unit,
//   };
// }
// module.exports = initModels;
// module.exports.initModels = initModels;
// module.exports.default = initModels;

const dbConfig = require("../config/config");
const Sequelize = require("sequelize");

//db configuration
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: 0,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//requiring models
db.user = require("./user")(sequelize, Sequelize);

db.post = require("./post")(sequelize, Sequelize);

db.city = require("./city")(sequelize, Sequelize);
db.company_defination = require("./company_defination")(sequelize, Sequelize);
db.country = require("./country")(sequelize, Sequelize);
db.department_defination = require("./department_defination")(
  sequelize,
  Sequelize
);
db.designation_defination = require("./designation_defination")(
  sequelize,
  Sequelize
);
db.designation_type = require("./designation_type")(sequelize, Sequelize);
db.district = require("./district")(sequelize, Sequelize);
db.division = require("./division")(sequelize, Sequelize);
db.factor = require("./factor")(sequelize, Sequelize);
db.location = require("./location")(sequelize, Sequelize);
db.mapping_department_locaiton = require("./mapping_department_locaiton")(
  sequelize,
  Sequelize
);
db.organization_defination = require("./organization_defination")(
  sequelize,
  Sequelize
);
db.policy_defination = require("./policy_defination")(sequelize, Sequelize);
db.policy_type = require("./policy_type")(sequelize, Sequelize);
db.state = require("./state")(sequelize, Sequelize);
db.tehsil = require("./tehsil")(sequelize, Sequelize);
db.unit = require("./unit")(sequelize, Sequelize);

//relations and associations
db.post.belongsTo(db.user, { as: "user", foreignKey: "userId" });
db.user.hasMany(db.post, { as: "posts", foreignKey: "userId" });

db.location.belongsTo(db.city, { as: "city", foreignKey: "city_id" });
db.city.hasMany(db.location, { as: "locations", foreignKey: "city_id" });
db.department_defination.belongsTo(db.company_defination, {
  as: "company",
  foreignKey: "company_id",
});
db.company_defination.hasMany(db.department_defination, {
  as: "department_definations",
  foreignKey: "company_id",
});
db.designation_defination.belongsTo(db.company_defination, {
  as: "company",
  foreignKey: "company_id",
});
db.company_defination.hasMany(db.designation_defination, {
  as: "designation_definations",
  foreignKey: "company_id",
});
db.policy_defination.belongsTo(db.company_defination, {
  as: "company",
  foreignKey: "company_id",
});
db.company_defination.hasMany(db.policy_defination, {
  as: "policy_definations",
  foreignKey: "company_id",
});
db.unit.belongsTo(db.company_defination, {
  as: "company",
  foreignKey: "company_id",
});
db.company_defination.hasMany(db.unit, {
  as: "units",
  foreignKey: "company_id",
});
db.state.belongsTo(db.country, { as: "country", foreignKey: "country_id" });
db.country.hasMany(db.state, { as: "states", foreignKey: "country_id" });
db.department_defination.belongsTo(db.department_defination, {
  as: "parent_deparment",
  foreignKey: "parent_deparment_id",
});
db.department_defination.hasMany(db.department_defination, {
  as: "department_definations",
  foreignKey: "parent_deparment_id",
});
db.mapping_department_locaiton.belongsTo(db.department_defination, {
  as: "department",
  foreignKey: "department_id",
});
db.department_defination.hasMany(db.mapping_department_locaiton, {
  as: "mapping_department_locaitons",
  foreignKey: "department_id",
});
db.designation_defination.belongsTo(db.designation_defination, {
  as: "parent_designation",
  foreignKey: "parent_designation_id",
});
db.designation_defination.hasMany(db.designation_defination, {
  as: "designation_definations",
  foreignKey: "parent_designation_id",
});
db.designation_defination.belongsTo(db.designation_type, {
  as: "designation_type",
  foreignKey: "designation_type_id",
});
db.designation_type.hasMany(db.designation_defination, {
  as: "designation_definations",
  foreignKey: "designation_type_id",
});
db.tehsil.belongsTo(db.district, { as: "district", foreignKey: "district_id" });
db.district.hasMany(db.tehsil, { as: "tehsils", foreignKey: "district_id" });
db.district.belongsTo(db.division, {
  as: "division",
  foreignKey: "division_id",
});
db.division.hasMany(db.district, {
  as: "districts",
  foreignKey: "division_id",
});
db.mapping_department_locaiton.belongsTo(db.location, {
  as: "location",
  foreignKey: "location_id",
});
db.location.hasMany(db.mapping_department_locaiton, {
  as: "mapping_department_locaitons",
  foreignKey: "location_id",
});
db.unit.belongsTo(db.location, {
  as: "id_unit_location",
  foreignKey: "id_unit",
});
db.location.hasOne(db.unit, { as: "id_unit_unit", foreignKey: "id_unit" });
db.company_defination.belongsTo(db.organization_defination, {
  as: "organization",
  foreignKey: "organization_id",
});
db.organization_defination.hasMany(db.company_defination, {
  as: "company_definations",
  foreignKey: "organization_id",
});
db.factor.belongsTo(db.policy_defination, {
  as: "policy",
  foreignKey: "policy_id",
});
db.policy_defination.hasMany(db.factor, {
  as: "factors",
  foreignKey: "policy_id",
});
db.factor.belongsTo(db.policy_type, {
  as: "policy_type",
  foreignKey: "policy_type_id",
});
db.policy_type.hasMany(db.factor, {
  as: "factors",
  foreignKey: "policy_type_id",
});
db.city.belongsTo(db.state, { as: "state", foreignKey: "state_id" });
db.state.hasMany(db.city, { as: "cities", foreignKey: "state_id" });
db.division.belongsTo(db.state, { as: "state", foreignKey: "state_id" });
db.state.hasMany(db.division, { as: "divisions", foreignKey: "state_id" });
db.location.belongsTo(db.tehsil, { as: "tehsil", foreignKey: "tehsil_id" });
db.tehsil.hasMany(db.location, { as: "locations", foreignKey: "tehsil_id" });
db.location.belongsTo(db.unit, { as: "unit", foreignKey: "unit_id" });
db.unit.hasMany(db.location, { as: "locations", foreignKey: "unit_id" });

module.exports = db;
