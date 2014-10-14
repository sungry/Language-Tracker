var ViewView = Backbone.View.extend({
  el: $('.content'),

  initialize: function() {
    this.render();
  },

  template: _.template( $("#view").html(), {} ),

  render: function() {
    this.$el.html(this.template);
  }  
});