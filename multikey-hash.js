var MurmurHash3 = require('imurmurhash');
var tokenize = require('simple-token');

/**
 * Generates a hash using arguments
 *
 * @param {...*} keys - Used to generate the hash with [MurmurHash3](https://github.com/jensyt/imurmurhash-js)
 * @return {Number} the generated hash
 * @api public
 */
function hash() {
  var hashState = MurmurHash3();
  for (var i = 0, len = arguments.length ;  i < len; i++) {
    hashState.hash(tokenize(arguments[i]));
  }
  return hashState.result();
}

module.exports = hash;