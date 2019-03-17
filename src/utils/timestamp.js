/* @flow */

/**
 * Generate Timestamp string from current time
 * @return {string} - Timestamp
 */
function getTimestamp(): string {
  return new Date().getTime().toString();
}

module.exports = {
  getTimestamp
};
