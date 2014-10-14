var NotesModelView = Backbone.View.extend({
  el: $('.content'),

  model: NotesModel,

  initialize: function(){
    this.render();
  },

  template: _.template('<h3>Type: <%= type %><h3><br><p><%= body %></p>'),

  render: function(){
    this.$el.append(this.template(this.model.attributes));
  }
});