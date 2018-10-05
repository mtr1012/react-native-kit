export default {
  validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  },
  /**
   * return validate email with a space at last 
   * @param {*} email 
   */
  validateEmailAdviseOther(email) {
    var re = /\S+@\S+\.\S+\s/;
    return re.test(email);
  },

  validateUrl(link) {
    var regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/
    return regexp.test(link);
  }
}