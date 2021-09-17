/**
 * Created by PanJiaChen on 16/11/18.
 */

/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validMobileNumber(str) {
  // const valid_map = ['admin', 'editor']
  // return valid_map.indexOf(str.trim()) >= 0

  // Indonesian Mobile Number Validation
  var pattern = /\+?([ -]?\d+)+|\(\d+\)([ -]\d+)/g
  return pattern.test(str) // returns a boolean
}
