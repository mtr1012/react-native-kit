module.exports = {
  componentWillMount: function () {
    this._unmounted = false;
  },

  componentWillUnmount: function () {
    this._unmounted = true;
  },
};