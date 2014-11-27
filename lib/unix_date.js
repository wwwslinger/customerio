/*
* Return a UNIX timestamp for a given date. If no
* date is provided, return the UNIX timestamp for right now.
*/
var _ = require('lodash');


module.exports = function (date) {

  // Default to now
  if (!date) {
    date = new Date();
  }

  // Ensure date format
  if (_.isString(date)) {
    date = new Date(date);
  }

  var unix = Math.round(date.getTime() / 1000);

  return unix;

};