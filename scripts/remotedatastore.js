(function (window) {
  'use strict';
  var App = window.App || {};
  var $ = window.jQuery;

  function RemoteDataStore(url) {
    if (!url) {
      throw new Error('No remote URL supplied.');
    }
    this.serverUrl = url;
  }

  RemoteDataStore.prototype.add = function(key, value) {

    $.post(this.serverUrl, val);
  };

  App.RemoteDataStore = RemoteDataStore;
  window.App = App;
})(window);
