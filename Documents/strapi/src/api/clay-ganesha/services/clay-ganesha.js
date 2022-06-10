'use strict';

/**
 * clay-ganesha service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::clay-ganesha.clay-ganesha');
