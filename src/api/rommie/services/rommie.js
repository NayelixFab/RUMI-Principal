'use strict';

/**
 * rommie service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::rommie.rommie');
