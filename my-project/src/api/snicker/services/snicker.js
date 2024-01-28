'use strict';

/**
 * snicker service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::snicker.snicker');
