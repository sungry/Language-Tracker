var EditView = Backbone.View.extend({
  
  initialize: function() {
    this.render();
  },

  render: function() {
    var $test = $('<h1>CONTENT</h1>');
    $('.content').html('');
    $('.content').append($test);
  }
});