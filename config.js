/* Configuration file for the monitor server */
var config = {};

/* To add config values do:
 * config.sample = process.env.SAMPLE || 'DOIWORK';
 *
 */
 config.port = process.env.PORT || 8080;

 config.root = process.env.ROOT || 'public';

/* Export these configuration values */
module.exports = config;