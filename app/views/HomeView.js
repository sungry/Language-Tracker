var HomeView = Backbone.View.extend({
  el: $('.content'),

  initialize: function(){
    this.$el.html('');
    this.render();
  },

  render: function(){
    var $welcome = $('<h1>Welcome!</h1>')
    this.$el.append($welcome);
  }
});