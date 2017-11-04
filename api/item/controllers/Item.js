'use strict';

/**
 * Item.js controller
 *
 * @description: A set of functions called "actions" for managing `Item`.
 */

module.exports = {

  /**
   * Retrieve item records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    const data = await strapi.services.item.fetchAll(ctx.query);

    // Send 200 `ok`
    ctx.send(data);
  },

  /**
   * Retrieve a item record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    const data = await strapi.services.item.fetch(ctx.params);

    // Send 200 `ok`
    ctx.send(data);
  },

  /**
   * Create a/an item record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    const data = await strapi.services.item.add(ctx.request.body);

    // Send 201 `created`
    ctx.created(data);
  },

  /**
   * Update a/an item record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    const data = await strapi.services.item.edit(ctx.params, ctx.request.body) ;

    // Send 200 `ok`
    ctx.send(data);
  },

  /**
   * Destroy a/an item record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    const data = await strapi.services.item.remove(ctx.params);

    // Send 200 `ok`
    ctx.send(data);
  }
};
