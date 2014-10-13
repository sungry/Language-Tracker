var EditView = Backbone.View.extend({
  initialize: function() {
    this.render();
  },

  render: function() {
    p('in render');
    var $test = $('<h1>CONTENT</h1>');
    $('.content').append($test);
  }
});