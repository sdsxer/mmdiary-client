/**
 * @author
 */

let RandomUtils = {

  random: function(lower, upper) {
    return Math.floor(Math.random() * (upper - lower));
  }
};

export default RandomUtils;