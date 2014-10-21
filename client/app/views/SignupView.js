var SignupView = Backbone.View.extend({
  el: $('.content'),

  initialize: function(){
    this.$el.html('');
    this.render();
  },

  render: function(){
    var $signup = $('<h1>User accounts coming soon!</h1>')
    this.$el.append($signup);
  }
});