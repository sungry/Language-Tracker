var EditView = Backbone.View.extend({

  el: $('.content'),

  initialize: function() {
    this.render();
  },

  template: _.template( $("#edit").html(), {} ),

  render: function() {
    this.$el.html(this.template);
  }
});
