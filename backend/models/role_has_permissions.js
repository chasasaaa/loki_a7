'use strict'
const {Sequelize, DataTypes, err} = require('sequelize')
const db = require('../config/koneksi.js')

var role_has_permissions = db.define('role_has_permissions', {
    permission_id : {
        type        : DataTypes.BIGINT,
        allownull   : false,
        primaryKey  : true
    },
    role_id: {
        type        : DataTypes.BIGINT,
        allownull   : false,
    }
},{
    freezeTableName : true,
    timestamps      : false
})

module.exports = role_has_permissions