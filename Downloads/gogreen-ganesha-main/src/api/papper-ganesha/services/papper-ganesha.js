'use strict';

/**
 * papper-ganesha service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::papper-ganesha.papper-ganesha');
