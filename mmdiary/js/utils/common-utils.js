/**
 * @author leon
 */

let CommonUtils = {

  isValidMobile: function(mobile) {
    var mobileRegex = /^1[3|4|5|7|8][0-9]{9}$/;
    return mobileRegex.test(mobile);
  }

}

export default CommonUtils;