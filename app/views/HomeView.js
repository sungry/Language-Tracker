var HomeView = Backbone.View.extend({
  el: $('.content'),

  initialize: function(){
    this.$el.html('');
    this.render();
  },

  render: function(){
    var $welcome = $('<h1>Welcome!</h1><p>Click Edit to save notes and View to see them.</p>');
    this.$el.append($welcome);
  }
});