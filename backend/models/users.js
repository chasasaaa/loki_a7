import { Sequelize } from "sequelize";
import db from "../config/koneksi.js";

const { DataTypes } = Sequelize;

const user = db.define('users',{
    id : {
        type            : DataTypes.BIGINT,
        allowNull       : false,
        primaryKey      : true,
        autoIncrement   : true
    },
    name            : Sequelize.STRING,
    email           : Sequelize.STRING,
    password        : Sequelize.STRING,
    remember_token  : Sequelize.STRING,
    type            : Sequelize.ENUM('M', 'D', 'T'),
    // created_at :Sequelize.DATE,
    // updated_at : Sequelize.DATE
},{
    freezeTableName : true,
    timestamps      : false
})

export default user;
