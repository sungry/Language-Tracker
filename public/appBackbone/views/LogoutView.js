var LogoutView = Backbone.View.extend({
  el: $('.content'),

  initialize: function(){
    this.$el.html('');
    this.render();
  },

  render: function(){
    var $logout = $('<h1>You are now logged out!</h1>')
    this.$el.append($logout);
  }
});