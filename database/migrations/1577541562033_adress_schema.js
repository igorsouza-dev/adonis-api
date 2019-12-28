"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class AdressSchema extends Schema {
  up() {
    this.create("addresses", table => {
      table.increments();
      table
        .integer("user_id")
        .unsigned()
        .references("id")
        .inTable("users")
        .onUpdate("CASCADE")
        .onDelete("SET NULL");
      table.string("street").notNullable();
      table.string("district").notNullable();
      table.string("number");
      table.string("city").notNullable();
      table.string("state").notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("addresses");
  }
}

module.exports = AdressSchema;
