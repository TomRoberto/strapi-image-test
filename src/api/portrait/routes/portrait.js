"use strict";

/**
 * portrait router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::portrait.portrait", {
  config: {
    create: {
      middlewares: [
        (ctx, next) => {
          console.log(ctx);
          return next();
        },
      ],
    },
  },
});
