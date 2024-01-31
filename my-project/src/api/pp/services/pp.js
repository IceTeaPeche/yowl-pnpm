'use strict';

/**
 * pp service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::pp.pp');
